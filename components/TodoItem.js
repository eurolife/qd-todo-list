import CheckButton from "./CheckButton"

const TodoItem = ({done, text}) => {
  const textClasses = done ? 'text-dgrayblue line-through' : 'text-lgrayblue';
  return (
    <li className="py-2 md:py-4 flex items-center justify-between border-b border-vlgrayblue dark:border-vdgrayblue">
      <div className="flex items-center px-4 py-2">
        <CheckButton checked={done} text="Some other stuff" />
        <span className={textClasses}>{text}</span>
      </div>
      <button className="pr-4">
        <img src="images/icon-cross.svg" alt="remove" />
      </button>
      
    </li>
  )
}
export default TodoItem;