
import './App.css'

function App() {
 
  const handleclick = ()=>{
    alert("I am Clicked")
  }

  const handlemouse = ()=>{
    alert("move hover")
  }

  return (
    <>

      <h1>Hellow ji</h1>
      {/* <h3 onMouseOver={handlemouse}>I am a paragraph</h3> */}
      <button onClick={handleclick}>Click me</button>
    </>
  )
}

export default App