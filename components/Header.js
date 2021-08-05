const Header = ({chooseTheme}) => {
  return (
    <header className="pt-12 px-6">
      <div className="flex justify-between items-start max-w-xl mx-auto">
        <h1 className="text-3xl text-white tracking-widest">TODO</h1>
        <div className="mode">
          <button data-cy="selectDarkMode" className="block dark:hidden" onClick={() => chooseTheme('dark')}><img src="images/icon-moon.svg" alt="Dark mode" /></button>
          <button className="hidden dark:block" onClick={() => chooseTheme('light')}><img src="images/icon-sun.svg" alt="Light mode" /></button>
        </div>
      </div>
    </header>
  )
}
export default Header;