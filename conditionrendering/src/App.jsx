
import { useState } from 'react'
import './App.css'
import Login from './component/Login'
import Logout from './component/Logout'

function App() {
  const [isloggedIn,setloggedIn] = useState(true)

  return (
    <div>
      {isloggedIn ? <Login></Login> : <Logout></Logout>}
    </div>
  )

  // if(isloggedIn){
  //   return (
  //     <Login></Login>
  //   )
  // }else{
  //   return(
  //     <Logout></Logout>
  //   )
  // }
}

export default App
