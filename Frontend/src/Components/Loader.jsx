import React from 'react'

function Loader() {
  return (
   <button type="button" className="bg-indigo-500  ..." disabled>
  <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
    {/* <!-- ... --> */}
  </svg>
  Processing…
</button>
  )
}

export default Loader
