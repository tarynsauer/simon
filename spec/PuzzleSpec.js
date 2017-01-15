describe("Puzzle", function() {
 it("return a puzzle sequence", function() {
    const puzzleLength = 5;
    expect(generatePuzzle(puzzleLength).length).toEqual(puzzleLength);
  });
});
