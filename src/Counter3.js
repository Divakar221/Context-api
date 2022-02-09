import React from 'react';
import { context } from './context';
// import { useState } from 'react';

function Counter3() {
    //  Counter3.contextType = context;
    const newitem = React.useContext(context)

  return <div>


<h3>Counter 3 component</h3>
      <p>initial Value : {newitem.initial}</p>
      <button onClick={newitem.handleincrement}>Increment counter3</button>&nbsp;&nbsp;&nbsp;
      <button onClick={newitem.handledecrement}>Decrement counter 3</button>&nbsp;&nbsp;&nbsp;
      <button onClick={newitem.handlereset}>Reset counter3</button>
  </div>;
}

export default Counter3;
