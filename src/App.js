import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import './App.css';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

function App() {
  const [todos, setTodos] = useState([]); //utilisation du hook useState initialisé a un tableau vide pour gerer l'etat. setTodos va gerer le tableau todos

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const getTodosPos = (id) => todos.findIndex((todo) => todo.id === id);

  const handleDragStart= (event) =>{
    console.log("drag start");
  };

  const handleDragEnd = (event) => {
    console.log("end");
    
    const { active, over } = event;

    if (active.id === over.id) return;

    setTodos((todos) => {
      const originalPos = getTodosPos(active.id);
      const newPos = getTodosPos(over.id);

      return arrayMove(todos, originalPos, newPos);
    });
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Ma ToDo List</h1>
      <AddTodo addTodo={addTodo} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </DndContext>
    </div>
  );
}

export default App;
