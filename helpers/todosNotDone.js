import { useSelector } from 'react-redux';

const todosNotDone = () => {
  const todos = useSelector((state) => {
    return state.todos.filter((todo) => todo.done !== true);
  })
  return todos
}

export default todosNotDone;