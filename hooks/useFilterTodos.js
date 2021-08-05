import { useState } from 'react';
import { useSelector } from 'react-redux';

const useFilterTodos = () => {
  const todos = useSelector((state) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const filter = (filterType) => {
    switch (filterType) {
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.done === false));
        break;
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.done === true));
        break;
      case 'all':
        setFilteredTodos(todos);
        break;
      default:
        break;
    }
  }

  return [filteredTodos, filter];
}

export default useFilterTodos;