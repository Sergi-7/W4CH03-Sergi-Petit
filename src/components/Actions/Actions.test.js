import { render, screen } from "@testing-library/react";
import Actions from "./Actions";

describe("Given an actions component", () => {
  describe("When it clicks one of both", () => {
    test("Then it should execute actionOnClick", () => {
      const testFunction = jest.fn();
      const action = "test";

      render(<Actions action={action} actionOnClick={testFunction}></Actions>);

      const expectedResult = screen.getByRole("button", { name: "Hang" });

      expect(testFunction).toHaveBeenCalledWith(expectedResult);
    });
  });
});
