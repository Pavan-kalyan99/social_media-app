// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/store';

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button className='m-1 p-1 text-green-400 border' onClick={() => dispatch(increment())}>Increment</button>
      <button className='m-1 p-1 text-red-400 border' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
