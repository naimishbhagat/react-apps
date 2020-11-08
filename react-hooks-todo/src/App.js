import React, { useState } from 'react';
import './App.css';
import Todo from './components/todo';
import TodoForm from './components/todoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isComplted: false
    },
    {
      text: 'Meet friend for lunch',
      isComplted: false
    },
    {
      text: 'Build really cool todo app',
      isComplted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;