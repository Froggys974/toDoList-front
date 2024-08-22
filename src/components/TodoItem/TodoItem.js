import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    // {/* draganddrop */}
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label  className="checkText">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span>{todo.text}</span>
      </label >

      <div className="buttonList">
        <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default TodoItem;
