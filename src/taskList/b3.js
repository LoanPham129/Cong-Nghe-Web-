import React from 'react'

let TaskList = () => {
    let task =[
        'an sang',
        'di hoc',
        'mua do an'
    ]

    return(
        <div>
            <h1>Danh sach cong viec: </h1>
            <ol>
                {task.map((task,index)=>(
                    <li key={index}>{task}</li>
                ))}
            </ol>
        </div>
    )
}

export default TaskList