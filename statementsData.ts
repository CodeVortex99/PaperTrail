export interface StatementSegment {
  text: string;
  annotation?: string;
}

export interface PersonalStatement {
  id: string;
  title: string;
  course: string;
  university: string;
  paragraphs: StatementSegment[][];
}

export const statements: PersonalStatement[] = [
  {
    id: "med-oxford",
    title: "Medicine Personal Statement — Successful Oxford Applicant",
    course: "Medicine",
    university: "University of Oxford",
    paragraphs: [
      [
        { text: "My fascination with human biology was galvanized during a vascular surgery placement at Oxford’s John Radcliffe Hospital, where I watched a surgeon perform a carotid endarterectomy." },
        {
          text: " Observing the microscopic precision required to suture the arterial wall made me realize that clinical excellence is a fusion of intellectual synthesis and manual dexterity.",
          annotation: "Superb opening sentence. Instead of relying on a cliché like 'I have always wanted to be a doctor', this starts with a specific clinical setting and observation, showing mature interest and experience right away."
        }
      ],
      [
        { text: "To deepen my scientific foundations, I read Atul Gawande’s Being Mortal, which forced me to grapple with the shift from curative interventions to palliative care." },
        {
          text: " This prompted me to write an essay on how doctors negotiate quality versus length of life, winning my school’s annual science prize.",
          annotation: "Excellent super-curricular engagement. The applicant does not just list a book title but reflects critically on its themes—especially the shift in modern medicine's purpose—showing emotional intelligence and depth."
        }
      ],
      [
        { text: "Furthermore, volunteering weekly at a local care home for dementia patients has refined my active listening and non-verbal communication skills." },
        {
          text: " Assisting residents with cognitive impairments taught me that patience and empathy are as therapeutic as pharmaceutical interventions.",
          annotation: "This paragraph connects clinical skills with a long-term volunteering commitment. Care home volunteering shows reliability and empathy, which are core values of the NHS constitution."
        }
      ]
    ]
  },
  {
    id: "law-cambridge",
    title: "Law Personal Statement — Successful Cambridge Applicant",
    course: "Law",
    university: "University of Cambridge",
    paragraphs: [
      [
        { text: "My desire to study law stem from observing how legal systems balance state authority with individual liberties, a tension highlighted when I read Tom Bingham’s The Rule of Law." },
        {
          text: " Bingham's defense of the absolute independence of the judiciary catalyzed my passion to analyze the structural rules governing our society.",
          annotation: "A strong academic opening. Bingham's work is a classic text, and pointing directly to the inherent tension between state authority and civil liberties demonstrates an analytical mindset suitable for Cambridge."
        }
      ],
      [
        { text: "This interest led me to attend a trial at the Old Bailey, focusing on a case concerning joint enterprise in criminal conspiracy." },
        {
          text: " I was fascinated by how the prosecution established intent and how secondary liability doctrines must be strictly calibrated to avoid systemic injustice.",
          annotation: "Attending real trials is excellent, but analyzing the specific legal doctrines (like joint enterprise) is what makes this stand out. It transitions from passive sightseeing to active legal analysis."
        }
      ],
      [
        { text: "In addition to academic pursuits, being a captain of the debate team has honed my ability to dissect complex arguments under pressure." },
        {
          text: " Preparing motions and anticipating counter-arguments has directly prepared me for the rigorous, logic-driven nature of university-level jurisprudence.",
          annotation: "This extracurricular activity is framed perfectly around transferable legal skills: structured argumentation, critical thinking under pressure, and concise communication."
        }
      ]
    ]
  },
  {
    id: "cs-imperial",
    title: "Computer Science Personal Statement — Successful Imperial Applicant",
    course: "Computer Science",
    university: "Imperial College London",
    paragraphs: [
      [
        { text: "My entry point into computer science was not merely writing code, but understanding how computational limits restrict our ability to model real-world phenomena efficiently." },
        {
          text: " To explore this, I designed a pathfinding algorithm in Python to simulate urban traffic congestion under severe memory constraints.",
          annotation: "A brilliant opening that goes beyond 'I like building games' or 'I like PCs'. It frames computer science as the study of computational complexity and limits, which matches university level perspectives."
        }
      ],
      [
        { text: "To expand my mathematical rigor, I completed a course on discrete mathematics, focusing on graph theory and algorithmic complexity." },
        {
          text: " I applied Dijkstra's algorithm to analyze network routing protocols, realizing how discrete structures underpin modern internet scaling.",
          annotation: "Highlighting discrete mathematics and graph theory is crucial for top CS departments. It demonstrates that the candidate understands Computer Science is a mathematical discipline, not just software engineering."
        }
      ],
      [
        { text: "Outside of academics, my participation in the local hackathon taught me the value of rapid prototyping and cross-disciplinary collaboration." },
        {
          text: " Leading the backend integration taught me how to coordinate APIs and write highly modular, clean code that is easy to maintain.",
          annotation: "Collaborative projects and hackathons show teamwork, adaptability, and real-world application of technical skills. The key here is the focus on team dynamics and modular software design."
        }
      ]
    ]
  }
];
