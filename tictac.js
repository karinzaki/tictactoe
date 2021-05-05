// gameStatus is the variable to show who's turn it is and how the game ends
const gameStatus = document.querySelector('.game-status')

// identify the current player and a message to let the next player know it's their turn
let humanPlayer = 'X'
let computerPlayer = 'O'
let currentPlayer = humanPlayer

// alert the player it is their turn
const playersTurn = alert(currentPlayer + ', your turn to play!')

// // create winning/drawing messages
// const winningAlert = alert('Player ' + currentPlayer + ' won!')
// const drawAlert = alert('Game ends in a draw...') 

// assign the gameStatus variable in the HTML to the playersTurn
// gameStatus.innerHTML = playersTurn

// create a variable that accesses the cells in the grid
const gridCells = document.querySelectorAll('.game-grid')
const eachGridCellText = gridCells.forEach(element => element.addEventListener('click', updateText))


// access te clicked cell in the function and update it to the currentPlayer boht in index and the player
function updateText(clickedCellEvent) {

  // save the clicked cell in a variable
  const clickedCell = clickedCellEvent.target
  // grab the cell index as an integer from the clicked cell
  const cellIndex = parseInt(clickedCell.getAttribute('.cell'))

  // swap players depending on who played last
  if (currentPlayer != humanPlayer) {
    currentPlayer = computerPlayer
  } else {
    currentPlayer = humanPlayer
  }
  gameStatus[cellIndex] = currentPlayer
  clickedCell.innerHTML = currentPlayer
}

// computers turn to play; *10 because there's 9 chances to play and want to get to 9
function computersTurn () {
  var takenCell = false
  while (takenCell === false) {
    var computerRandomMove = (Math.random() * 10).toFixed()
    var computerMove = document.getElementById(computerRandomMove)
    var computerCellIndex = 
    computerMove.setAttribute(computerPlayer)
  }
}

// // after the player has had a turn, the computer has a turn - create a function to swap over players
// function swapPlayers () {
//   if (currentPlayer != humanPlayer) {
//     currentPlayer = computerPlayer 
//   } else {
//     currentPlayer = humanPlayer
//   }
// }

// // winning options
// const winningOptions = [
//   [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
// ]

// //check if the player has won or drew or still has room to play another round
// const eachGridCellElement = gridCells.forEach(element => checkMove))

// function checkMove () {
//   if (eachGridCell)
//     // do an if statement for each of the arrays in the winningOptions
//   }
// }