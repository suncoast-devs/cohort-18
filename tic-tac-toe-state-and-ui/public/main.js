let countOfMoves = 0
let currentPlayer = 'X'

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
      document.querySelector(`li:nth-child(${combination[0]})`).textContent ===
        'X' &&
      document.querySelector(`li:nth-child(${combination[1]})`).textContent ===
        'X' &&
      document.querySelector(`li:nth-child(${combination[2]})`).textContent ===
        'X'
  )

  if (didWeFindWinner) {
    const h1 = document.querySelector('h1')
    h1.textContent = 'X Wins!'
  }

  // If we go through each of the arrays inside of winningCombinations
  // is it true that ANY of them have all "X"s?
  const didWeFindWinnerForO = winningCombinations.some(
    (combination) =>
      document.querySelector(`li:nth-child(${combination[0]})`).textContent ===
        'O' &&
      document.querySelector(`li:nth-child(${combination[1]})`).textContent ===
        'O' &&
      document.querySelector(`li:nth-child(${combination[2]})`).textContent ===
        'O'
  )

  if (didWeFindWinnerForO) {
    const h1 = document.querySelector('h1')
    h1.textContent = 'O Wins!'
  }
}

// What to do when clicked
function handleClick(event) {
  // We receive an event, from which we can get the target
  // The target of an event was the element that *caused* the event
  // In our case, what was clicked
  const target = event.target

  // // If someone has already taken this square
  // if (target.textContent !== '') {
  //   // -- then return and don't do the rest of this logic
  //   return
  // }

  // If someone has already taken this square
  if (target.classList.contains('taken')) {
    console.log('NOPES!')
    // -- then return and don't do the rest of this logic
    return
  }

  // Change the target's content
  target.textContent = currentPlayer
  target.classList.add('taken')

  // Increment our count of moves
  countOfMoves++

  // Go get the header
  const header = document.querySelector('h1')

  // Update it's text
  header.textContent = `Tic Tac Toe - Move # ${countOfMoves}`

  // // Update player
  // // If the player currently X, the next player O
  // if (currentPlayer === 'X') {
  //   currentPlayer = 'O'
  // } else {
  //   // If the player currently O, the next player X
  //   currentPlayer = 'X'
  // }
  // Toggle the player between X and O - same as above
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'

  checkWin()
}

// // For this item, add an eventListener when clicked
// function setupItemListener(item) {
//   item.addEventListener('click', handleClick)
// }

const main = () => {
  // const allTheListItems = document.querySelectorAll('li')
  // Go through all the found elements, and call setupItemListener for each
  // allTheListItems.forEach(setupItemListener)

  const unorderedList = document.querySelector('ul')

  unorderedList.addEventListener('click', handleClick)
}

document.addEventListener('DOMContentLoaded', main)
