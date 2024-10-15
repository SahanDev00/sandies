import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../Images/logo.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import categories from '../Products/categories'
import { IoIosClose, IoIosMenu } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {

    const location = useLocation()
    const [nav, setNav] = useState()
    const [dropDown, setDropDown] = useState()

    const toggleDropDown = () => {
        setDropDown(!dropDown)
    }

    const toggleNav = () => {
        setNav(!nav)
    }

    const handleButtonClick = () => {
        const message = `Hello, I'm here from the Sandies Website and I would Like to know more details.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=94717520661&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      };


      const isActive = (path) => {
        return location.pathname === path;
      };

  return (
    <div className='w-full fixed z-50 bg-white/90 top-0'>
        <div className='w-[90%] md:w-[95%] lg:w-[80%] mx-auto flex items-center justify-between h-[100px] '>
            <div>
                <Link to='/'>
                    <img src={logo} className='w-44 lg:w-48' alt="" />
                </Link>
            </div>
            <div className='hidden md:block'>
                <ul className='flex justify-between items-center gap-5 lg:gap-10 text-lg lg:text-xl'>
                    <Link to='/'>
                        <li className={` hover:text-pink-500 cursor-pointer uppercase ${isActive('/') ? 'text-pink-500' : 'text-black/90'}`}>Home</li>
                    </Link>
                    <div className='flex items-center justify-center group cursor-pointer'>
                        <li className='text-black/90 hover:text-pink-500 cursor-pointer group relative uppercase group-hover:text-pink-400'>Categories
                            <div className='absolute bg-white/95 w-[250px] border-b border-r border-l shadow group-hover:opacity-100 opacity-0 invisible group-hover:visible duration-500 translate-y-3 group-hover:translate-y-0 transition-transform -left-6'>
                                <ul className='p-5 h-full w-full space-y-3'>
                                    {categories.map((category, index) => (
                                        <HashLink smooth={true} scroll={el => {
                                            const yOffset = -100; // Adjust this value for the offset
                                            const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                            window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                                          }} to={`/#${category.name}`}>
                                            <li key={index} className='text-gray-600 hover:text-pink-400 text-[16px] cursor-pointer my-2 font-medium'> ☆ {category.name}</li>
                                        </HashLink>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <RiArrowDropDownLine size={30} className='group-hover:text-pink-500 group-hover:rotate-180 duration-500'/>
                    </div>
                    <Link to='about-us'>
                        <li className={` hover:text-pink-500 cursor-pointer uppercase ${isActive('/about-us') ? 'text-pink-500' : 'text-black/90'}`}>About Us</li>
                    </Link>
                    <Link to='/contact-us'>
                        <li className={`hover:text-pink-500 cursor-pointer uppercase ${isActive('/contact-us') ? 'text-pink-500' : 'text-black/90'}`}>Contact Us</li>
                    </Link>
                </ul>
            </div>
            <div className='hidden md:block'>
                <button onClick={handleButtonClick} className='border border-green-600 hover:border-green-400 hover:bg-green-400 px-6 py-2 rounded-full group'>
                    <FaWhatsapp size={25} className='text-green-600 group-hover:text-white'/>
                </button>
            </div>
            <div onClick={toggleNav} className='md:hidden'>
                {!nav ? <IoIosMenu size={30}/> : <IoIosClose size={30}/> }
            </div>
        </div>
        <div className={`w-full md:hidden duration-200 bg-white/90 ${nav ? 'py-5 min-h-[200px]' : 'h-0 overflow-hidden'}`}>
            <ul className='text-lg py-2 flex flex-col ml-20 justify-center min-h-[200px] w-full'>
                    <Link to='/'>
                        <li className={` hover:text-pink-500 cursor-pointer uppercase ${isActive('/') ? 'text-pink-500' : 'text-black/50'}`}>Home</li>
                    </Link>
                    
                        <li className='text-black/50 hover:text-pink-500 cursor-pointer uppercase flex gruop' onClick={toggleDropDown}>Categories
                            <RiArrowDropDownLine size={30} className='group-hover:rotate-180 duration-500'/>
                        </li>
                            <div className={`w-[250px] duration-300 overflow-hidden ${dropDown ? 'h-[270px]' : 'h-0 overflow-hidden'}`}>
                                <ul className='ml-3 h-full w-full space-y-3'>
                                    {categories.map((category, index) => (
                                        <HashLink smooth={true} scroll={el => {
                                            const yOffset = -100; // Adjust this value for the offset
                                            const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                            window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                                          }} to={`/${category.name}`}>
                                            <li key={index} className='text-gray-400 hover:text-pink-400 text-[16px] cursor-pointer my-2 font-medium'> ☆ {category.name}</li>
                                        </HashLink>
                                    ))}
                                </ul>
                            </div>
                 
                    <Link to='about-us'>
                        <li className={` hover:text-pink-500 cursor-pointer uppercase ${isActive('/about-us') ? 'text-pink-500' : 'text-black/50'}`}>About Us</li>
                    </Link>
                    <Link to='/contact-us'>
                        <li className={`hover:text-pink-500 cursor-pointer uppercase ${isActive('/contact-us') ? 'text-pink-500' : 'text-black/50'}`}>Contact Us</li>
                    </Link>
                </ul>
            <div className='block md:hidden ml-20'>
                <button onClick={handleButtonClick} className='border border-green-600 hover:border-green-400 hover:bg-green-400 px-6 py-2 rounded-full group'>
                    <FaWhatsapp size={25} className='text-green-600 group-hover:text-white'/>
                </button>
            </div>
            </div>
    </div>
  )
}

export default Navbar