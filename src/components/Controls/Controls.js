import React from 'react';
import './Controls.css';
import Counter from '../Counter/Counter';

function Controls() {
  return (
    <div className="controls-container">
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default Controls;
