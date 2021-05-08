import React from 'react';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';
import styles from './TaskList.css'

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
        description: 'Prepare some documents for the first working day',
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
  
    handleClick = (id, completed) => {
      this.setState(currentState => {
        let index = currentState.tasks.findIndex(task => task.id === id)
        currentState.tasks[index] = { ...currentState.tasks[index], completed: !completed }
        return {
          tasks: currentState.tasks
        }
      })
    }
  
    addTask = (name, description) => {
      this.setState(currentState => {
        const Task = {
          id: currentState.tasks.length + 1,
          name: name,
          description: description,
          completed: false
        }
        const newToDoList = [ ...currentState.tasks, Task ]
        return {
          tasks: newToDoList
        }
      })
    }
  
    render () {
      return ( 
      <div> 
        <div id="head">My Task Tracker</div>
        <div>
        {this.state.tasks.map(task => <Task  id={task.id} name={task.name} description={task.description} completed={task.completed} onClick={ () => this.handleClick(task.id, task.completed)}/>)}
        </div>
        <AddTask addTask = { this.addTask }/>
      </div>)
    }
  }

  export default MyToDoList;
