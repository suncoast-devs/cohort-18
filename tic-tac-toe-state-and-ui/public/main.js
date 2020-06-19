const BLANK = ''
const SNOWMAN = '⛄️'
const FIRE = '🔥'

const state = {
  countOfMoves: 0,
  currentPlayer: SNOWMAN,
  board: {
    1: BLANK,
    2: BLANK,
    3: BLANK,
    4: BLANK,
    5: BLANK,
    6: BLANK,
    7: BLANK,
    8: BLANK,
    9: BLANK,
  },
  winner: BLANK,
}

function checkWin() {
  const winningCombinations = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],

    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],

    ['1', '5', '9'],
    ['7', '5', '3'],
  ]

  // If we go through each of the arrays inside of winningCombinations
  // is it true the first square is taken (not blank) and that square is equal to the second and third squares
  const winner = winningCombinations.find(
    (combination) =>
      state.board[combination[0]] !== BLANK &&
      state.board[combination[0]] === state.board[combination[1]] &&
      state.board[combination[0]] === state.board[combination[2]]
  )

  if (winner) {
    state.winner = state.board[winner[0]]
  }
}

// What to do when clicked
function handleClick(event) {
  // We receive an event, from which we can get the target
  // The target of an event was the element that *caused* the event
  // In our case, what was clicked
  const square = event.target.dataset.square

  // If someone has already taken this square
  if (state.board[square] !== BLANK) {
    console.log('NOPES!')
    // -- then return and don't do the rest of this logic
    return
  }

  // Change the target's content
  // Have the board learn that whoever the current player is
  // takes the position of whatever the current square is
  state.board[square] = state.currentPlayer

  // Increment our count of moves
  state.countOfMoves++

  // new value
  //
  //                    boolean condition
  //                    |
  //                    |                             value if true
  //                    |                               |
  //                    |                               |     value if false
  //                    |                               |      |
  //                    v                               v      v
  state.currentPlayer = state.currentPlayer === SNOWMAN ? FIRE : SNOWMAN

  checkWin()
  render()
}

function render() {
  // Turn a square number like '1' into   <li data-square="1"></li>
  function makeTheCorrectLiForAnyGivenSquareNumber(squareNumber) {
    return `<li data-square="${squareNumber}">${state.board[squareNumber]}</li>`
  }
  const possibleSquares = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const listOfLi = possibleSquares
    // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    // For a square turn it into an LI
    .map((square) => makeTheCorrectLiForAnyGivenSquareNumber(square))
    // Then we still have an array, but an array that looks like:
    // ['<li></li>', '<li></li>', ..., '<li></li>']
    // BUT we a string.
    // So join that array by concatenating them all but put a return in between
    // '<li></li>\n<li></li>'
    .join('\n')

  const headerMessage =
    state.winner === BLANK
      ? `Tic Tac Toe - ${state.countOfMoves} Moves`
      : `${state.winner} Wins!`

  const html = `
    <h1>${headerMessage}</h1>
    <ul>
    ${listOfLi}
    </ul>
  `

  document.querySelector('body').innerHTML = html

  document.querySelector('ul').addEventListener('click', handleClick)
}

const main = () => {
  render()
}

document.addEventListener('DOMContentLoaded', main)
