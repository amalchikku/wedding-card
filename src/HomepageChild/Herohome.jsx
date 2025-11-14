import React from 'react'
import bgimg from '../assets/blur1.jpg'

function Herohome() {
  return (
    <div
      className="
        h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
        text-white text-center
        px-4 sm:px-10 md:px-16 lg:px-24
      "
      style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="bg-black/50 p-4 sm:p-10 md:p-16 rounded-2xl">
        <p
          className="
            text-base sm:text-xl md:text-2xl lg:text-3xl
            font-light leading-relaxed
          "
        >
          With love and gratitude, we invite you to <br />
          share in the joy of our wedding day. <br />
          <span className="block mt-4">
            Saturday, December 20, 2025
          </span>
          <span className="block">
            Krishkripa Auditorium, <br />
            Vadakar , Kozhikode
          </span>
        </p>
      </div>
    </div>
  )
}

export default Herohome
