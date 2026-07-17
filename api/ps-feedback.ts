export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { text } = req.body;

    if (!text) {
      res.status(200).json({ highlights: [] });
      return;
    }

    // 1. If OpenAI API key is present, run real structural analysis
    if (process.env.OPENAI_API_KEY) {
      const systemPrompt = `You are a UCAS admissions tutor. DO NOT write or rewrite the essay for the student. Only provide structural critique.
Analyze the student's personal statement draft. Identify specific text snippets containing cliches, weak verbs, lack of evidence, or structural issues.
Your response MUST be a single, valid JSON object matching this schema exactly, with NO markdown block formatting or additional text.
Schema:
{
  "highlights": [
    {
      "text_snippet": "exact snippet of text from the essay",
      "issue": "cliche" | "weak_verb" | "lack_of_evidence" | "structure",
      "suggestion": "constructive, encouraging critique and specific advice on how the student can improve this snippet without writing it for them"
    }
  ]
}`;

      const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: `Personal Statement Draft:\n\n${text}` }
          ],
          response_format: { type: "json_object" },
          temperature: 0.3
        })
      });

      if (chatResponse.ok) {
        const result = await chatResponse.json();
        const replyText = result.choices[0].message.content;
        res.status(200).json(JSON.parse(replyText));
        return;
      } else {
        console.error("OpenAI Chat Completion failed", await chatResponse.text());
      }
    }

    // 2. High-Quality Fallback Mock Scanner
    const highlights = [];
    const lowerText = text.toLowerCase();

    // Scan for cliches
    const cliches = [
      { pattern: "ever since i was a child", phrase: "ever since I was a child", suggestion: "Starting with childhood is a common cliché. Admissions tutors want to know about your recent academic interests. Discuss a recent book, lecture, or project instead." },
      { pattern: "ever since i was young", phrase: "ever since I was young", suggestion: "Avoid starting with early childhood. Focus on your recent intellectual discoveries and current motivations." },
      { pattern: "passion for", phrase: "passion for", suggestion: "Tutors see the word 'passion' in almost every essay. Show your enthusiasm through actions, readings, and specific topics rather than simply labeling it a passion." },
      { pattern: "always been fascinated", phrase: "always been fascinated", suggestion: "Instead of declaring you have 'always' been fascinated, prove it. Detail a specific moment or concept that sparked this fascination recently." },
      { pattern: "double-edged sword", phrase: "double-edged sword", suggestion: "This is a overused idiom. Use precise academic terminology to describe the dual nature of the concept you are analyzing." },
      { pattern: "in conclusion", phrase: "in conclusion", suggestion: "Starting your final paragraph with 'In conclusion' is redundant and feels unpolished. End on a strong, forward-looking statement about your fit for the university instead." }
    ];

    cliches.forEach(item => {
      const idx = lowerText.indexOf(item.pattern);
      if (idx !== -1) {
        // Retrieve the exact casing from the original text
        const snippet = text.substring(idx, idx + item.pattern.length);
        highlights.push({
          text_snippet: snippet,
          issue: "cliche",
          suggestion: item.suggestion
        });
      }
    });

    // Scan for weak verbs
    const weakVerbs = [
      { pattern: /\b(did)\b/gi, suggestion: "Instead of the weak verb 'did', use an active, high-impact verb like 'executed', 'implemented', 'conducted', or 'designed' to show proactive involvement." },
      { pattern: /\b(got)\b/gi, suggestion: "Instead of 'got', use a more precise verb like 'acquired', 'attained', or 'secured' to sound more academic and professional." },
      { pattern: /\b(helped)\b/gi, suggestion: "Instead of the weak verb 'helped', describe your specific role using verbs like 'facilitated', 'coordinated', 'assisted', or 'contributed' to clarify your level of contribution." }
    ];

    weakVerbs.forEach(item => {
      let match;
      while ((match = item.pattern.exec(text)) !== null) {
        const snippet = match[0];
        // Ensure no duplicate highlights for the exact same text span coordinate (or simple snippet text)
        const exists = highlights.some(h => h.text_snippet === snippet);
        if (!exists) {
          highlights.push({
            text_snippet: snippet,
            issue: "weak_verb",
            suggestion: item.suggestion
          });
        }
      }
    });

    // Scan for lack of evidence (e.g. stating something without details)
    const statementsWithoutEvidence = [
      { pattern: "i am a good team player", phrase: "I am a good team player", suggestion: "This is a bold claim. Back it up with brief evidence. Mention a specific group project, robotics challenge, or student committee where you demonstrated collaborative leadership." },
      { pattern: "i have excellent time management", phrase: "I have excellent time management", suggestion: "Tutors want proof. Explain how you balanced your rigorous A-Level studies with specific extracurricular commitments or personal coding projects." },
      { pattern: "i enjoy reading academic papers", phrase: "I enjoy reading academic papers", suggestion: "Which papers? Tutors want specifics. Name one journal article or author, and describe the specific hypothesis or finding that you found compelling." }
    ];

    statementsWithoutEvidence.forEach(item => {
      const idx = lowerText.indexOf(item.pattern.toLowerCase());
      if (idx !== -1) {
        const snippet = text.substring(idx, idx + item.pattern.length);
        highlights.push({
          text_snippet: snippet,
          issue: "lack_of_evidence",
          suggestion: item.suggestion
        });
      }
    });

    // General structural critiques (fallback if nothing else found or to enrich feedback)
    if (highlights.length === 0 && text.length > 50) {
      // Suggest enhancing introduction if it lacks specific nouns
      if (!lowerText.includes("read") && !lowerText.includes("book") && !lowerText.includes("research")) {
        highlights.push({
          text_snippet: text.split(/[.!?]/)[0],
          issue: "structure",
          suggestion: "Your introduction starts directly but doesn't mention any super-curricular source material. Consider introducing a specific publication or finding early to anchor your academic interest."
        });
      }
    }

    res.status(200).json({ highlights });

  } catch (err) {
    console.error("Personal statement critique error", err);
    res.status(500).json({ error: "Internal grading error" });
  }
}
