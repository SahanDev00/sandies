import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='w-full h-[200px] flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-center'>Contact Us and Bake Something with Your Imagination.</h1>
        <Link to='/contact-us'>
          <button className='px-5 py-2 bg-pink-400 hover:bg-pink-500 rounded-full text-white font-semibold mt-4'>Contact Us</button>
        </Link>
    </div>
  )
}

export default Contact