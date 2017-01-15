const guesses = [];

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function randomId(squareCount) {
  return (Math.floor(Math.random() * squareCount)).toString();
}

function generatePuzzle(seqLength) {
  const puzzle = [];
  while(puzzle.length < seqLength) {
    puzzle.push(randomId(4));
  }
  return puzzle;
}

function toggle(elem, className) {
  elem.classList.toggle(className);
}

function selectPuzzleSquares(puzzle) {
  if(puzzle.length != 0) {
    const id = puzzle[0];
    const elem = document.querySelector("[data-id='" + `${id}` + "']");
    toggle(elem, "bright");
    sleep(750).then(() => {
      toggle(elem, "bright");
      puzzle.shift()
      selectPuzzleSquares(puzzle);
    });
  }
}

function runSequence() {
  const puzzle = generatePuzzle(4);
  selectPuzzleSquares(puzzle);
}

function selectSquare(event) {
  const elem = event.target;
  toggle(elem, "bright");
  sleep(750).then(() => {
    toggle(elem, "bright");
    guesses.push(elem.dataset.id);
  });
}

const squares = document.getElementsByClassName("square");
const start = document.getElementById("start");

for (var square of squares) {
  square.addEventListener("click", selectSquare, false);
}

start.addEventListener("click", runSequence, false);


