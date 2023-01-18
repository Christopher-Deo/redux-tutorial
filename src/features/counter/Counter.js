import React from 'react'
//importing redux hooks
import { useSelector, useDispatch } from 'react-redux'
//importing the reducer slices
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from "react";
import './Counter.css';

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
  //setting the state for the increment amount
    const [incrementAmount, setIncrementAmount] = useState('0');

    //setting up validation for text input (number). Sets state to 0 if nothing present/NaN or 0 is entered

    const addValue = Number(incrementAmount) || 0;

// creating a reset function to reset states to zero
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
}

    

    return (
        <section>
            <p>{count}</p>
            <div>
                {/* add dispatch to the onClick event, passing in the action function */}

                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) =>
                    setIncrementAmount(e.target.value)} />
            <div>
                <button className="addAmountBtn" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button className='resetBtn' onClick={() => resetAll()}>Reset</button>
            </div>
    </section>
  )
}

export default Counter
