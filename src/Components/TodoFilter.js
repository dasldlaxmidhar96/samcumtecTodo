import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContextProvider';

const TodoFilter = () => {
  const { filterTodos } = useContext(TodoContext);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    filterTodos(newFilter);
  };
  return (
    <div>
      <label>Filter by task name, priority, or due date</label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default TodoFilter;
