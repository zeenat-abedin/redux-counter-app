import React from 'react'
import './Counter.css';

export default function Counter() {
    return (
        <div className="counter_app">
            <h1>Counter App</h1>
            <div className="counter">
                <button className="increment">Increment</button> {0}
                <button className="decrement">Decrement</button>
            </div>
      </div>
  )
}
