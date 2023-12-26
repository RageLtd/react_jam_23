import { useContext, useReducer } from "react";
import { initialState } from "./GameContext";

function gameReducer(state : any, action : any) {
  switch (action.type) {
      case 'DELTA_SCORE':
          return { ...state, score: state.score + action.payload };
      default:
          return state;
  }
}

export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  const incrementScore = (amount:number) => {
    dispatch({type: 'DELTA_SCORE', payload: amount})
  }

  return <p>Score: {state.score}</p>;
}
