import React from 'react'
//importing redux hooks
import { useSelector, useDispatch } from 'react-redux'
//importing the reducer slices
import { increment, decrement } from './counterSlice'
import './Counter.css';

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
  
    return (
        <section>
            <p>{count}</p>
            <div>
                {/* add dispatch to the onClick event, passing in the action function */}

                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
    </section>
  )
}

export default Counter
