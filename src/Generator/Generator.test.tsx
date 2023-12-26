import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Generator from "./Generator";

const defaultProps = {
  amountToBuy: 1,
  baseProfit: 1,
  level: 1,
  name: "Test Generator",
  shouldBuyingRound: true,
};

describe("Generator", () => {
  it("should call buyGenerator when clicked", () => {
    const buyGenerator = vi.fn();

    render(<Generator {...defaultProps} buyGenerator={buyGenerator} />);
    screen.getByText("Test Generator").click();

    expect(buyGenerator).toHaveBeenCalled();
  });
});
