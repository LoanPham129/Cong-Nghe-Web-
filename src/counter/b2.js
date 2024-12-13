import React, {useState} from "react";

const Counter = () =>{
    let [count, setCount] = useState(0)

    let increase = () =>{
        setCount(count +1)
    }

    return(
        <>
            <h1>Counter: {count}</h1>
            <button onClick={increase}>Tang</button>
        </>
    )
}
export default Counter