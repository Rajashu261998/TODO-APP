
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos]=useState(["Ashut","Aman"])

  const [input, setInput]= useState("")

  const addTodo = () =>{
    setTodos([...todos,input])
  }

  return (
    <div className="App">
     <h1>Todo app</h1>
     <input value={input} onChange={event =>setInput(event.target.value)} />
     <button onClick={addTodo} >Add Todo</button>

     <ul>
      {todos.map(todo =>{
        <li>{todo}</li>
      })

      }
      
     </ul>
    </div>
  );
}

export default App;
