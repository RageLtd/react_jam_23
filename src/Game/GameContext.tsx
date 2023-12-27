import { createContext } from "react";
import { Generators } from "./GeneratorType";

export const initialState = {
  score: 0,
  generators: Generators,
};

const defaultDispatch = () => {};

export const GameContext = createContext({
  state: initialState,
  dispatch: defaultDispatch,
});
