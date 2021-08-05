import { useRef } from 'react';

const AddNewInput = ({handleCreateNew, error}) => {
  const inputRef = useRef();

  const createNew = (e) => {
    const text = inputRef.current.value;
    handleCreateNew(e, text);
    inputRef.current.value = '';
  }

  return (
    <>
    {error ? 
      <div className="p-2 bg-red text-white text-bold mb-4">{error}</div>
    :
      null 
    }
    <form onSubmit={createNew}>
      <div className="p-4 rounded-md bg-white dark:bg-vddesblue flex">
          <button className="mr-4 bg-vlgrayblue dark:bg-vdgrayblue hover:bg-gradient-to-r hover:from-bgfrom hover:to-bgto h-6 w-6 flex justify-center items-center rounded-full flex-shrink-0">
            <div className="h-5 w-5 rounded-full bg-white dark:bg-vddesblue" />
          </button>
          <input ref={inputRef} id="create-new-todo" className="w-full text-vdgrayblue dark:bg-vddesblue" type="text" placeholder="Create a new todo..." />
      </div>
    </form>
    </>
  )
}
export default AddNewInput;