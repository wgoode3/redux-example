import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends Component {

  add = (e) => {
    this.props.dispatch({ type: 'ADD' });
  }
  subtract = (e) => {
    this.props.dispatch({ type: 'SUBTRACT' });
  }
  
  render() {
    return (
      <div>
          <p>{this.props.count}</p>
          <button onClick={this.add}>+</button>
          <button onClick={this.subtract}>-</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);