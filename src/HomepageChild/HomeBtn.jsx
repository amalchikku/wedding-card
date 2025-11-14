import React from 'react'
import bgimg from '../assets/pexels-aydin-photography-298758980-34687742.jpg'

function HomeBtn() {
  return (
    <div className='h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
        text-white text-center
        px-4 sm:px-10 md:px-16 lg:px-24'
         style={{ backgroundImage: `url(${bgimg})` }}>

     <div className="bg-black/50 p-6 sm:p-10 md:p-16 rounded-2xl">
      <p className='flex flex-col justify-center text-base sm:text-xl md:text-2xl lg:text-3xl
            font-light leading-relaxed'>Your presence is the most cherished gift. Should you wish to 
       <span className="block mt-4">contribute, we've created a honeymoon registry to help us </span>
      <span className="block mt-4">  embark on a memorable adventure to the Amalfi Coast.</span></p>
      
        <button class="bg-black hover:bg-gray-400  text-white font-bold py-2 px-4 rounded">Go To Register</button>


      </div>
    </div>
  )
}

export default HomeBtn
