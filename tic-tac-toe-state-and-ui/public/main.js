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
    const h1 = document.querySelector('h1')
    h1.textContent = '⛄️ Wins!'
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
    const h1 = document.querySelector('h1')
    h1.textContent = '🔥 Wins!'
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

  event.target.textContent = state.currentPlayer
  event.target.classList.add('taken')

  // Increment our count of moves
  state.countOfMoves++

  // Go get the header
  const header = document.querySelector('h1')

  // Update it's text
  header.textContent = `Tic Tac Toe - Move # ${state.countOfMoves}`

  //
  //
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
}

const main = () => {
  const unorderedList = document.querySelector('ul')

  unorderedList.addEventListener('click', handleClick)
}

document.addEventListener('DOMContentLoaded', main)
