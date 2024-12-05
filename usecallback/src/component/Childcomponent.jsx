import React from 'react'

const Childcomponent = React.memo(
    (props) => {
        console.log("I am re-rendered");
      return (
        <div>
          <button
          onClick={props.handleclick}
          >{props.name}</button>
        </div>
      )
    }
    
)
export default Childcomponent