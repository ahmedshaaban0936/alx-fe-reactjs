// src/Components/TodoList.js
const AddTodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value.trim()) return;
      addTodo(value);
      setValue('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Enter a new todo"  // Ensure this matches the test
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  };
  