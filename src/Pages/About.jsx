import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=' mt-24'>
      <div className='w-full'>
        <img src='https://www.sugarplumbakery.org/wp-content/uploads/2023/05/spb-banner-fixed-2400x750-040423-celebrationcake.jpg' className='w-full md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover' alt="" />
      </div>
      <div className='w-[90%] md:w-[80%] mx-auto h-full cursor-default'>
        <h1 className='text-3xl font-semibold text-pink-400 uppercase pt-10'>Sandies Cakes</h1>
        <p className='mt-5 md:w-[90%] md:text-lg text-gray-600 leading-relaxed'>Welcome to Sandies, where we turn your sweetest dreams into reality! As one of Sri Lanka’s leading cake creators, we specialize in custom-made cakes for all occasions, including birthday cakes, wedding cakes, anniversary cakes, and cupcakes. Using only the finest ingredients, our cakes are designed to not only look beautiful but also taste incredible. Whether you're after a classic butter cake, a decadent chocolate mousse, or a uniquely designed custom cake, we craft each creation with care and precision. At Sandies, we believe every celebration deserves a cake that's as memorable as the moment itself. Order online and experience the best cakes in Sri Lanka today!</p>
        <h1 className='text-3xl font-semibold text-pink-400 uppercase pt-10'>What We Specialize In</h1>
        <ul className='mt-5 md:w-[90%] md:text-lg text-gray-600 leading-relaxed list-disc pl-5 mb-10'>
            <li>Custom-designed cakes for birthdays, weddings, and anniversaries</li>
            <li>Handcrafted cupcakes in various flavors</li>
            <li>Rich and creamy chocolate mousse cakes</li>
            <li>Elegant and delicious butter cakes</li>
            <li>Personalized cakes for all special occasions</li>
            <li>High-quality ingredients and beautifully crafted designs</li>
        </ul>
      </div>
    </div>
  )
}

export default About