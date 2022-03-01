
const Todo = ( { text, todo, todos, setTodos } ) => { 

	const deleteHandler = () => {
		// Filter all elements EXCEPT ths matching one (delete the matching one)
		setTodos(todos.filter( el => el.id !== todo.id ))
	}

	const completeHandler = () => {
		setTodos( todos.map( (item) => {
			if ( item.id === todo.id ) {
				return {
					// This spreads the existing todo held in state array and modifies the completed value
					// It does it because it is added after the spread
					// Using the syntax !item.completed will just switch it to the opposite of whatever it is
					...item, completed: !item.completed
				}
			}
			return item
		}))
	}

	return(
		<div className="todo">

			<li className={ `todo-item ${todo.completed ? "completed" : ""}` }>{ text }</li>

			<button onClick={ completeHandler } className="complete-btn">
				<i className="fas fa-check"></i>
			</button>

			<button onClick={ deleteHandler } className="trash-btn">
				<i className="fas fa-trash"></i>
			</button>

		</div>
	)
 }

 export default Todo;