export interface GeneratorProps {
  amountToBuy: number;
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
  buyGenerator,
  level,
  name,
  profit,
  shouldBuyingRound,
}: GeneratorProps) {
  const handleBuyGenerator = () => {
    buyGenerator(amountToBuy, level, shouldBuyingRound);
  };

  return (
    <button onClick={handleBuyGenerator}>
      <p>{name}</p>
      <p>Profit: {profit}</p>
    </button>
  );
}
