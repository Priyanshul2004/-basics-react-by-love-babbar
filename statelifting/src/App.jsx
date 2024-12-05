
import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  const [name,setname] = useState('')
  return (
    <>
      <Card name={name} setname={setname}>
      </Card>
      <p>i am iside parent component : {name}</p>
    </>
  )
}

export default App
