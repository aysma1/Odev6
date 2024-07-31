import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

const App = () => {
  const [initialNumber, setInitialNumber] = useState(1);

  const handleInputChange = (e) => {
    setInitialNumber(Number(e.target.value));
  };

  return (
    
    <div className='App'>
      <Counter initialNumber={initialNumber} />
      <input
        type='number'
        value={initialNumber}
        onChange={handleInputChange}
        className='buttons'
      />
      
    </div>
  );
};

export default App;
