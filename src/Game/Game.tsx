import { useContext, useReducer } from "react";
import { initialState } from "./GameContext";
import { gameReducer } from "./GameReducer";

export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  const incrementScore = (amount:number) => {
    dispatch({type: 'DELTA_SCORE', payload: amount})
  }

  return <p>Score: {state.score}</p>;
}
