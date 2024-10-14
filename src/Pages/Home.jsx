import React from 'react'
import Hero from '../Components/Hero'
import BestSellers from '../Components/BestSellers'
import Categories from '../Components/Categories'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <BestSellers/>
        <Categories/>
        <Contact/>
    </div>
  )
}

export default Home