import { useEffect, useState } from 'react';
import Head from 'next/head';
import todosNotDone from '../helpers/todosNotDone';
import Filters from '../components/Filters';
import TodoItem from '../components/TodoItem';
import useChooseMode from '../hooks/useChooseMode';
import useFilterTodos from '../hooks/useFilterTodos';
import { useDispatch } from 'react-redux';
import { removeCompleted, createTodo } from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddNewInput from '../components/AddNewInput';


const Home = ({todos}) => {
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState('all')

  const dispatch = useDispatch();
  const [setTheme, chooseTheme] = useChooseMode();
  const [filteredTodos, filter] = useFilterTodos(filterType);
  const notDone = todosNotDone()

  const handleRemoveDone = () => {
    dispatch(removeCompleted())
  }

  const handleCreateNew = (e, text) => {
    e.preventDefault();
    if(text.trim().length === 0) {
      setError('You must enter some text.');
      return;
    }
    setError(null);
    dispatch(createTodo(text));
  }
  const handleFilter = (type) => {
    setFilterType(type);
    filter(type)
  }
  useEffect(() => {
    handleFilter(filterType)
  },[todos])

  useEffect(() => {
    setTheme();
  },[])
  return (

    <div className="font-josefine">
      <Head>
        <title>TODO List</title>
      </Head>

      <Header chooseTheme={chooseTheme} />

      <main className="px-6 -mt-24 text-sm md:text-base max-w-xl mx-auto">
        <AddNewInput handleCreateNew={handleCreateNew} error={error} />

        <ul className="mt-6 bg-white dark:bg-vddesblue rounded-md w-full shadow-lg">
          {filteredTodos?.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}

          {/* filters/clear */}
          <li className="p-4 flex items-center justify-between">
            <span className="text-gray"><span data-cy="numberActive">{notDone.length}</span> items left</span>
            <div className="hidden md:block">
              <Filters filterType={filterType} handleFilter={handleFilter} />
            </div>
            <button onClick={handleRemoveDone} className="text-gray hover:text-vdgrayblue">Clear Completed</button>
          </li>
        </ul>
        <div className="block md:hidden mt-6">
          <Filters filterType={filterType} handleFilter={handleFilter} />
        </div>
      </main>
      

      <footer className="text-center text-sm text-gray dark:text-vdgrayblue mt-12 md:text-base max-w-xl mx-auto">
       Drag and drop to reorder list
      </footer>
    </div>

  )
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, null)(Home);
