export interface SRSState {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextDue: number;
}

export function calculateSM2(rating: 'again' | 'hard' | 'good' | 'easy', currentState?: SRSState): SRSState {
  const state: SRSState = currentState ? { ...currentState } : {
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextDue: Date.now()
  };

  if (rating === 'again') {
    state.interval = 0;
    state.repetitions = 0;
  } else if (rating === 'hard') {
    state.repetitions += 1;
    state.interval = state.interval === 0 ? 1 : Math.ceil(state.interval * 1.2);
    state.easeFactor = Math.max(1.3, state.easeFactor - 0.15);
  } else if (rating === 'good') {
    state.repetitions += 1;
    if (state.interval === 0) {
      state.interval = 1;
    } else {
      state.interval = Math.ceil(state.interval * state.easeFactor);
    }
  } else if (rating === 'easy') {
    state.repetitions += 1;
    if (state.interval === 0) {
      state.interval = 4;
    } else {
      state.interval = Math.ceil(state.interval * state.easeFactor * 1.3);
    }
    state.easeFactor = state.easeFactor + 0.15;
  }

  // Ensure easeFactor is never below 1.3
  if (state.easeFactor < 1.3) {
    state.easeFactor = 1.3;
  }

  state.nextDue = Date.now() + (state.interval * 24 * 60 * 60 * 1000);

  return state;
}
