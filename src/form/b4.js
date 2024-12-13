import React, {useState} from "react";

let Form = () => {
    let [inputValue, setInputValue] = useState('')

    let handleChange = (event) =>{
        setInputValue(event.target.value)
    }

    return(
        <div>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="nhap lieu o day"/>
            <p>Gia tri da nhap: {inputValue}</p>
        </div>
    )
}

export default Form