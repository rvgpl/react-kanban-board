import { render, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("should render", () => {
    const { container } = render(<Button onClick={jest.fn()}>Press Me</Button>);
    expect(container).toMatchSnapshot();
  });
  it("should call onclick prop on click", () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button onClick={onClickMock}>Press Me</Button>
    );
    fireEvent.click(getByTestId("button"));
    expect(onClickMock).toBeCalledTimes(1);
  });

  it("should render a disabled button", () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button onClick={jest.fn()} disabled>
        Press Me
      </Button>
    );

    expect(getByTestId("button")).toBeDisabled();
  });
});
