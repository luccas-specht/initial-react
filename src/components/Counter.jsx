import { useState } from 'react'

// all time when the state was modified, the component was re-rendered.

/* 
  this is immutability:

  user = ['merlin', 'knight', 'lancelot']

  newUsers = [...user, 'arthur']
*/


export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return(
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}