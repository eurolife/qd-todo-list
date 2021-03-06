const Filters = ({handleFilter, filterType}) => {
  const buttonClasses = (type) => {
    return type === filterType ? 'p-4 font-bold text-brightblue' : 'p-4 font-bold hover:text-vdgrayblue dark:hover:text-lgrayblue';
  }
  return (
    <div className="bg-white dark:bg-vddesblue flex justify-center rounded-md text-gray dark:text-dgrayblue">
      <button onClick={() => handleFilter('all')} className={buttonClasses('all')}>All</button>
      <button data-cy="showActive" onClick={() => handleFilter('active')} className={buttonClasses('active')}>Active</button>
      <button data-cy="showCompleted" onClick={() => handleFilter('completed')} className={buttonClasses('completed')}>Completed</button>
    </div>
  )
}
export default Filters;