import React from 'react'

function Nameslip() {
  return (
    <div className="bg-white flex flex-col items-center justify-center p-6 sm:p-10">
      <h1
        className="
          text-center 
          font-thin 
          text-3xl        /* mobile */
          sm:text-5xl     /* tablet */
          md:text-6xl     /* small laptop */
          lg:text-7xl     /* large screens */
          tracking-wide 
        "
      >
        JENNY & THOMAS
      </h1>
    </div>
  )
}

export default Nameslip
