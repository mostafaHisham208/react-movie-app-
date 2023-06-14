import React, { useContext } from 'react';
import { counterContext } from './../../contexts/counter';

const Counter = () => {
 var {counter,setCounter}=   useContext(counterContext)
    return (
        <div>
            <button onClick={()=>{setCounter(++counter)}} className="btn btn-success">+</button>
            <h1>Counter is : {counter}</h1>
            <button onClick={()=>{setCounter(--counter)}} className="btn btn-danger">-</button>
        </div>
    );
}

export default Counter;
