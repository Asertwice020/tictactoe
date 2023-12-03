const gameContainer = document.querySelector('.game_container');
const boxes = Array.from(gameContainer.children);
let checkResult = false;
let gameOver = false;
let filledBoard;

function playerClicked() {
  gameContainer.addEventListener('click', dynamicChanges)
}

function dynamicChanges(event) {
  let boardData = event.target.closest('.box')
  
  if(!gameOver) {
    boardData.innerText = `X`;
    gameOver = true;
  }
  else {
    boardData.innerText = `O`;
    gameOver = false;
  }
  var sumit = boxes.map( (item) => {
    return item.innerText;
  } );
}

function filterBoard() {
  filledBoard = boxes.map( (item) => {
    item.innerText != '';
    // return checkResult = true;
    console.log(filledBoard);
  })
  
  
  if(checkResult) {
    console.log(`hello are you waiting for me?`);
    checkWinner(filledBoard);
  }
}

playerClicked()
checkWinner(sumit)

function checkWinner(board) {
  console.log(board);
  // Check rows
  for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
          return board[i][0];
      }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
          return board[0][i];
      }
  }

  // Check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
      return board[0][0];
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
      return board[0][2];
  }
  
  console.log('win or lose but, result is here...');
  // If no winner
  return console.log('unfortunately, match drawn');;
}

// Example board
// const board = [
//   ['X', 'O', 'X'],
//   ['O', 'X', 'O'],
//   ['X', 'X', 'O']
// ];

// const winner = checkWinner(board);

// if (winner) {
//   console.log(`Player ${winner} wins!`);
// } else {
//   console.log("It's a draw or the game is ongoing.");
// }
