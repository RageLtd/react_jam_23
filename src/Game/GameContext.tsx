import React, { createContext } from 'react';

export const initialState = {
  score: 0,
};

const defaultDispatch = () => {};

export const GameContext = createContext({
  state: initialState,
  dispatch: defaultDispatch
});