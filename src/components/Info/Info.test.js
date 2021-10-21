import { render, screen } from "@testing-library/react";
import Info from "./components/Info/Info";

describe("Given an info component", () => {
  describe("When it receives a text", () => {
    test.only("Then it should display a span with the text", () => {
      const text = {
        text: "hang",
      };

      const expectedText = text.text;

      render(<Info text={expectedText}></Info>);

      screen.debug();
      const expectedResult = screen.getByText(expectedText);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
