import { useReducer, useState } from "react";
import { ClickTarget } from "../ClickTarget";
import { Generator } from "../Generator";
import { initialState } from "./GameContext";
import { gameReducer } from "./GameReducer";
import type { Generator as TGenerator } from "./GeneratorType";

enum AmountToBuy {
  One = 1,
  Ten = 10,
  TwentyFive = 25,
  Fifty = 50,
  OneHundred = 100,
}

export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [amountToBuy, setAmountToBuy] = useState<AmountToBuy>(AmountToBuy.One);
  const [shouldBuyingRound, setShouldBuyingRound] = useState<boolean>(true);

  const incrementScore = (amount: number) => {
    dispatch({ type: "DELTA_SCORE", payload: amount });
  };

  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <>
      <ClickTarget onClick={handleClick} />
      <h1>Generators</h1>
      <div>
        {state.generators.map((generator: TGenerator, i: number) => {
          const className =
            i - 1 > 0 && state.generators[i - 1].bought ? "" : "hidden";
          return (
            <Generator
              {...generator}
              key={generator.name}
              buyGenerator={handleClick}
              profit={generator.baseProfit * generator.level}
              shouldBuyingRound={shouldBuyingRound}
              amountToBuy={amountToBuy}
              className={className}
            />
          );
        })}
      </div>

      <div className="flex flex-content-between w-full">
        <button onClick={() => setAmountToBuy(AmountToBuy.One)}>1</button>
        <button onClick={() => setAmountToBuy(AmountToBuy.Ten)}>10</button>
        <button onClick={() => setAmountToBuy(AmountToBuy.TwentyFive)}>
          25
        </button>
        <button onClick={() => setAmountToBuy(AmountToBuy.Fifty)}>50</button>
        <button onClick={() => setAmountToBuy(AmountToBuy.OneHundred)}>
          100
        </button>
      </div>

      <p>Score: {state.score}</p>
    </>
  );
}
