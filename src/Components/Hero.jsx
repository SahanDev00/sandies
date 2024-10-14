import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {

    const slides = [
        {
            heading: 'Bento Cakes',
            text: 'Small in size, big in flavor! Treat yourself to our delightful Bento cakes, perfect for every little celebration.',
            image: 'https://img.freepik.com/premium-photo/beautiful-bento-cake-with-berry-decoration-pink-pastel-colors-light-pastel-background_358493-4063.jpg',
          },
          {
            heading: 'Anniversary Cakes',
            text: 'Celebrate your love with our handcrafted Anniversary cakes, designed to make your special day even sweeter.',
            image: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg',
          },
          {
            heading: 'Chocolate Mousse',
            text: 'Indulge in the richness of our creamy chocolate mousse — a dessert that melts in your mouth and leaves you craving for more.',
            image: "https://img.freepik.com/free-photo/close-up-delicious-chocolate-mousse-ready-be-served_23-2148622328.jpg",
          },
          {
            heading: 'Chocolate Cakes',
            text: 'Rich, decadent, and irresistibly delicious — our chocolate cakes are a chocolate lover’s dream come true!',
            image: 'https://img.freepik.com/premium-photo/close-up-scrumptious-chocolate-cakes-table_978190-171.jpg',
          },
          {
            heading: 'Birthday Cakes',
            text: 'Make birthdays extra special with our custom-designed birthday cakes. Each slice is a gift of flavor and joy!',
            image: 'https://img.freepik.com/free-photo/delicious-birthday-cake-with-candles_23-2150735002.jpg?t=st=1728632322~exp=1728635922~hmac=8f02f669eed28345ae99d174a3a2c8cffe29a5323e9f6a23f83aab68d63deabd&w=1380',
          },
          {
            heading: 'Cupcakes',
            text: 'Tiny treats with big flavors! Our cupcakes are perfect for any occasion — or just to brighten up your day.',
            image: 'https://images.unsplash.com/photo-1586985290301-8db40143d525?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },          
      ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 2600,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false
      };

  return (
    <div className='h-screen'>
        <Slider {...settings} className="w-full mx-auto">
            {slides.map((slide, index) => (
                <div key={index} className='w-full h-full'>
                    <div className='w-full h-full'>
                        <img src={slide.image} alt="" className='h-[99vh] w-full object-cover' />
                        <div className='inset-0 absolute h-[99vh] bg-black/60 flex flex-col justify-center items-center'>
                            <h1 className='text-white text-5xl sm:text-6xl text-center md:text-7xl lg:text-8xl uppercase font-bold'>{slide.heading}</h1>
                            <p className='text-2xl mt-5 text-gray-300 text-center lg:w-full w-[90%] md:w-[80%] mx-auto'>{slide.text}</p>
                        </div>
                    </div>

                </div>
            ))}
        </Slider>
    </div>
  )
}

export default Hero