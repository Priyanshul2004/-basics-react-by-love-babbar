import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();
    function handleclick() {
        navigate('/about')
    }
  return (
    <div>
      homepage
      <button onClick={handleclick}>Move to about page </button>
    </div>
  )
}

export default Homepage
