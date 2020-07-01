import React, { useState } from 'react'

// What state does this component keep track of?
// How do I show that on the page?
// What events happen to cause state to change and the UI to redraw?
//
//
//  STATE =>  UI
//  UI => EVENTS
//  EVENTS => UPDATE STATE
//  UPDATED STATE => REDRAWS UI (start at the top)

//   4           +        5
//
//  operand   operator   operand
export function Calculator() {
  const [currentDisplay, setCurrentDisplay] = useState(0)
  const [leftOperand, setLeftOperand] = useState()

  // Handle the user clicking on a digit
  const handleClickDigit = (event) => {
    const text = event.target.innerText

    setCurrentDisplay(text)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{currentDisplay}</div>
        <div className="buttons">
          <button className="button fn">AC</button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button className="button op">&#247;</button>
          <button onClick={handleClickDigit} className="button">
            7
          </button>
          <button onClick={handleClickDigit} className="button">
            8
          </button>
          <button onClick={handleClickDigit} className="button">
            9
          </button>
          <button className="button op">&#215;</button>
          <button onClick={handleClickDigit} className="button">
            4
          </button>
          <button onClick={handleClickDigit} className="button">
            5
          </button>
          <button onClick={handleClickDigit} className="button">
            6
          </button>
          <button className="button op">&#8722;</button>
          <button onClick={handleClickDigit} className="button">
            1
          </button>
          <button onClick={handleClickDigit} className="button">
            2
          </button>
          <button onClick={handleClickDigit} className="button">
            3
          </button>
          <button className="button op">&#43;</button>
          <button onClick={handleClickDigit} className="button x2">
            0
          </button>
          <button className="button">.</button>
          <button className="button op">&#61;</button>
        </div>
      </div>
    </main>
  )
}
