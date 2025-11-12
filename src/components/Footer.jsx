import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white font-extralight p-6 sm:p-8 md:p-10">
      <div className="flex flex-col sm:flex-col sm:justify-between items-center gap-2 sm:gap-4 text-center">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wider">
          J & T
        </p>
        <p className="text-sm sm:text-base md:text-lg uppercase tracking-wide">
          Saturday
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          November 23, 2025
        </p>
      </div>
    </footer>
  )
}

export default Footer
