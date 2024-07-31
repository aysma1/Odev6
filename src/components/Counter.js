import React, { useState, useEffect } from 'react';

const Counter = ({ initialNumber }) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(initialNumber);

  useEffect(() => {
    setNumber(initialNumber);
  }, [initialNumber]);

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
      <h1>Counter App</h1>
      <div className='count'>
        <span>{count}</span>
      </div>
      <div>
        <button className='buttons' onClick={addClick}>+</button>
        <button className='buttons' onClick={subtraction}>-</button>
      </div>
    </div>
  );
};

export default Counter;
