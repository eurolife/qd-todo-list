const chooseMode = () => {

  const setTheme = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }
  const chooseTheme = (mode) => {
    if(mode === 'dark') {
      localStorage.theme = 'dark';
    }
    else {
      localStorage.theme = 'light';
    }
    setTheme()
  }

  return [setTheme, chooseTheme];

}
export default chooseMode;