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

function selectSquare(event) {
  const elem = event.target;
  toggle(elem, "bright");
  sleep(250).then(() => {
    toggle(elem, "bright");
    guesses.push(elem.dataset.id);
  });
}

const squares = document.getElementsByClassName("square");
for (var square of squares) {
  square.addEventListener("click", selectSquare, false);
}
