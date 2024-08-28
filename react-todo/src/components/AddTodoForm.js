import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}   

        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;