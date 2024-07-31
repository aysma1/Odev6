import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const addClick = () => {
    setCount(count + Number(number));
  };

  const subtraction = () => {
    setCount(count - Number(number));
  };

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className='content'>
      <h1>Counter</h1>
      <div className='count'>
        <span>{count}</span>
      </div>
      <div>
        <button className='buttons' onClick={addClick}>+</button>
        <button className='buttons' onClick={subtraction}>-</button>
        <input
          type='number'
          value={number}
          onChange={changeNumber}
          className='buttons'
        />
      </div>
    </div>
  );
};

export default Counter;
