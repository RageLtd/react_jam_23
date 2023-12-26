export function gameReducer(state : any, action : any) {
    switch (action.type) {
        case 'DELTA_SCORE':
            return { ...state, score: state.score + action.payload };
        default:
            return state;
    }
  }