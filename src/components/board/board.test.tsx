import { render } from "@testing-library/react";
import { Board } from "./board";

describe("Board", () => {
  it("should render", () => {
    const { container } = render(<Board />);
    expect(container).toMatchSnapshot();
  });
});
