import React, {useState} from 'react';
import './style.css';

import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {

    const [tasks, setTasks] = useState(props.tasks)
    
   

  const taskLists =tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  function addTask(name) {
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Form addTask= {addTask}/>

      <div className="filters btn-group stack-exception">
        {/* <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button> */}

        <FilterButton position = "All" aria_pressed ={true} />
        <FilterButton position="Active"  aria_pressed ={false}/>
        <FilterButton position="Completed" aria_pressed ={false}/>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/* <Todo name = "Eat" completed= {true} id= "todp-0"/>
        <Todo name = "Sleep" completed= {false} id= "todp-1"/>
        <Todo name = "Repeat" completed= {false}  id= "todp-2"/> */}
        {taskLists}
      </ul>
    </div>
  );
}

export default App;
