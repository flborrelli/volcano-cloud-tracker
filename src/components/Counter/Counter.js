import React from 'react';
import './Counter.css';
import { useState, useEffect } from 'react';

function Counter({onIncrement, onDecrement, counterLabel, counterValue}) {
  
  return (
    <div className="counter-container">
      <span>{counterLabel}:<span>{counterValue}</span></span>
      <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
