import { formatDate } from "./utils";

describe("Utils", () => {
  it("should return formatted data on timestamp", () => {
    expect(formatDate(1646412499232)).toBe("4-3-2022 20:48");
  });
});
