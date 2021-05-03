import React from 'react';
import styles from '../AddTask/AddTask.css';

class AddTask extends React.Component {
    state = {
        name: '',
        description: ''
    }

    handleChange = (event) => {
        const { value, name } = event.currentTarget
        this.setState({ [name]: value })
    }

    handleAddTask = () => {
        this.props.addTask(this.state.name, this.state.description)
    }

    render() {
        return (
            <div>
                <input name="name" placeholder='New task name' value={this.state.name} onChange={this.handleChange}/>
                <input name="description" placeholder='New task description' value={this.state.description} onChange={this.handleChange}/>
                <button className="nrtb" onClick={this.handleAddTask}>Add new task</button>
            </div>
        )
    }
}

export default AddTask;
