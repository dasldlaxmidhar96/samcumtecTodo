import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContextProvider';

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      task,
      priority,
      dueDate,
      status: 'not started',
    });
    setTask('');
    setPriority('low');
    setDueDate('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <label>
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
