import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {

  const handleButtonClick = () => {
    const message = `Hello, I'm here from the Sandies Website and I would Like to know more details.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=94717520661&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='h-screen w-full relative'>
      <img src="https://watermark.lovepik.com/photo/20211118/large/lovepik-birthday-cake-picture_500073946.jpg" className='w-full h-full object-cover' alt="" />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='h-[550px] w-[700px] flex flex-col items-center justify-center rounded-2xl shadow-xl bg-white/95'>
          <h1 className='text-3xl font-semibold text-gray-600'>Send Us a Message</h1>
          <form className='flex flex-col mt-5 w-[80%]'>
            <label className='text-lg text-gray-500'>Name</label>
            <input type="text" className='h-[35px] bg-pink-500/30 rounded text-gray-700' />
            <label className='text-lg text-gray-500 mt-2'>Mobile Number</label>
            <input type="text" className='h-[35px] bg-pink-500/30 rounded text-gray-700' />
            <label className='text-lg text-gray-500 mt-2'>Your Message</label>
            <textarea name="" className='h-[75px] bg-pink-500/30 rounded text-gray-700' id=""></textarea>
            <button className='px-4 py-3 bg-pink-500/90 mt-5 w-32 rounded text-white font-semibold hover:bg-pink-500'>SUBMIT</button>
          </form>
          <h1 className='text-lg font-semibold my-5'>OR</h1>
          <FaWhatsapp onClick={handleButtonClick} size={30} className='cursor-pointer text-green-500 hover:text-white border w-20 py-2 h-10 rounded-xl border-green-500 hover:bg-green-500'/>
        </div>
      </div>
    </div>
  )
}

export default Contact
