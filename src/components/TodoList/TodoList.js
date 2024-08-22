import React from 'react';
import TodoItem from './../TodoItem/TodoItem';
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </SortableContext>
    </div>
  );
}

export default TodoList;
