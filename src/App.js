import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { context } from './context';
import Counter from './Counter';
import Counter2 from './Counter2';

function App() {

  const[count,setcount]=useState(0)
  const handleincrement=()=>{
    setcount(count+1)
  }
  const handledecrement=()=>{
    setcount(count-1)
  }
  const handlereset=()=>{
    setcount(0)
  }
  return (
    <div className="App">

      <h1>App Component</h1>
      <p>Initial value {count}</p>
      <button onClick={handleincrement}>Increment</button> &nbsp;&nbsp;&nbsp;
      <button onClick={handledecrement}> Decrement</button>&nbsp;&nbsp;
      <button onClick={handlereset}> Reset</button>
    <context.Provider
  value={{
    initial:count,
    handleincrement: handleincrement,
    handledecrement: handledecrement,
    handlereset:handlereset

  }}

>
  <Counter></Counter>
 
</context.Provider>

      
    </div>
  );
}

export default App;
