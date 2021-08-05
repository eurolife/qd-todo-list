const Filters = ({handleFilter, filterType}) => {
  const buttonClasses = (type) => {
    return type === filterType ? 'p-4 font-bold text-brightblue' : 'p-4 font-bold';
  }
  return (
    <div className="bg-white dark:bg-vddesblue flex justify-center rounded-md text-gray dark:text-dgrayblue">
      <button onClick={() => handleFilter('all')} className={buttonClasses('all')}>All</button>
      <button onClick={() => handleFilter('active')} className={buttonClasses('active')}>Active</button>
      <button onClick={() => handleFilter('completed')} className={buttonClasses('completed')}>Completed</button>
    </div>
  )
}
export default Filters;