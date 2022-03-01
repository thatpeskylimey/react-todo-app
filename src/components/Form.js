
const Form = ( { setInputText, inputText, setTodos, todos, setStatus } ) => {
	
	// Write all your js stuff here 
	const inputTextHandler = ( e ) => {
		// Get value from input		
		setInputText( e.target.value );
	}

	const todoHandler = ( e ) => {
		// Stop form submitting
		e.preventDefault();
		setTodos([ 
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 } ])
		// Reset text box
		setInputText("")
	}

	const statusHandler = (e) => {
		setStatus( e.target.value )
	}

	return(
		<form>
      <input onChange={ inputTextHandler } type="text" className="todo-input" value={inputText} />

      <button onClick={ todoHandler } className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={ statusHandler }>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

	)
 }

 export default Form;