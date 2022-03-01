import Todo from "./Todo";

const TodoList = ( { todos, setTodos, filteredTodos } ) => { 

	return(
    <div className="todo-container">
      <ul className="todo-list">
			
			{/* Uses new filteredTodos 			 */}
			{ filteredTodos.map( ( todo ) => (
					<Todo 
						todos={ todos } 
						todo={todo} 
						setTodos={ setTodos } 
						text={ todo.text } 
						key={ todo.id } 
					/> 
			))}
			
			</ul>
    </div>
	)
 }

 export default TodoList;