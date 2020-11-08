import React from 'react';
function Todo({ todo, index, completeTodo, deleteTodo }) {
    return (
        <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
            className="todo">
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => deleteTodo(index)}>x</button>
            </div>
        </div>
    );
}
export default Todo;
