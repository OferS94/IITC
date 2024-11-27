import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter(){
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.count);
    return(
    <div style={{textAlign:"center"}}>
        <h1>counter: {count}</h1>
        <button onClick={()=> dispatch({type:"INCREASE"})}>+</button>
        <button onClick={()=> dispatch({type:"DECREASE"})}>-</button>
        <button onClick={()=> dispatch({type:"RESET"})}>Reset</button>
    </div>
    )
}

export default Counter;