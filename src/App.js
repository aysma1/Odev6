import React, {useState} from 'react';
import './App.css';


export default function App(){
  return(
    <div class = 'App'>
      <Counter />
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1); 

  function addClick() {
    setCount(count + Number(number));
  }

  function subtraction(){
    setCount(count - Number(number));
  }
  
  function changeNumber(e){
    setNumber((e.target.value));
  }

  return(
    <div>
      <h1>Counter App</h1>
      <div className ='count'>
       <span>{count}</span>
      </div>
      <div>
        <button className='buttons' onClick={addClick}>+</button>
        <button className='buttons' onClick={subtraction}>-</button>
        <input
        type='number'
        value={number}
        onChange={changeNumber}
        />
      </div>
    </div>
  );
}
