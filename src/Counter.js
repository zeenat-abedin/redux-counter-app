import React from 'react'
import { useDispatch } from 'react-redux'

import { handleDecrement, handleIncrement } from './redux/action';

import './Counter.css';

export default function Counter() {
    const dispatch = useDispatch();
    
    return (
    <div className="counter_app">
        <h1>Counter Application</h1>
        <div className="counter">
                <button className="increment" onClick={()=>dispatch(handleIncrement())}>Increment</button>
                <span>0</span>
                <button className="decrement" onClick={()=>dispatch(handleDecrement())}>Decrement</button>
        </div>
    </div>
  )
}
