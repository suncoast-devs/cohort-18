const state = {
  countOfMoves: 0,
  currentPlayer: '⛄️',
  board: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  },
  winner: '',
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
  // is it true that ANY of them have all "X"s?
  const didWeFindWinner = winningCombinations.some(
    (combination) =>
      state.board[combination[0]] === '⛄️' &&
      state.board[combination[1]] === '⛄️' &&
      state.board[combination[2]] === '⛄️'
  )

  if (didWeFindWinner) {
    state.winner = '⛄️'
  }

  // If we go through each of the arrays inside of winningCombinations
  // is it true that ANY of them have all "X"s?
  const didWeFindWinnerForO = winningCombinations.some(
    (combination) =>
      state.board[combination[0]] === '🔥' &&
      state.board[combination[1]] === '🔥' &&
      state.board[combination[2]] === '🔥'
  )

  if (didWeFindWinnerForO) {
    state.winner = '🔥'
  }
}

// What to do when clicked
function handleClick(event) {
  // We receive an event, from which we can get the target
  // The target of an event was the element that *caused* the event
  // In our case, what was clicked
  const square = event.target.dataset.square

  // If someone has already taken this square
  if (state.board[square] !== '') {
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
  state.currentPlayer = state.currentPlayer === '⛄️' ? '🔥' : '⛄️'

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
    state.winner === ''
      ? `Tic Tac Toe - ${state.countOfMoves} Moves`
      : `${state.winner} Wins!`

  const html = `
    <h1>${headerMessage}</h1>
    <ul>
    ${listOfLi}
    </ul>
  `

  document.querySelector('body').innerHTML = html

  const unorderedList = document.querySelector('ul')
  unorderedList.addEventListener('click', handleClick)
}

const main = () => {
  render()
}

document.addEventListener('DOMContentLoaded', main)
