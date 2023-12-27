import classNames from "classnames";

export interface GeneratorProps {
  amountToBuy: number;
  bought: boolean;
  className?: string;
  buyGenerator: (
    amount: number,
    currentLevel: number,
    shouldBuyingRound: boolean,
  ) => void;
  level: number;
  name: string;
  profit: number;
  shouldBuyingRound: boolean;
}

export default function Generator({
  amountToBuy,
  bought,
  className,
  buyGenerator,
  level,
  name,
  profit,
  shouldBuyingRound,
  ...rest
}: GeneratorProps) {
  const handleBuyGenerator = () => {
    buyGenerator(amountToBuy, level, shouldBuyingRound);
  };

  const classes = classNames("w-sm m4", className, {
    "bg-green-500": !bought,
  });

  return (
    <button {...rest} className={classes} onClick={handleBuyGenerator}>
      <p>{name}</p>
      <ul>
        <ul>Profit: {profit}</ul>
        <ul>Level: {level}</ul>
      </ul>
    </button>
  );
}
