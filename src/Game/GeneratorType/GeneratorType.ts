enum GeneratorType {
  Miner = "Miner",
  Drill = "Drill",
  Jackhammer = "Jackhammer",
  Pump = "Pump",
  Loader = "Loader",
  Conveyor = "Conveyor",
  Furnace = "Furnace",
  Smelter = "Smelter",
  Refinery = "Refinery",
}

export type Generator = {
  name: string;
  baseProfit: number;
  baseCost: number;
  bought: boolean;
  level: number;
};

export const Generators = Object.values(GeneratorType).map(
  (generatorType, i) =>
    ({
      name: generatorType,
      baseProfit: Math.log(i + 1) * 10,
      baseCost: i + 1 * 10,
      bought: false,
      level: 0,
    }) as Generator,
);

export default GeneratorType;
