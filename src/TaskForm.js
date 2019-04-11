import React, { Component } from 'react';
import { connect } from 'react-redux';


class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
    }

    addTask = (e) => {
        e.preventDefault();
        this.props.dispatch({type: "ADD_TASK", task: this.state.task});
        this.setState({task: ""});
    }

    changeTask = (e) => {
        this.setState({task: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.addTask}>
                <input 
                    type="text" 
                    name="task" 
                    onChange={this.changeTask} 
                    value={this.state.task} 
                />
                <input type="submit" value="Create Task" />
            </form>
        );
    }
}

export default connect()(TaskForm);