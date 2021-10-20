import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given a Keyboard component", () => {
  describe("When it receives an array of numbers", () => {
    test.skip("Then it should display a group of buttons with the number", () => {
      const testArray = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
      ];
      const expectedLength = 7;

      render(
        <Keyboard keyArray={testArray} actionOnClick={() => {}}></Keyboard>
      );

      screen.debug();
      const expectedNumber = screen.getByText(expectedLength);

      expect(expectedNumber).toBeInTheDocument();
    });
  });
});
