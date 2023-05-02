import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const filterTodos = (filter) => {
    const filteredTodos = todos.filter((todo) => {
      return (
        todo.task.includes(filter) ||
        todo.priority.includes(filter) ||
        todo.dueDate.includes(filter)
      );
    });

    setTodos(filteredTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, filterTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
