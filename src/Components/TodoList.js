import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../Context/TodoContextProvider';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
