import React, {useState} from "react";

let ToggleText = () => {
    let [Hien, setHien] = useState(false)

    let togggleVisibility = () => {
        setHien(!Hien)
    }

    return(
        <div>
            <button onClick={togggleVisibility}>
                {Hien ? 'An' : 'Hien thi'}
            </button>
            {Hien && <p>Troi lanh nhu nay ma phai cut kit di hoc</p>}
        </div>
    )
}

export default ToggleText