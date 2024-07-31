import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

const App = () => {
  const [number, setNumber] = useState(1);

  const handleInputChange = (value) => {
    setNumber(value);
  };

  return (
    <div className='App'>
      <Counter 
        number={number}
        onChangeNumber={handleInputChange}
      />
    </div>
  );
};

export default App;
