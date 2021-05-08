// identify the current player and a message to let the next player know it's their turn
let humanPlayer = 'X'
let computerPlayer = 'O'

// create a variable that accesses the cells in the grid
const gridCells = document.querySelectorAll('.game-grid')
const eachGridCellText = gridCells.forEach(element => element.addEventListener('click', updateText))

const playerSelection = document.querySelectorAll('.player-selection')
const selectedPlayer = playerSelection.forEach(element => element.addEventListener('click', setPlayer))

function setPlayer(clickedPlayerEvent) {
  const clickedPlayer = clickedPlayerEvent.target

  if (clickedPlayer.textContent == 'Player X') {
    var currentPlayer = humanPlayer
    var playerX = document.getElementById("x")
    playerSelection.forEach(element => element.removeEventListener('click', setPlayer))
    playerX.style.background = "rgb(255, 123, 0)"
  } 
  if (clickedPlayer.textContent == 'Player O') {
    var currentPlayer = computerPlayer
    var playerO = document.getElementById("o")
    playerSelection.forEach(element => element.removeEventListener('click', setPlayer))
    playerO.style.background = "rgb(255, 123, 0)"
  }
  h2.textContent = currentPlayer + " Your Turn to Play!"
} 

let currentPlayer = selectedPlayer

// let currentPlayer = humanPlayer

// set value to collect the heading from the HTML file
var h2 = document.querySelector('.h2')

// alert the player it is their turn
// h2.textContent = currentPlayer + " Your Turn to Play!"

// assign the gameStatus variable in the HTML to the playersTurn
// gameStatus.innerHTML = playersTurn

// access te clicked cell in the function and update it to the currentPlayer boht in index and the player
function updateText(clickedCellEvent) {

  // save the clicked cell in a variable
  const clickedCell = clickedCellEvent.target
  // grab the cell index as an integer from the clicked cell
  const cellIndex = parseInt(clickedCell.getAttribute('.cell'))
  // swap players depending on who played last; if the cell clicked displays an X, then the player is humanPlayer meaning next turn should be computerPlayer
  // defines the textContent first then checks it in the if statement
  if (clickedCell.textContent != '')
  return
  clickedCell.textContent = currentPlayer

  // set values for each Id to collect the content inside each cell
  var b1 = document.getElementById("1").textContent
  var b2 = document.getElementById("2").textContent
  var b3 = document.getElementById("3").textContent
  var b4 = document.getElementById("4").textContent
  var b5 = document.getElementById("5").textContent
  var b6 = document.getElementById("6").textContent
  var b7 = document.getElementById("7").textContent
  var b8 = document.getElementById("8").textContent
  var b9 = document.getElementById("9").textContent

  // set values for each Id to collect the cell itself
  var cell1 = document.getElementById("1")
  var cell2 = document.getElementById("2")
  var cell3 = document.getElementById("3")
  var cell4 = document.getElementById("4")
  var cell5 = document.getElementById("5")
  var cell6 = document.getElementById("6")
  var cell7 = document.getElementById("7")
  var cell8 = document.getElementById("8")
  var cell9 = document.getElementById("9")

  if (clickedCell.textContent != humanPlayer) {
    currentPlayer = humanPlayer
    h2.textContent = humanPlayer + " Your Turn to Play!"
  } else {
    currentPlayer = computerPlayer
    h2.textContent = computerPlayer + " Your Turn to Play!"
  } 
  
  // check the winning conditions
  if (b1 == humanPlayer && b2 == humanPlayer && b3 == humanPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell1.style.background = "rgb(167, 223, 150)"
    cell2.style.background = "rgb(167, 223, 150)"
    cell3.style.background = "rgb(167, 223, 150)"
    h2.textContent = humanPlayer + " Won!"
  } else if (b1 == humanPlayer && b4 == humanPlayer && b7 == humanPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell1.style.background = "rgb(167, 223, 150)"
    cell4.style.background = "rgb(167, 223, 150)"
    cell7.style.background = "rgb(167, 223, 150)"
    h2.textContent = humanPlayer + " Won!"
  } else if (b1 == humanPlayer && b5 == humanPlayer && b9 == humanPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell1.style.background = "rgb(167, 223, 150)"
    cell5.style.background = "rgb(167, 223, 150)"
    cell9.style.background = "rgb(167, 223, 150)"
    h2.textContent = humanPlayer + " Won!"
  } else if (b2 == humanPlayer && b5 == humanPlayer && b8 == humanPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell2.style.background = "rgb(167, 223, 150)"
    cell5.style.background = "rgb(167, 223, 150)"
    cell8.style.background = "rgb(167, 223, 150)"
    h2.textContent = humanPlayer + " Won!"
  } else if (b3 == humanPlayer && b6 == humanPlayer && b9 == humanPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell3.style.background = "rgb(167, 223, 150)"
    cell6.style.background = "rgb(167, 223, 150)"
    cell9.style.background = "rgb(167, 223, 150)"
    h2.textContent = humanPlayer + " Won!"
  } else if (b3 == humanPlayer && b5 == humanPlayer && b7 == humanPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell3.style.background = "rgb(167, 223, 150)"
    cell5.style.background = "rgb(167, 223, 150)"
    cell7.style.background = "rgb(167, 223, 150)"
    h2.textContent = humanPlayer + " Won!"
  } else if (b4 == humanPlayer && b5 == humanPlayer && b6 == humanPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell4.style.background = "rgb(167, 223, 150)"
    cell5.style.background = "rgb(167, 223, 150)"
    cell6.style.background = "rgb(167, 223, 150)"
    h2.textContent = humanPlayer + " Won!"
  } else if (b7 == humanPlayer && b8 == humanPlayer && b9 == humanPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell7.style.background = "rgb(167, 223, 150)"
    cell8.style.background = "rgb(167, 223, 150)"
    cell9.style.background = "rgb(167, 223, 150)"
    h2.textContent = humanPlayer + " Won!"
  } else if (b1 == computerPlayer && b2 == computerPlayer && b3 == computerPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell1.style.background = "rgb(167, 223, 150)"
    cell2.style.background = "rgb(167, 223, 150)"
    cell3.style.background = "rgb(167, 223, 150)"
    h2.textContent = computerPlayer + " Won!"
  } else if (b1 == computerPlayer && b4 == computerPlayer && b7 == computerPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell1.style.background = "rgb(167, 223, 150)"
    cell4.style.background = "rgb(167, 223, 150)"
    cell7.style.background = "rgb(167, 223, 150)"
    h2.textContent = computerPlayer + " Won!"
  } else if (b1 == computerPlayer && b5 == computerPlayer && b9 == computerPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell1.style.background = "rgb(167, 223, 150)"
    cell5.style.background = "rgb(167, 223, 150)"
    cell9.style.background = "rgb(167, 223, 150)"
    h2.textContent = computerPlayer + " Won!"
  } else if (b2 == computerPlayer && b5 == computerPlayer && b8 == computerPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell2.style.background = "rgb(167, 223, 150)"
    cell5.style.background = "rgb(167, 223, 150)"
    cell8.style.background = "rgb(167, 223, 150)"
    h2.textContent = computerPlayer + " Won!"
  } else if (b3 == computerPlayer && b6 == computerPlayer && b9 == computerPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell3.style.background = "rgb(167, 223, 150)"
    cell6.style.background = "rgb(167, 223, 150)"
    cell9.style.background = "rgb(167, 223, 150)"
    h2.textContent = computerPlayer + " Won!"
  } else if (b3 == computerPlayer && b5 == computerPlayer && b7 == computerPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell3.style.background = "rgb(167, 223, 150)"
    cell5.style.background = "rgb(167, 223, 150)"
    cell7.style.background = "rgb(167, 223, 150)"
    h2.textContent = computerPlayer + " Won!"
  } else if (b4 == computerPlayer && b5 == computerPlayer && b6 == computerPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell4.style.background = "rgb(167, 223, 150)"
    cell5.style.background = "rgb(167, 223, 150)"
    cell6.style.background = "rgb(167, 223, 150)"
    h2.textContent = computerPlayer + " Won!"
  } else if (b7 == computerPlayer && b8 == computerPlayer && b9 == computerPlayer) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    cell7.style.background = "rgb(167, 223, 150)"
    cell8.style.background = "rgb(167, 223, 150)"
    cell9.style.background = "rgb(167, 223, 150)"
    h2.textContent = computerPlayer + " Won!"
  } else if ((b1 == humanPlayer || b1 == computerPlayer) && (b2 == humanPlayer 
  || b2 == computerPlayer) && (b3 == humanPlayer || b3 == computerPlayer) && 
  (b4 == humanPlayer|| b4 == computerPlayer) && (b5 == humanPlayer || 
  b5 == computerPlayer) && (b6 == humanPlayer || b6 == computerPlayer) && 
  (b7 == humanPlayer || b7 == computerPlayer) && (b8 == humanPlayer || 
  b8 == computerPlayer) && (b9 == humanPlayer || b9 == computerPlayer)) {
    gridCells.forEach(element => element.removeEventListener('click', updateText))
    h2.textContent = " That's a TIE!"
  } 
}

// create a button to reset the game and a function inside the addEventListener instead of refreshing the page
const resetBtn = document.querySelectorAll('.reset-btn')
const clickedResetBtn = resetBtn.forEach(element => element.addEventListener('click', reset))

function reset () {
  // reload the document - there's an existing fn for that
  location.reload()
  // get value of each cell and make blank again
  document.getElementById('1').value = ''
  document.getElementById('2').value = ''
  document.getElementById('3').value = ''
  document.getElementById('4').value = ''
  document.getElementById('5').value = ''
  document.getElementById('6').value = ''
  document.getElementById('7').value = ''
  document.getElementById('8').value = ''
  document.getElementById('9').value = ''
}

// computers turn to play; *10 because there's 9 chances to play and want to get to 9
function computersTurn () {
  var takenCell = false
  while (takenCell === false) {
    var computerRandomMove = (Math.random() * 10).toFixed()
    var computerMove = document.getElementById(computerRandomMove)
    computerMove.setAttribute(computerPlayer)
  }
}

// //check if the player has won or drew or still has room to play another round
// const eachGridCellElement = gridCells.forEach(element => checkMove))

// function checkMove () {
//   if (eachGridCell)
//     // do an if statement for each of the arrays in the winningOptions
//   }