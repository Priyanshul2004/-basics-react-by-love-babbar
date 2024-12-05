
import { useState } from 'react'
import './App.css'
import Card from './component/Card'
import Button from './component/Button'

function App() {
 
  const [count,setcount] = useState(0)

  const clickhandle = ()=>{
    return setcount(count+1);
  }

  return (
    <>
      {/* <Card name="priyanshul">
      <h1>i am priyanshul</h1>
      <p>i am doing btech</p>
      </Card>
      <Card>
        <h1>this is second car</h1>
      </Card> */}


       <Button incremenrcount = {clickhandle} text="Click me">
        <h>{count}</h>
       </Button>


    </>
  )
}

export default App
