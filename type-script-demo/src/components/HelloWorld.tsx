import React, { useState } from 'react'

function HelloWorld() {
  const [count, setCount] = useState(0)

  const handleClickButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Hello, World! {count}</h1>
      <button onClick={handleClickButton}>Click Me</button>
    </div>
  )
}

export default HelloWorld
