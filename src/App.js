import React from 'react';
import TodoApp from './components/todoApp';
import './App.css'

function App() {
  return (
    <div>
      <div className="navbar is-info">
        <h1 className="">To-Do List App</h1>
      </div>
      <TodoApp></TodoApp>
    </div>
  );
}

export default App;
