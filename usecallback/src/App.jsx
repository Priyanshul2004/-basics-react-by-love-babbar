
import { useCallback, useState } from 'react'
import './App.css'
import Childcomponent from './component/Childcomponent';

function App() {
  const [count,setcount] = useState(0)

  const handleclick = useCallback(()=>{
    setcount(count+1);
  },[])

  return (
    <>
      <h1>{count}</h1>
      <br></br>
      <button onClick={handleclick}>Increase</button>
      <br></br>
      <br></br>
      <Childcomponent handleclick={handleclick} name="Click me"></Childcomponent>
    </>
  )
}

export default App
