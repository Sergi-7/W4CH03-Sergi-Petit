import { render, screen } from "@testing-library/react";
import Key from "./Key.js";

describe("Given a Key component", () => {
  describe("When it receives a number", () => {
    test("Then it should display a button with the number", () => {
      const text = {
        number: "1",
      };

      const expectedText = text.number;

      render(<Key number={text.number} actionOnClick={() => {}}></Key>);

      screen.debug();
      const expectedNumber = screen.getByText(expectedText);

      expect(expectedNumber).toBeInTheDocument();
    });
  });
});
