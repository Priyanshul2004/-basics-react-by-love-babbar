
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [count,setcount] = useState(0);
  const [total,settotal] = useState(1);

  // veriation 1
  // useEffect(()=>{
  //   alert("hellow ji")
  // })

  // var 2
  // useEffect(()=>{
  //   alert("run only first render")
  // },[])

  //varation 3
  useEffect(()=>{
    alert("run when count change")
  },[count])

  const handleclick = ()=>{
    setcount(count+1);
  }

  const handleclicktotal = ()=>{
    settotal(total+1);
  }

  return (
    <>
      <h1>hello ji</h1>
      <h2>{count}</h2>
      <button onClick={handleclick} >Click me</button>
      <br></br>
      <h1>hello ji this is total</h1>
      <h2>{total}</h2>
      <button onClick={handleclicktotal} >Hit me for total</button>
    </>
  )
}

export default App
