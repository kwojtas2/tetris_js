let cellSize = 35;

let width = 10;
let height = 24;

let board;
let colors;
let timePassed = 0;

function setup() {
  let colors = [
    color(87,  194, 169),
    color(87,  94,  194),
    color(194, 128, 87),
    color(194, 185, 87),
    color(99,  194, 87),
    color(176, 87,  194),
    color(194, 87,  87)
  ];

  board = new Board(width, height, cellSize, colors);

  createCanvas(width * cellSize + 200, height * cellSize + 1);

  background(220);
  board.show();

  timePassed = 0;
}

function draw() {
  timePassed += deltaTime;
  if(timePassed >= 1000) {
    background(220);
    if(board.step() == false) {
      // GAME END :(
      noLoop();
      alert("Game end. Points: " + board.points);
    }
    board.show();
    timePassed = 0;
  }
}

function keyReleased() {
  if(keyCode === LEFT_ARROW) {
    board.move(0);
    board.show();
  } else if (keyCode === RIGHT_ARROW) {
    board.move(1);
    board.show();
  } else if (keyCode === UP_ARROW) {
    board.move(2);
    board.show();
  } else if(keyCode === DOWN_ARROW) {
    board.move(3);
    board.show();
  }


  return false;
}
