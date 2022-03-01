import { useState, useEffect } from "react";

import "./App.css";
//Importing components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {

	// STATE STUFF
	const [ inputText, setInputText ] = useState( "" )
	const [ todos, setTodos ] = useState( [] )
	const [ status, setStatus ] = useState( 'all' )
	
	// Create another state array to put our todos into for the filter.
	const [ filteredTodos, setFilteredTodos ] = useState( [] )

	const filterHandler = () => {
		switch( status ) {
			case 'completed':
				setFilteredTodos( todos.filter( ( todo ) => todo.completed === true ))
				break;
			case 'uncompleted':
				setFilteredTodos( todos.filter( ( todo ) => todo.completed === false ))
				break;
			default:
				setFilteredTodos( todos )
				break;
		}
	}

	// FUNCTIONS AND EVENTS
	// USE EFFECT
	// Empty array means function will only run when it is first rendered
	// It run the state that changes into the array and it will run

	// Run once when the app starts
	useEffect( () => {
		getLocalTodos();
	}, [] ) // Empty dependency array

	useEffect( () => {
		// filterHandler function *could* go here if you wanted it to
		filterHandler();
		saveLocalTodos();
	}, [ todos, status ] )


// Save to local
	const saveLocalTodos = () => {
		localStorage.setItem( 'todos', JSON.stringify( todos ))
	}

	const getLocalTodos = () => {
		// If todos has no values (is empty) (ie null)
		if( localStorage.getItem( 'todos' ) === null ) {
			// Stringify state and add to local storage
			localStorage.setItem( 'todos', JSON.stringify( [ ] ) );
		} else {
			// Parse json coming back from local storage
			let todoLocal = JSON.parse( localStorage.getItem( 'todos' ) );
			// Send to state to update list
			setTodos( todoLocal );
		}
	}

  return (
    <div className="App">
			<header>
				<h1>Cy's to do list</h1>
			</header>
			<Form 
				inputText={ inputText } 
				todos={ todos }
				setTodos={ setTodos }
				setInputText={ setInputText } 
				setStatus={ setStatus }
			/>
			<TodoList todos={ todos } setTodos={ setTodos } filteredTodos={ filteredTodos } />
    </div>
  );
}

export default App;
