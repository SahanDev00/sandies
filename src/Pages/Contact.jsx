import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    number: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_e9cf42y', // Replace with your EmailJS service ID
      'template_qwe2ni7', // Replace with your EmailJS template ID
      formData,
      'Mcgu0mZpnQV-wXPoX' // Replace with your EmailJS user ID
    )
    .then((response) => {
        toast.success('Message Sent Successfully!', {
          position: "top-right",
          autoClose: 2000,
        });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }, (error) => {
        toast.error('Error Sending Message!', {
          position: "top-right",
          autoClose: 2000,
        });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  };

  const handleButtonClick = () => {
    const message = `Hello, I'm here from the Sandies Website and I would like to know more details.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=94717520661&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='h-screen lg:h-[800px] xl:h-screen w-full relative '>
      <img
        src='https://watermark.lovepik.com/photo/20211118/large/lovepik-birthday-cake-picture_500073946.jpg'
        className='w-full h-full object-cover'
        alt=''
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='mt-24 sm:mt-0 h-[500px] sm:h-[600px] md:h-[550px] w-[95%] sm:w-[90%] md:w-[700px] flex flex-col items-center justify-center rounded-2xl shadow-xl bg-white/95'>
          <h1 className='text-3xl font-semibold text-gray-600'>Send Us a Message</h1>
          <form className='flex flex-col mt-2 sm:mt-5 w-[80%]' onSubmit={handleSubmit}>
            <label className='text-lg text-gray-500'>Name</label>
            <input
              type='text'
              name='from_name'
              className='pl-4 h-[35px] bg-pink-500/30 rounded text-gray-700'
              placeholder='Sandies'
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            <label className='text-lg text-gray-500 mt-2'>Mobile Number</label>
            <input
              type='text'
              name='number'
              className='pl-4 h-[35px] bg-pink-500/30 rounded text-gray-700'
              placeholder='94712345678'
              value={formData.number}
              onChange={handleChange}
              required
            />
            <label className='text-lg text-gray-500 mt-2'>Your Message</label>
            <textarea
              name='message'
              className='pl-4 h-[75px] bg-pink-500/30 rounded text-gray-700'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type='submit' className='px-4 py-3 bg-pink-500/90 mt-5 w-32 rounded text-white font-semibold hover:bg-pink-500'>
              SUBMIT
            </button>
          </form>
          <h1 className='text-lg font-semibold my-2 sm:my-5'>OR</h1>
          <FaWhatsapp
            onClick={handleButtonClick}
            size={30}
            className='cursor-pointer text-green-500 hover:text-white border w-20 py-2 h-10 rounded-xl border-green-500 hover:bg-green-500'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
