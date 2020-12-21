import React, { Component } from "react";

class SubmitForm extends Component {
  state = {
    input: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.input === "") return;
    this.props.onFormSubmit(this.state.input);
    this.setState({ input: "" });
  };
  handleInput = (event) => this.setState({ input: event.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Item"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <button className="button">add todo</button>
      </form>
    );
  }
}

export default SubmitForm;
