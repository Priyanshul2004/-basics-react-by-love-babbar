import React from 'react'
import './UserCard'
function UserCard(props) {
  return (
    <div className='user-container' >
    <p id='user-name'>{props.username}</p>
    <p id='user-desc'>{props.decription}</p> 
  </div>
  )
}

export default UserCard
