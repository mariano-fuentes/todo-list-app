import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TodoForm from '../todoForm';
import TodoItem from '../todoItem'

const TodoApp = () => {
  const [todos, setTodos]= useState([])

  useEffect(()=>{
    const getTodos=()=>{
      axios.get('http://localhost:3000/todos')
        .then(function (response) {
          setTodos([...response.data])
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    getTodos()
  },[])
  
  const handleAddItem= (item) => {
    setTodos([...todos, item])
    axios.post('http://localhost:3000/todos', {
      id: item.id,
      text: item.text
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleRemove= (e) => {
    const origin= Number(e.target.getAttribute('data-id'));
    const newTodos= todos.filter( todo => todo.id !== origin )
    setTodos([...newTodos])
    axios.delete(`http://localhost:3000/todos/${origin}`)
      .then((response)=>{
        console.log(response);
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const handleEditItem= (editedTodo) => {
    const origin= editedTodo.id;
    const index= todos.findIndex(todo => todo.id === origin )
    const editedTodos=[...todos]
    editedTodos[index].text=editedTodo.text;
    setTodos([...editedTodos]);
    axios.put(`http://localhost:3000/todos/${origin}`, {text:editedTodo.text})
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }

  return (
    <div className="section">
      <TodoForm addItem={handleAddItem}></TodoForm>
      <div className="section">
        {todos.map((todo) => {
          return (
            <TodoItem
              text={todo.text}
              id={todo.id}
              removeItem={handleRemove}
              editItem={handleEditItem}
              key={todo.id}
            ></TodoItem>
          )
        }
        )}
      </div>
    </div>
  )
}

export default TodoApp;