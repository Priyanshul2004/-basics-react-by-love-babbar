import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>
      <h1>Child C</h1>
      {user.name}
    </div>
  )
}

export default ChildC