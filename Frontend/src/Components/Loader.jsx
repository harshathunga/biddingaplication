import React from 'react'

function Loader() {
  return (
    <div className='flex items-center justify-center min-h-screen'>

    
   <button type="button" className="bg-indigo-500  ..." disabled>
  <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
    {/* <!-- ... --> */}
  </svg>
  Processing…
</button>

</div>
  )
}

export default Loader
