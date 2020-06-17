let countOfMoves = 0
let currentPlayer = 'X'

function checkWin() {
  // If X has all three top rows, X wins
  const upperLeftSquareContent = document.querySelector('li:nth-child(1)')
    .textContent
  const upperMiddleSquareContent = document.querySelector('li:nth-child(2)')
    .textContent
  const upperRightSquareContent = document.querySelector('li:nth-child(3)')
    .textContent

  if (
    upperLeftSquareContent === 'X' &&
    upperMiddleSquareContent === 'X' &&
    upperRightSquareContent === 'X'
  ) {
    const header = document.querySelector('h1')
    header.textContent = 'The winner is X'
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
