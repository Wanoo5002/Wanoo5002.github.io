let level = [
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 3, 7, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 5, 3, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 3, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 3, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 6, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 5, 3, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 3, 3, 3, 9, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let score = 0;
let scoreDiff = -50;
let x = 0;
let y = 0;
let rewardLemit = 300;
let rewardLemitInc = 300;
let box = 0;
let goldenBoxRade = 0.70;
const maxX = 39;
const maxY = 24;

const field = document.getElementById('field');

for (let y = 0; y < level.length; y++) {
  for (let x = 0; x < level[y].length; x++) {
    const cell = document.createElement('div');
    cell.id = `cell-${y}-${x}`;
    cell.classList.add('cell');
    cell.classList.add(`cell-${level[y][x]}`);
    cell.style.left = `${x * 30}px`;
    cell.style.top = `${y * 30}px`;
    field.appendChild(cell);
  }
}

function mapAt(x, y) {
  return level[y][x];
}

function changeMapAt(x, y, value) {
  level[y][x] = value;
  document.getElementById(`cell-${y}-${x}`).className = `cell cell-${value}`;
}

function collectBox(boxType) {
  if (box != 0) return;

  box = boxType;
  player.classList.add('has-box');

  changeMapAt(x, y, 8);

  const boxX = x;
  const boxY = y;

  setTimeout(function () {
    const newType = Math.random() > goldenBoxRade ? 9 : 6;
    changeMapAt(boxX, boxY, newType);
  }, 20000);
}

function dropBox() {
  if (box === 0) return;

  if (box === 1) {
    changeScore(100);
  } else { 
    changeScore(200);
    scoreDiff = -50;
  }
  if (score >= rewardLemit) {
    revealTraps();
    rewardLemit += rewardLemitInc;
  }
  box = 0;
  player.classList.remove('has-box');
}


function changeScore(diff) {
  score += diff;
  if (score < 0) {
    score = 0;
  }
  document.getElementById('score').innerText = score;
}

function changeScoreDown() {
  changeScore(scoreDiff);
  scoreDiff -= 10;
}

function revealTrap(x, y) {
  setTimeout(function () {
    changeMapAt(x, y, 2);
  }, 5000);
  changeMapAt(x, y, 4);
} 

function revealTraps() {
  for (var y = 0; y < level.length; y++) {
    for (var x = 0; x < level[y].length; x++) {
      if (level[y][x] === 2) {
        revealTrap(x, y);
      }
    }
  }
}

function move(dx, dy) {
  const newX = x + dx;
  const newY = y + dy;

  if (newX < 0) return;
  if (newY < 0) return;
  if (newX > maxX) return;
  if (newY > maxY) return;
  if (mapAt(newX, newY) == 5) return;

  x = newX;
  y = newY;
  player.style.left = `${x * 30}px`;
  player.style.top = `${y * 30}px`;

  switch (mapAt(x, y)) {
    case 6:
      collectBox(1);
      break;
    case 9:
      collectBox(2);
      break;
    case 7:
      dropBox();
      break;
    case 4:
      if (score > 0)
        changeScoreDown();
      break;
    case 2:
      if (score > 0) {
        revealTrap(x, y);
        changeScoreDown();
      }
      break;
  }
}

const player = document.getElementById('player');
document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowLeft': move(-1, 0); break;
    case 'ArrowRight': move(1, 0); break;
    case 'ArrowUp': move(0, -1); break;
    case 'ArrowDown': move(0, 1); break;
  }
});