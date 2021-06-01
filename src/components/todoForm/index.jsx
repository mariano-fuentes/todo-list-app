import React,{useState} from 'react';
import './TodoForm.css';

const TodoForm = ({ addItem }) => {
  const [todo, setTodo]=useState({
    id: Math.floor(Math.random()*100000000),
    text: ''
  })

  const handleChange= (e) => {
    setTodo({
      ...todo,
      text:e.target.value
    });
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    setTodo({
      ...todo,
      text: todo.text
    });
    addItem(todo);
    cleanup();
  }

  const cleanup= () => {
    setTodo({
      id: Math.floor(Math.random()*100000000),
      text: ''
    })
  }

  return (
    <div className="form-ctn">
      <form>
        <input
          className="input is-medium" 
          onChange={handleChange}
          type="text"
          placeholder="Add new todo..."
          value={todo.text}
        />
      </form>
      <button className="button is-info form-btn is-medium" onClick={handleSubmit}>Add Item</button>
    </div>
  )
}

export default TodoForm;