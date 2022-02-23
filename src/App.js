import React, { useState } from 'react';
import './style.css';

import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { nanoid } from 'nanoid';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleCompleted(id) {
    function toggleCompleted(id) {
      const updatedTasks = tasks.map((task) => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
          // use object spread to make a new object
          // whose `completed` prop has been inverted
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      setTasks(updatedTasks);

    }

    console.log(tasks[0]);
  }
  const taskLists = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleCompleted={toggleCompleted}
    />
  ));
  function addTask(name) {
    const newTask = { id: 'todo' + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskLists.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskLists.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton position="All" aria_pressed={true} />
        <FilterButton position="Active" aria_pressed={false} />
        <FilterButton position="Completed" aria_pressed={false} />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskLists}
      </ul>
    </div>
  );
}

export default App;
