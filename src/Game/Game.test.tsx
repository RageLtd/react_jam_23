import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Game } from "./index";
import { describe, it, expect, vi } from "vitest";

describe("Game", async () => {
  it('renders a ClickTarget button that emits "Clicked!" to the console', async () => {
    // Arrange
    render(<Game />);
    const consoleSpy = vi.spyOn(console, "log");
    const clickTarget = screen.getByText("Click me!");

    // Act
    await userEvent.click(clickTarget);

    // Assert
    expect(clickTarget).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith("Clicked!");
  });
});
