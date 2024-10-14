import React from 'react'
import pic from '../Images/logo.png'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {

  const handleButtonClick = () => {
    const message = `Hello, I'm here from the Sandies Website and I would Like to know more details.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=94717520661&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='w-full h-[100px] bg-blue-200'>
      <div className='w-[80%] mx-auto h-full flex items-center justify-between'>
        <div>
          <Link to='/'>
            <img src={pic} className='w-52' alt="" />
          </Link>
        </div>
        <div>
          <h1 className='text-lg font-semibold text-gray-700 cursor-default'>© 2024 · SANDIES CAKES</h1>
        </div>
        <div className='flex items-center justify-between gap-3'>
          <FaFacebook size={30} className='cursor-pointer hover:text-pink-700'/>
          <FaInstagram size={30} className='cursor-pointer hover:text-pink-700'/>
          <FaWhatsapp onClick={handleButtonClick} size={30} className='cursor-pointer hover:text-pink-700'/>
        </div>
      </div>
    </div>
  )
}

export default Footer