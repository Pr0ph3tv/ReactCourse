import logo from './logo.svg';
import './App.css';
import React from 'react';

class MyToDoList extends React.Component {
  state = {
    tasks: [{
      id: 1,
      name: 'Do React course task',
      description: 'Do a functional component',
      completed: true
    }, {
      id: 2,
      name: 'Conversation',
      description: 'Have a conversation with Yakov and Oleg',
      completed: false
    }, {
      id: 3,
      name: 'Task 3',
      description: 'A lot of things to do in task 3',
      completed: false
    }, {
      id: 4,
      name: 'Preparation for work',
      desription: 'Prepare some documents for the first working day',
      completed: false
    }, {
      id: 5,
      name: 'Task 5',
      description: 'Some things to do in task 5',
      completed: true
    }, {
      id: 6,
      name: 'IT-infrastructure',
      description: 'Do the second lab for the IT-inf course',
      completed: false
    }, {
      id: 7,
      name: 'Task 7',
      description: 'Some little things to be done',
      completed: true
    }] 
  }

  render () {
    return ( 
    <div> 
      <div id="head">My Task Tracker</div>
      <Mapping state = { this.state }/>
    </div>)
  }
}

const Task = ({ id, name, description, completed }) => {

  const handleClick = () => {
    console.log(`Task ${ id } completed status = ${ completed }`)
  }

  return (
    <div className="To-Do-Item">
      <div>Task name: { name }</div>
      <div>Task description: { description }</div>
      <div>Task status: { completed ? 'True' : 'False' }</div>
      <button onClick={handleClick}>Check status</button>
    </div>
  )
}

const Mapping = ({ state }) => {
  return (
    <div>
      {state.tasks.map(task => <Task  id={task.id} name={task.name} description={task.description} completed={task.completed} />)}
    </div>
  )
}

const App = () => {
  return <MyToDoList/>
}

export default App;
