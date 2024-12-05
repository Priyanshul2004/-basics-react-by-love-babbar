
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, } from './features/counter/counterSlice';

function App() {

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  function handleincrement() {
    dispatch(increment());
  }

  

  function handledecrement(){
    dispatch(decrement());
  }
  return (
    <>
      <button onClick={handleincrement}>Add</button>
      <h1>{count}</h1>
      <button onClick={handledecrement}>Dec</button>
      </>
  )
}

export default App