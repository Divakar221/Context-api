import React from 'react';
import { context } from './context';
import Counter2 from './Counter2';
import Counter3 from './Counter3';

function Counter() {
var getVal=React.useContext(context)

  return <div>

      <h3>Counter 1 component</h3>
      <p>initial Value : {getVal.initial}</p>
      <button onClick={getVal.handleincrement}>Increment counter1</button>&nbsp;&nbsp;&nbsp;
      <button onClick={getVal.handledecrement}>Decrement counter 1</button>&nbsp;&nbsp;&nbsp;
      <button onClick={getVal.handlereset}>Reset counter1</button>
      <Counter2></Counter2>
      <Counter3></Counter3>
  </div>;
}

export default Counter;
