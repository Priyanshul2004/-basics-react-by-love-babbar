
import { createContext } from 'react'
import './App.css'
import ChildA from './component.jsx/ChildA';
import { useState } from 'react';



const UserContext = createContext();

function App() {

  const [user,setuser] = useState({name:"priyanshul"})
  
  return (
    <>
    <UserContext.Provider value = {user}>
    <ChildA></ChildA>
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}