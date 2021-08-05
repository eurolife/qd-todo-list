import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Filters from '../components/Filters';
import cn from 'classnames'
import TodoItem from '../components/TodoItem';
import useChooseMode from '../hooks/useChooseMode';

export default function Home() {
  const [setTheme, chooseTheme] = useChooseMode();
  useEffect(() => {
    setTheme();
  },[])
  return (

    <div className="font-josefine">
      <Head>
        <title>TODO List</title>
      </Head>
      <header className="pt-12 px-6">
        <div className="flex justify-between items-start max-w-xl mx-auto">
          <h1 className="text-3xl text-white tracking-widest">TODO</h1>
          <div className="mode">
            <button className="block dark:hidden" onClick={() => chooseTheme('dark')}><img src="images/icon-moon.svg" alt="Dark mode" /></button>
            <button className="hidden dark:block" onClick={() => chooseTheme('light')}><img src="images/icon-sun.svg" alt="Light mode" /></button>
          </div>
        </div>
        
      </header>

      <main className="px-6 -mt-24 text-sm md:text-base max-w-xl mx-auto">
        <div className="p-4 rounded-md bg-white dark:bg-vddesblue flex">
          <button className="mr-4 bg-vlgrayblue dark:bg-vdgrayblue hover:bg-gradient-to-r hover:from-bgfrom hover:to-bgto h-6 w-6 flex justify-center items-center rounded-full flex-shrink-0">
            <div className="h-5 w-5 rounded-full bg-white dark:bg-vddesblue" />
          </button>
          <input className="w-full text-vdgrayblue dark:bg-vddesblue" type="text" placeholder="Create a new todo..." />
        </div>
      

        <ul className="mt-6 bg-white dark:bg-vddesblue rounded-md w-full shadow-lg">
          <TodoItem done text="Some Stuff" />
          <TodoItem done={false} text="Some other stuff" />
          {/* filters/clear */}
          <li className="p-4 flex items-center justify-between">
            <span className="text-gray">5 items left</span>
            {/* Filters */}
            <div className="hidden md:block">
              <Filters />
            </div>
            <button className="text-gray hover:text-vdgrayblue">Clear Completed</button>
          </li>
        </ul>
        <div className="block md:hidden mt-6">
          <Filters />
        </div>
      </main>
      

      <footer className="text-center text-sm text-gray dark:text-vdgrayblue mt-12 md:text-base max-w-xl mx-auto">
       Drag and drop to reorder list
      </footer>
    </div>

  )
}
