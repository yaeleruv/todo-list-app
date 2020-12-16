import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList/TodoList';
import SubmitForm from './components/SubmitForm';
import './App.css';

// 1. add task V
// 2. delete task V
// 3. toggle task
// 4. edit task
// Header — This will simply display some message above all of the tasks. 
// I am going to make mine show how many total tasks are in the list.

// TodoList — This is a container for the list of todos. 
// We will probably make a single ‘todo’ component for each individual row. 

// SubmitForm — This is the form that is used to add new todos to the list.

class App extends Component {

  state = {
    tasks: [
      {
        task: 'eat something',
        isDone: false,
      }
    ]
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  handleSubmit = (task) => {
    this.setState({
      tasks: [...this.state.tasks, { task, isDone: false }],
    });
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length} />
          <TodoList
            tasks={this.state.tasks}
            onDelete={this.handleDelete}
          />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
};

export default App;



