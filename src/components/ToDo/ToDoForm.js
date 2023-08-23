import React from 'react'
import { useState } from 'react';
import './ToDo.css';
import ToDoList from './ToDoList';

function ToDoForm(prop) {

  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let points = Math.ceil(Math.random()*10)*5;
    prop.setArray(prop.array.concat([[task, true, points]]));
    localStorage.setItem(prop.userKeyStored+'-list', JSON.stringify(prop.array));
    setTask('');
    document.getElementById('todoinput').value = '';
  }

  return (
    <div>
    <div id='todoform'>
        <form onSubmit={handleSubmit}>
        <label id='todolabel'>New Quest<br></br><textarea id='todoinput' name='task' required onChange={handleChange}/></label>
              <div id='todobutton'><button>Submit</button></div>
        </form>
    </div>
    <ToDoList array={prop.array} setArray={prop.setArray}
    userKeyStored={prop.userKeyStored} task={task} setTask={setTask}/>
    </div>
  )
}

export default ToDoForm