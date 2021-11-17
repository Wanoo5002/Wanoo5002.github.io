function stepMark(count) {
  for (var i = 0; i < count; i++) {
    step();
    mark();
  }
}

function square(size = 2) {
  for (var i = 0; i < 4; i++) {
    stepMark(size);
    turnRight();
  }
}

async function stepN(count) {
  for (var i = 0; i < count; i++) {
      await step();
  }
}

function wallAhead() {
  return cellAhead() === 5;
}

async function moveWhileWallRight() {
  while (true) {
    await step();
    turnRight();
    if (!wallAhead()) break;
    turnLeft();
  }
}
async function moveWhileInHouse() {
  while (cellAhead() !== 0) {
    var a = cellAhead();
    if (a === 3 || a === 6) {
      await step();
    } else if (a === 5) {
      turnLeft();
    }
  }
}

async function main() {
  await stepN(5);
  turnRight();
  while (!wallAhead()) {
    await step();
  }
  turnLeft();
  while (cellAhead() !== 6) {
    await moveWhileWallRight();
  }
  moveWhileInHouse();

}

  
//==================================================================

let dirX = 1, dirY = 0;
let queue = [];

function sleep(ms = 100) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mark(color = 'yellow') {
  document.getElementById(`cell-${y}-${x}`).style.backgroundColor = color;
  await sleep();
}

async function step() {
  move(dirX, dirY);
  await sleep();
}

function turnRight() {
  if (dirX == 1) {
    dirX = 0; dirY = 1;
  } else if (dirX == -1) {
    dirX = 0; dirY = -1;
  } else if (dirY == 1) {
    dirX = -1; dirY = 0;
  } else {
    dirX = 1; dirY = 0;
  }
}

function turnLeft() {
  if (dirX == 1) {
    dirX = 0; dirY = -1;
  } else if (dirX == -1) {
    dirX = 0; dirY = 1;
  } else if (dirY == 1) {
    dirX = 1; dirY = 0;
  } else {
    dirX = -1; dirY = 0;
  }
}

function cellAhead() {
  const newX = x + dirX;
  const newY = y + dirY;
  if (newX < 0 || newY < 0 || newX > maxX || newY > maxY) return -1;
  return level[newY][newX];
}

main();