import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import BestSellers from '../Components/BestSellers'
import Categories from '../Components/Categories'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <BestSellers/>
        <Categories/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home