import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {  handleIncrement, handleDecrement } from './redux/counterAction';

import './Counter.css';

export default function Counter() {
    const dispatch = useDispatch(); 
    const counter = useSelector(state => state.counter);
 return (
    <div className="counter_app">
        <h1>Counter Application</h1>
        <div className="counter">
        <button className="increment" onClick={()=>dispatch(handleIncrement())}>Increment</button>
        <span>{counter}</span>
        <button className="decrement" onClick={()=>dispatch(handleDecrement())}>Decrement</button>
        </div>
    </div>
  )
}
