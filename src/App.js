import React, { Component } from 'react';
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
    tasks: []
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}


export default App;



const Header = (props) => {
  return (
    <div className='card-header'>
      <h1 className='card-header-title header'>
        You have {props.numTodos} Todos
      </h1>
    </div>
  );
};;

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />;
  });
  return (
    <div className='list-wrapper'>
      {todos}
    </div>
  );
};

const Todo = (props) => {
  return (
    <div className='list-item'>
      {props.content}
      <button class="delete is-pulled-right" onClick={() => { props.onDelete(props.id); }}></button>
    </div>
  );
};;


class SubmitForm extends Component {
  state = { term: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.term === '') return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          className='input'
          placeholder='Enter Item'
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})}
        />
        <button className='button'>add todo</button>
      </form>
    );
  }
}

