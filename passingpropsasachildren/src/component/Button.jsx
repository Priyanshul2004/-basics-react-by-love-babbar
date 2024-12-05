import React from 'react'

const Button = (props) => {
  return (
    <div>
       {props.children}
       <br></br>
      <button onClick={props.incremenrcount}>{props.text}</button>
    </div>
  )
}

export default Button
