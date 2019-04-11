import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import reducer from './Store';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <TaskList />
        <TaskForm />
      </Provider>
    );
  }
}

export default App;
