import React from 'react'
import pic from '../Images/logo.png'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {

  const handleButtonClick = () => {
    const message = `Hello, I'm here from the Sandies Website and I would Like to know more details.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=94703319086&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='w-full md:h-[100px] bg-blue-200'>
      <div className='w-[95%] md:w-[80%] mx-auto h-full flex items-center justify-between'>
        <div>
          <Link to='/'>
            <img src={pic} className='w-44 md:w-52' alt="" />
          </Link>
        </div>
        <div className='md:block hidden'>
          <h1 className='text-lg font-semibold text-gray-700 cursor-default font-poppins'>© 2024 · SANDIES CAKES</h1>
        </div>
        <div className='flex items-center justify-between gap-3'>
          <a href="https://www.facebook.com/profile.php?id=61555702144248" target='_blank' rel="noreferrer">
            <FaFacebook size={30} className='cursor-pointer hover:text-pink-700'/>
          </a>
          <a href="https://www.instagram.com/sandies_._" target='_blank' rel="noreferrer">
            <FaInstagram size={30} className='cursor-pointer hover:text-pink-700'/>
          </a>
          <FaWhatsapp onClick={handleButtonClick} size={30} className='cursor-pointer hover:text-pink-700'/>
        </div>
      </div>
      <div className='md:hidden w-full bg-blue-200 pb-2'>
          <h1 className='text-lg font-semibold text-center text-gray-700 cursor-default font-poppins'>© 2024 · SANDIES CAKES</h1>
        </div>
    </div>
  )
}

export default Footer