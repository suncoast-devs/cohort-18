import React, { useState } from 'react'

function Counter() {
  // The first thing is the *value* of the state
  // The second thing is the function to change that state
  const [counter, setCounter] = useState(42)

  const [name, setName] = useState('Susan')

  console.log(counter)
  console.log(name)

  function updateThatSweetSweetCounter() {
    setCounter(counter + 1)
  }

  // Would do this form if it is more than one line of code!
  function handleChangeName(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <p>Hello, {name}</p>
      <p>
        <input type="text" value={name} onChange={handleChangeName} />
      </p>
      <p>
        {/* Would use this inline style if it is just one line of code */}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </p>
      <p>The counter is {counter}</p>
      {/* This is the most common form */}
      <p>
        <button onClick={() => setCounter(counter + 1)}>
          Count with an inline arrow function
        </button>
      </p>

      {/* this is the next most common */}
      <p>
        <button onClick={updateThatSweetSweetCounter}>
          Count with a named function
        </button>
      </p>

      {/* least common, but maybe a tie with above */}
      <p>
        <button
          onClick={function () {
            setCounter(counter + 1)
          }}
        >
          Count with an inline function with function keyword
        </button>
      </p>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
