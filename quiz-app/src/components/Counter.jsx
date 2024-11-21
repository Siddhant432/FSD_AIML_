import React,{useState} from "react";
const Counter=()=>{
    const[count,setCount]=useState(0);
    function handleDecrease(){
        setCount(count-1)
    }
    function handleIncrease(){
        setCount(count+1)

    }
    return (
        <div>
            <h1>COunter:{count}</h1>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}
export default Counter;

