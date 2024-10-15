import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div id='Custom Desisgn Cake' className='w-full h-[200px] flex flex-col items-center justify-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl w-[95%] sm:w-[90%] text-center font-overpass'>Contact Us and Bake Something with Your Imagination.</h1>
        <Link to='/contact-us'>
          <button className='md:px-5 py-1 px-3 md:py-2 bg-pink-400 hover:bg-pink-500 rounded-full text-white font-semibold mt-4 font-poppins'>Contact Us</button>
        </Link>
    </div>
  )
}

export default Contact