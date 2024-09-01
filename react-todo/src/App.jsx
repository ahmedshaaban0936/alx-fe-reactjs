// src/App.jsx
import React from 'react';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List Application</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
