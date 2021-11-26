import React, { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    
    // function to get the value of the input and set the new state
    function handleInputChange(e) {
        // set the new state value to what's currently in the input box
        setTodo(e.target.value);
    }

    // function to create a new object on form submit
    function handleFormSubmit(e) {
        // prevent the browser default behavior or refreshing the page on submit
        ////////////////////////

        // don't submit if the input is an empty string
        if (todo !== '') {
            // set the new todos state (the array)
            setTodos([
                // copy the current values in state
                ...todos,
                {
                    // setting a basic id to identify the object
                    
                }
            ])
        }
    }


    return (
        <div className="App">
            <h1>Add Todo</h1>
            <form>
                <input
                name="todo"
                type="text"
                placeholder="Create a new todo"
                />
            </form>

            <ul className="todo-list">
                {todos.map((todo)=> {
                    <li>{todo}</li>
                })}
            </ul>
        </div>
    )
}

export default App
