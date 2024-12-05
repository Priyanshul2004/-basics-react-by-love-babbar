import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [count, setcount] = useState(0);
  let value = useRef(0);
  let val = 0;
  function handleclick() {
    setcount(count + 1);
  }
  let btnref = useRef();
  useEffect(()=>{
    value.current = value.current+1;
    val = val+1;
    console.log(val);
    console.log(value);
    console.log("rendered");
  })
  function hanglecolor(){
    btnref.current.style.background = "red";
  }
  return (
    <>
      <h1>{count}</h1>
      <br></br>
      <button ref={btnref} onClick={handleclick}>Increase</button>
      <br></br>
      <br></br>
      <button onClick={hanglecolor}>CHange colour of 1 btn</button>
    </>
  );
}
export default App;