import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem= ({ text,id,removeItem,editItem }) => {
  const [showEdit, setShowEdit]=useState(false)
  const [editedText, setEditedText]=useState('')
  const [editedId, setEditedId]=useState(null)
  
  const handleChange= (e) => {
    setEditedText(e.target.value)
  }

  const showEditField= (e) => {
    console.log(e.target)
    setEditedId(Number(e.target.getAttribute('data-id')))
    setShowEdit(true)
  }

  const handleEdit = () => {
    debugger
    editItem({
      id: editedId,
      text:editedText
    })
    setShowEdit(false);
  }

  return (
    <div className="container todo-ctn">
      <div className="todo-item">
        {!showEdit ? <h3 className="title">{text}</h3> : null}
        {showEdit ? 
          <div>
            <input 
              type="text" 
              placeholder="Edit todo..."
              onChange={handleChange}
              value={editedText}
            ></input>
            <button onClick={handleEdit}>Change</button>
          </div>
        :null}
      </div>
      <div className="btn-ctn">
        <button
          className="button is-small is-info"
          data-id={id}
          onClick={showEditField}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button
          className="button is-small is-danger"
          data-id={id}  
          onClick={removeItem}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default TodoItem;