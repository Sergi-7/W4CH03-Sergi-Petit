import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Given an action component", () => {
  describe("When it receives a text", () => {
    test("Then it should display a button with the text", () => {
      const text = {
        text: "hang",
      };

      const expectedText = "hang";

      render(<Action action={text.text} actionOnClick={() => {}}></Action>);

      screen.debug();
      const expectedResult = screen.getByText(expectedText);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
