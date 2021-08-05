const CheckButton = ({checked}) => {
  return (
    <>
    {checked ?
      
      <button className="mr-4 bg-gradient-to-r from-bgfrom to-bgto h-6 w-6 flex justify-center items-center rounded-full">
      <img src="images/icon-check.svg" alt="Done" />
      </button>
    :
      <button className="mr-4 bg-vlgrayblue dark:bg-vdgrayblue hover:bg-gradient-to-r hover:from-bgfrom hover:to-bgto h-6 w-6 flex justify-center items-center rounded-full flex-shrink-0">
        <div className="h-5 w-5 rounded-full bg-white dark:bg-vddesblue" />
      </button>
    }
</>
  )
}

export default CheckButton;