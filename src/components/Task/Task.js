import React from 'react';
import styles from '../Task/Task.css';

const Task = ({ id, name, description, completed, onClick }) => {
    return (
      <div className="To-Do-Item">
        <div>Task name: { name }</div>
        <div>Task description: { description }</div>
        <div>Task status: { String(completed) }</div>
        <button onClick = { onClick }>Change status</button>
      </div>
    )
  }

  export default Task;
