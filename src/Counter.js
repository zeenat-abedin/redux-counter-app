import React from 'react'
import './Counter.css';

function handleIncrement() {
    
}

function handleDecrement() {
    
}

export default function Counter() {
    return (
        <div className="counter_app">
            <h1>Counter Application</h1>
            <div className="counter">
                <button className="increment" onClick={handleIncrement}>Increment</button>
                <span>0</span>
                <button className="decrement" onClick={handleDecrement}>Decrement</button>
            </div>
      </div>
  )
}
