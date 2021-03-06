import React from 'react';
import Todo from './Todo/Todo';

// export default class TodoList extends React.Component {
//     render(){
//         return <div>Todos...</div>;
//     }
// }

const TodoList = (props) => {
	const todos = props.tasks.map((todo, index) => {
		return (
			<Todo
				content={todo}
				key={index}
				id={index}
				onDelete={props.onDelete}
				onToggle={props.onToggle}
			/>
			
		);
	});
	return <div className="list-wrapper">{todos}</div>;
};

export default TodoList;

