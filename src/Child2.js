import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 10);

    console.log(state)
    return (
        <dIv>
            <h2>This is second child using CounterReducer</h2>

            <h3>Value of reducer state is: {state}</h3>
            <button onClick={()=>dispatch('INCREMENT REDUCER')} >Increment Reducer</button>
        </dIv>
    )
}
export default Child2