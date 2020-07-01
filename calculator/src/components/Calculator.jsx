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

export function Calculator() {
  const [currentDisplay, setCurrentDisplay] = useState(0)

  return (
    <main>
      <div className="calculator">
        <div className="display">{currentDisplay}</div>
        <div className="buttons">
          <button className="button fn">AC</button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button className="button op">&#247;</button>
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button op">&#215;</button>
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button op">&#8722;</button>
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button op">&#43;</button>
          <button className="button x2">0</button>
          <button className="button">.</button>
          <button className="button op">&#61;</button>
        </div>
      </div>
    </main>
  )
}
