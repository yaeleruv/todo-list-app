import React from 'react';

const Todo = (props) => {
	console.log(props.content.task, 'is done?', props.content.isDone);

	const style = props.content.isDone ? 'line-through' : 'initial';

	return (
		<div className="list-item" style={{ textDecoration: style }}>
			{props.content.task}
			<button
				class="delete is-pulled-right"
				onClick={() => {
					props.onDelete(props.id);
				}}
			></button>
		</div>
	);
};

export default Todo;