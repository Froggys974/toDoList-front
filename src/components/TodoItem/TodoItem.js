import React from 'react';
import './TodoItem.css';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TodoItem({todo, toggleComplete, deleteTodo }) {
  const id= todo.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
  useSortable({ id });
  
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    
    <div ref={setNodeRef}
         style={style}
         {...attributes}
         {...listeners}
         className={`todo-item ${todo.completed ? "completed" : ""}`}>
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
