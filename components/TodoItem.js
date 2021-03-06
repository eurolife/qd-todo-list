import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../actions';
import CheckButton from "./CheckButton";

const TodoItem = ({item}) => {
  const [hovered, setHovered] = useState(false);
  const {id, description, done} = item;
  const textClasses = done ? 'text-lgrayblue dark:text-dgrayblue line-through' : 'text-dgrayblue dark:text-lgrayblue';

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeTodo(id))
  }
  return (
    <li 
      onMouseEnter={() => { setHovered(true)}}
      onMouseLeave={() => { setHovered(false)}}
      className="cursor-pointer py-2 md:py-4 flex items-center justify-between border-b border-vlgrayblue dark:border-vdgrayblue"
    >
      <div className="flex items-center px-4 py-2">
        <CheckButton item={item} />
        <span className={textClasses}>{description}</span>
      </div>
      <button className="pr-4" data-cy="deleteButton" onClick={handleClick}>
        {hovered ? 
          <img src="images/icon-cross.svg" alt="remove" />
        : 
        ''}
        
      </button>
    </li>
  )
}
export default TodoItem;