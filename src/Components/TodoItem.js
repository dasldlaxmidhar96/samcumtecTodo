import React, { useContext } from 'react';
import { TodoContext } from '../Context/TodoContextProvider';

const TodoItem = ({ todo }) => {
  const { editTodo, deleteTodo } = useContext(TodoContext);

  const handleStatusChange = () => {
    const newStatus =
      todo.status === 'not started' ? 'in progress' : 'completed';
    editTodo({
      ...todo,
      status: newStatus,
    });
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.status === 'completed'}
        onChange={handleStatusChange}
      />
      <span>{todo.task}</span> <br />
      <span>{todo.priority}</span>
      <br />
      <span>{todo.dueDate}</span>
      <br />
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
