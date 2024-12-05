import React from 'react'
import './Counter.css'
import { useState } from 'react'
function Counter() {
    const [count,setcount] = useState(0)
    const increase = ()=>{
        return setcount(count+1)
    }
  return (
    <div className='Counter-container'>
      <p id='para'>You have clicked {count} times</p>
       <button onClick={increase} id='btn'>Click me</button>
    </div>
  )
}
export default Counter
