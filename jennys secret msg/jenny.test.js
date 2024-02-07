const greet = require("./jenny");

describe("test jenny", () => {
  test("must return Hello + a name", () => {
    expect(greet("Jim")).toBe("Hello, Jim!");
    expect(greet("Sam")).toBe("Hello, Sam!");
  });

  test("must return special msg for Johnny", () => {
    expect(greet("Johnny")).toBe("Hello, my love!");
  });
});
