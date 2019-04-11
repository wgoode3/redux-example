import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

class TaskList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.tasks.map( (task, index) => 
                        <li key={index}>{task}</li>
                    )
                }
            </ul>
        );
    }
}

export default connect(mapStateToProps)(TaskList);