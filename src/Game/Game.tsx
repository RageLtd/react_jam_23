
import { useReducer } from "react";
import { ClickTarget } from "../ClickTarget";
import { initialState } from "./GameContext";
import { gameReducer } from "./GameReducer";

export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  const incrementScore = (amount:number) => {
    dispatch({type: 'DELTA_SCORE', payload: amount})
  }

  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <>
      <ClickTarget onClick={handleClick} />
      <p>Score: {state.score}</p>
    </>
  );
}
