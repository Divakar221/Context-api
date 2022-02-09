import React from 'react';
import { context } from './context';
import Counter3 from './Counter3';
function Counter2() {
    const getVal=React.useContext(context)

  return <div>

<h3>Counter 2 component from counter 1</h3>
      <p>initial Value : {getVal.initial}</p>
      <button onClick={getVal.handleincrement}>Increment counter 2</button>&nbsp;&nbsp;&nbsp;
      <button onClick={getVal.handledecrement}>Decrement counter 2</button>&nbsp;&nbsp;&nbsp;
      <button onClick={getVal.handlereset}>Reset counter 2</button>
      {/* <Counter3></Counter3> */}
  </div>;
}

export default Counter2;
