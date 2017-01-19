let puzzle = [];
let guesses = [];
const speedLevel = 620;
const puzzleLength = 4;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function randomId(squareCount) {
  return (Math.floor(Math.random() * squareCount)).toString();
}

function generatePuzzle(seqLength) {
  while(puzzle.length < seqLength) {
    puzzle.push(randomId(puzzleLength));
  }
  return puzzle;
}

function toggle(elem, className) {
  elem.classList.toggle(className);
}

function selectPuzzleSquares(puzzle) {
  sleep(speedLevel).then(() => {
    if(puzzle.length != 0) {
      const id = puzzle[0];
      const elem = document.querySelector(`[data-id='${id}']`);
      selectSquare(elem, puzzle);
    }
  });
}

function selectSquare(elem, puzzle) {
  toggle(elem, "bright");
  sleep(speedLevel).then(() => {
    toggle(elem, "bright");
    puzzle.shift()
    selectPuzzleSquares(puzzle);
  });
}

function runSequence() {
  puzzle = generatePuzzle(puzzleLength);
  selectPuzzleSquares(puzzle);
}

function highlightSelectedSquare(event) {
  const elem = event.target;
  toggle(elem, "bright");
  sleep(speedLevel).then(() => {
    toggle(elem, "bright");
    guesses.push(elem.dataset.id);
  });
}

const squares = document.getElementsByClassName("square");
const start = document.getElementById("start");

for (var square of squares) {
  square.addEventListener("click", highlightSelectedSquare, false);
}

start.addEventListener("click", runSequence, false);
