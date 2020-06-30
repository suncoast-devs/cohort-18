import React, { useState } from 'react'
import snowman0 from './images/snowman/step_0.png'
import snowman1 from './images/snowman/step_1.png'
import snowman2 from './images/snowman/step_2.png'
import snowman3 from './images/snowman/step_3.png'
import snowman4 from './images/snowman/step_4.png'
import snowman5 from './images/snowman/step_5.png'
import snowman6 from './images/snowman/step_6.png'
import snowman7 from './images/snowman/step_7.png'

const allLetters = [...Array(26).keys()].map((index) =>
  String.fromCharCode(65 + index)
)

const snowmen = [
  snowman0,
  snowman1,
  snowman2,
  snowman3,
  snowman4,
  snowman5,
  snowman6,
  snowman7,
]

function AlphabetLetter(props) {
  const handleClickOnLetter = () => {
    // Make a new array of the letters guessed so far and pass that in.

    // you might be inclined to try this.
    //
    // But do not! We shouldn't modify a prop or *DIRECTLY* modify a state
    //props.lettersGuessedSoFar.push(props.letter)

    const newArrayOfLettersGuessedSoFar = [
      // These are all the elements from the array, spread out
      ...props.lettersGuessedSoFar,

      // then tack on this new letter to the end
      props.letter,
    ]

    props.setLettersGuessedSoFar(newArrayOfLettersGuessedSoFar)
  }

  if (props.used) {
    return <li className="used">{props.letter}</li>
  } else {
    return <li onClick={handleClickOnLetter}>{props.letter}</li>
  }
}

function App() {
  // const correctlyGuessedLetters = 0
  const [
    numberOfCorrectlyGuessedLetters,
    setNumberOfCorrectlyGuessedLetters,
  ] = useState(0)

  // An array of the letters we have guessed so far!
  const [lettersGuessedSoFar, setLettersGuessedSoFar] = useState([])

  // Use that variable to figure out which index of our snowman in the array
  const snowman = snowmen[numberOfCorrectlyGuessedLetters]

  return (
    <section>
      <h1>Snowman</h1>
      <img alt="snowman" src={snowman} />
      <ul>
        <li>_</li>
        <li>_</li>
        <li>_</li>
        <li>_</li>
        <li>_</li>
        <li>_</li>
        <li>_</li>
      </ul>
      <ul className="alphabet">
        {allLetters.map((letter) => (
          <AlphabetLetter
            key={letter}
            letter={letter}
            used={lettersGuessedSoFar.includes(letter)}
            lettersGuessedSoFar={lettersGuessedSoFar}
            setLettersGuessedSoFar={setLettersGuessedSoFar}
          />
        ))}
      </ul>
    </section>
  )
}

export default App
