import React from "react";
import Welcome from './welcome/b1'
import Counter from "./counter/b2";
import TaskList from "./taskList/b3";
import Form from "./form/b4";
import ToggleText from "./button/b5";

const App = () =>{
  let name = 'Loan Pham'
  return(
    <div>
      <Welcome name={name}/>
      <Counter/>
      <TaskList/>
      <Form/>
      <ToggleText/>
    </div>
  )
}

export default App