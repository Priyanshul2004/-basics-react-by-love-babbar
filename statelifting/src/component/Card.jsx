import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>Hello ji</h1>
      <input type='text' onChange = {(e)=> props.setname(e.target.value)}></input>
      <p>setname state ki value : {props.name}</p>
    </div>
  )
}
export default Card
