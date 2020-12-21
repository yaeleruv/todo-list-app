import React, { Component } from "react";

class Todo extends Component {
  // console.log(props.content.task, 'is done?', props.content.isDone);
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleInput = (event) =>
    this.setState({
	  input: event.target.value,
    });

  render() {
    console.log(this);
    console.log(this.props);

    const style = this.props.content.isDone ? "line-through" : "initial";
    return (
      <div className="list-item" style={{ textDecoration: style }}>
        {this.props.content.task}
        <button
          className="delete is-pulled-right"
          onClick={() => {
            this.onDelete(this.props.id);
          }}
        ></button>
        <button
          className="is-pulled-right"
          onClick={() => {
            this.onToggle(this.props.id);
          }}
        >
          Done
        </button>
        <input type="text" onChange={this.handleInput} />
      </div>
    );
  }
}

export default Todo;
