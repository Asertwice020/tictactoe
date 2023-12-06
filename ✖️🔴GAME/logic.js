'use strict';
function initializeGame() {
  const gameContainer = document.querySelector('.game_container');
const boxes = [...gameContainer.children];

let winCard;
let restartBtn;
let gameOverWindow;
let currentPlayer = 'X';
let gameOver = false;

function restartGame() {
  restartBtn.addEventListener('click', instructionsToRestart)
}

function instructionsToRestart() {
  if(gameOver === true) {
    gameOver = false;
    for (const box of boxes) box.innerText = '';
    currentPlayer = 'X';
    gameOverWindow.remove();
  }
}

// THIS FUNCTION IS RESPONSIBLE TO: CREATING GAME OVER WINDOW AND PERFORM THE ELEMETS WORKINGS.
function createGamoOverWindow(playerSymbol1) {
  // PLAYER SYMBOL CARD
  winCard = document.createElement('div');
  winCard.className = `win_card`;
  getResult(playerSymbol1);

  // RESTART BUTTON
  restartBtn = document.createElement('button');
  restartBtn.className = `restart_btn`;
  restartBtn.innerText = `RESTART`;

  // PARENT ELEMENT OF THESE ABOVE 2
  gameOverWindow = document.createElement('div');
  gameOverWindow.id = `game_over_window`;
  
  addGameOverWindow();
}

function addGameOverWindow() {
    // APPENDING CHILDS IN THE PARENT ELEMENT
    gameOverWindow.append(winCard, restartBtn);

    // APPENDING PARENT ELEMENT IN THE GAMECONTAINER
    gameContainer.append(gameOverWindow);
}

function getResult(playerSymbol2) {
  if(playerSymbol2 !== `It's a Draw!`) {
    winCard.innerText = `${playerSymbol2} won`;
  }
  else {
    winCard.innerText = `${playerSymbol2}`
  }
}

function playMove(event) {
  if (!gameOver && event.target.innerText === '') {
    event.target.innerText = currentPlayer;
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    checkWinner();
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText) {
      gameOver = true;
      createGamoOverWindow(boxes[a].innerText);
      restartGame();
      return;
    }
  }

  if (boxes.every(box => box.innerText !== '')) {
    gameOver = true;
    createGamoOverWindow(`It's a Draw!`);
    restartGame();
  }
}

gameContainer.addEventListener('click', playMove);
}

initializeGame();