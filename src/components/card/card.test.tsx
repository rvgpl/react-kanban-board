import { render, fireEvent } from "@testing-library/react";
import { Card } from "./card";

const sampleTask = {
  id: 1,
  text: "Task 1",
  createdAt: 1646412499232,
};
describe("Card", () => {
  it("should render", () => {
    const { container } = render(
      <Card onClick={jest.fn()} task={sampleTask} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should not render button on disableButton is true", () => {
    const { container } = render(
      <Card onClick={jest.fn()} task={sampleTask} disableButton />
    );
    expect(container).toMatchSnapshot();
  });
  it("should call onClick prop on click of button", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Card onClick={onClickMock} task={sampleTask} />
    );
    fireEvent.click(getByText("Move >"));
    expect(onClickMock).toBeCalledTimes(1);
  });
});
