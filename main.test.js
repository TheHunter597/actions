describe("main", () => {
  let shouldPass = false;
  if (Math.random() > 0.5) {
    shouldPass = true;
  }
  it("should pass", () => {
    expect(shouldPass).toBe(true);
  });
});
