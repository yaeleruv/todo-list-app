import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList/TodoList";
import SubmitForm from "./components/SubmitForm";
import "./App.css";

// 1. add task V
// 2. delete task V
// 3. toggle task V
// 4. edit task
// Header — This will simply display some message above all of the tasks. 'You Have {number of tasks} Todos'

// TodoList — This is a container for the list of todos.
// if a task is Done the user can mark it as 'Done' by using line-through on the task.

// SubmitForm — This is the form that is used to add new todos to the list.
// the user can add or remove task.

class App extends Component {
  state = {
    tasks: [
      {
        task: "task 1",
        isDone: false,
      },
    ],
  };

  handleToggle = (index) => {
    this.setState((state) => {
      const tasks = state.tasks;

      tasks[index] = { 
        ...tasks[index], 
        isDone: !tasks[index].isDone 
      };
      
      return {
        tasks: [...tasks],
      };
    });

    // console.log(index);
    // const task = this.state.tasks[index];
    // console.log(task);
    // this.setState(state => {
    //   return {
    //     //the ... (using the spread operator to set the original state before adding the "new state" to the array)
    //     tasks: [...state.tasks, {
    //       task: task.task,
    //       isDone: !task.isDone
    //     }]
    //   };
    // });
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  handleSubmit = (task, props) => {
    this.setState({
      tasks: [...this.state.tasks, { task, isDone: false }],
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
          <TodoList
            tasks={this.state.tasks}
            onDelete={this.handleDelete}
            onToggle={this.handleToggle}
          />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
