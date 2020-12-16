import React, { Component } from 'react';

class SubmitForm extends Component {
	state = {
		term: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.state.term === '') return;
		this.props.onFormSubmit(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="input"
					placeholder="Enter Item"
					value={this.state.term}
					onChange={(event) =>
						this.setState({ term: event.target.value })
					}
				/>
				<button className="button">add todo</button>
			</form>
		);
	}
}

export default SubmitForm;
