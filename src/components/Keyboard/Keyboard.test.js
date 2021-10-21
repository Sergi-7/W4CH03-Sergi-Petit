import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given a Keyboard component", () => {
  describe("When it receives an array of numbers", () => {
    test("Then it should display a group of buttons with the number", () => {
      const testArray = [
        { number: 1, actionOnClick: () => {} },
        { number: 2, actionOnClick: () => {} },
        { number: 3, actionOnClick: () => {} },
        { number: 4, actionOnClick: () => {} },
        { number: 5, actionOnClick: () => {} },
        { number: 6, actionOnClick: () => {} },
        { number: 7, actionOnClick: () => {} },
      ];
      const totalWords = 7;

      render(
        <Keyboard keyArray={testArray} actionOnClick={() => {}}></Keyboard>
      );

      const expectedNumber = screen.getAllByTestId("test-number").length;

      expect(expectedNumber).toBe(totalWords);
    });
  });
});
