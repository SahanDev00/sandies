import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../Images/logo.png'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='w-full fixed z-50 bg-white/90 top-0'>
        <div className='w-[80%] mx-auto flex items-center justify-between h-[100px]'>
            <div>
                <img src={logo} className='w-48' alt="" />
            </div>
            <div>
                <ul className='flex justify-between items-center gap-10 text-xl'>
                    <li className='text-black hover:text-pink-500 cursor-pointer'>Home</li>
                    <div className='flex items-center justify-center group'>
                        <li className='text-black hover:text-pink-500 cursor-pointer group relative'>Categories
                            <div className='absolute bg-white/90 w-[250px] border-b border-r border-l shadow group-hover:opacity-100 opacity-0 invisible group-hover:visible duration-500 translate-y-3 group-hover:translate-y-0 transition-transform -left-6'>
                                <ul className='p-5 h-full w-full space-y-3'>
                                    <li className='text-gray-700 hover:text-pink-400 text-[16px] cursor-pointer'> ☆ Birthday Cakes</li>
                                    <li className='text-gray-700 hover:text-pink-400 text-[16px] cursor-pointer'> ☆ Anniversary Cakes</li>
                                    <li className='text-gray-700 hover:text-pink-400 text-[16px] cursor-pointer'> ☆ Butter cakes</li>
                                    <li className='text-gray-700 hover:text-pink-400 text-[16px] cursor-pointer'> ☆ Chocolate Mousse</li>
                                    <li className='text-gray-700 hover:text-pink-400 text-[16px] cursor-pointer'> ☆ Cup Cakes</li>
                                    <li className='text-gray-700 hover:text-pink-400 text-[16px] cursor-pointer'> ☆ Custom Design Cakes</li>
                                </ul>
                            </div>
                        </li>
                        <RiArrowDropDownLine size={25} className='group-hover:rotate-180 duration-500'/>
                    </div>
                    <li className='text-black hover:text-pink-500 cursor-pointer'>About Us</li>
                    <li className='text-black hover:text-pink-500 cursor-pointer'>Contact Us</li>
                </ul>
            </div>
            <div>
                <button className='border border-black hover:border-green-400 hover:bg-green-400 px-6 py-2 rounded-full group'>
                    <FaWhatsapp size={25} className='text-black group-hover:text-white'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar