import { fireEvent, render } from "@testing-library/react";
import { TextField } from "./text-field";

describe("TextField", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <TextField value="Text" onChange={jest.fn()} />
    );
    expect(getByTestId("text-field")).toBeInTheDocument();
  });

  it("should call onChange prop on text input", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <TextField value="todo" onChange={onChange} />
    );
    fireEvent.change(getByTestId("text-field"), {
      target: { value: "new value" },
    });
    expect(onChange).toBeCalledWith("new value");
  });
});
