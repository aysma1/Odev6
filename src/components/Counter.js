import React from 'react';

const Counter = ({ number, onChangeNumber }) => {
  const [count, setCount] = React.useState(0);

  const addClick = () => {
    setCount(count + number);
  };

  const subtraction = () => {
    setCount(count - number);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    onChangeNumber(value);
  }

  return (
    <div className='content'>
      <h1>Counter App</h1>
      <div className='count'>
        <span>{count}</span>
      </div>
      <div>
        <button className='buttons' onClick={addClick}>+</button>
        <button className='buttons' onClick={subtraction}>-</button>
        <input
          type='number'
          value={number}
          onChange={handleInputChange}
          className='buttons'
        />
      </div>
    </div>
  );
};

export default Counter;
