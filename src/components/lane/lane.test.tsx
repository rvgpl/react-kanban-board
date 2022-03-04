import { render } from "@testing-library/react";
import { Lane } from "./lane";

describe("Lane", () => {
  it("should render", () => {
    const { container } = render(
      <Lane title="todo">
        <p>Item 1</p>
        <p>Item 2</p>
      </Lane>
    );
    expect(container).toMatchSnapshot();
  });
});
