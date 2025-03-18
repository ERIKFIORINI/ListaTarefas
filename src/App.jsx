import React, { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Insira a tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="task-item">
            <span>{todo}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
