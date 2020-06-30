import React, { useState } from 'react'
import snowman0 from './images/snowman/step_0.png'
import snowman1 from './images/snowman/step_1.png'
import snowman2 from './images/snowman/step_2.png'
import snowman3 from './images/snowman/step_3.png'
import snowman4 from './images/snowman/step_4.png'
import snowman5 from './images/snowman/step_5.png'
import snowman6 from './images/snowman/step_6.png'
import snowman7 from './images/snowman/step_7.png'

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

function App() {
  const [correctlyGuessedLetters, setCorrectlyGuessedLetters] = useState(0)

  const snowman = snowmen[correctlyGuessedLetters]

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
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </section>
  )
}

export default App
