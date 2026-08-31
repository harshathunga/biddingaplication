import React from 'react'
import "../App.css";
function Navbar({children}) {
  return (
    <div className='flex m-6 py-5  rounded rounded-2xl justify-between'>
      <div className='flex' id = 'logo'>
        <h1 className='text-2xl pl-2 font-bold '>Bidding</h1>
      </div>

      <div className='flex justify-between' id='nav_content'>
        {children}
      </div>
    </div>
  )
}

export default Navbar
