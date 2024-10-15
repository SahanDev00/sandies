import React, { useEffect, useRef, useState } from 'react'
import birthdayCake from '../Images/birthdayCake.jpeg'
import bentoBox2 from '../Images/bentoBox2.jpeg'
import bento11 from '../Images/bento11.jpeg'
import bentoCups from '../Images/bentoCups.jpeg'
import bentoCups2 from '../Images/bentoCups2.jpeg'
import mousse from '../Images/mousse.jpeg'
import mousse2 from '../Images/mousse2.jpeg'
import mousse3 from '../Images/mousse3.jpeg'
import cupcake from '../Images/cupcake.jpeg'
import cupcake2 from '../Images/cupcake2.jpeg'
import Product from './Product'

const BestSellers = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const cardRefs = useRef([]);

    const bestSellers = [
        {
            name: 'Decorated Birthday Cake',
            price: 4890,
            description: '1.8KG Icing Birthday Cake',
            colour: '',
            pic: birthdayCake,
            subPics: [
                {
                    pic: birthdayCake,
                },
            ]
        },
        {
            name: 'Birthday Bento Cake',
            price: 1890,
            description: '350g Vanilla Birthday Bento Cake',
            colour: 'pink',
            pic: bento11,
            subPics: [
                {
                    pic: bento11,
                },
                {
                    pic: bentoBox2,
                },
            ]
        },
        {
            name: 'Chocolate Mousse with Chocos',
            price: 1450,
            description: '500ml Cup of Chocolate Mousse Filled with Chocolates and Choco Chips',
            colour: '',
            pic: mousse,
            subPics: [
                {
                    pic: mousse,
                },
                {
                    pic: mousse2,
                },
                {
                    pic: mousse3,
                }
            ]
        },
        {
            name: 'Chocolate Cupcake with Sprinkles',
            price: 1390,
            description: '6 Pieces of Sweet Chocolate Cupcakes with Sprinkles on Top of it.',
            colour: 'pink',
            pic: cupcake,
            subPics: [
                {
                    pic: cupcake,
                },
                {
                    pic: cupcake2,
                },
            ]
        },
        {
            name: 'Photo Printed Bento Cake with Cup Cakes',
            price: 2890,
            description: 'Cup Cakes and a Bento Cake with a Rommantic Photo Printed on Top',
            colour: '',
            pic: bentoCups,
            subPics: [
                {
                    pic: bentoCups,
                },
                {
                    pic: bentoCups2,
                },
            ]
        },
    ]

    useEffect(() => {
        const currentRefs = cardRefs.current; // Copy current cardRefs
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeUp');
            }
          });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });
      
        currentRefs.forEach((card) => {
          if (card) observer.observe(card);
        });
      
        return () => {
          currentRefs.forEach((card) => {
            if (card instanceof Element) {
              observer.unobserve(card);
            }
          });
        };
      }, []);
      
    
  return (
    <div className='w-full my-5'>
        <h1 className='text-4xl sm:text-5xl uppercase text-center my-5 font-semibold text-pink-400 font-overpass'>Best Sellers</h1>
            <div className='w-[98%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 rounded-md gap-4'>
                {bestSellers.map((bestSeller, index) => (
                    <div ref={(el) => (cardRefs.current[index] = el)} key={index} className='card w-full h-[300px] sm:h-[350px] xl:h-[450px] rounded-md hover:shadow-lg duration-300 cursor-pointer' onClick={() => setSelectedProduct(bestSeller)}>
                        <img src={bestSeller.pic} className='h-[85%] object-cover rounded-t-md w-full' alt="" />
                        <div className={`w-full h-[25%] md:h-[15%] rounded-b-md flex flex-col justify-center items-center py-7 md:py-0 ${bestSeller.colour === 'pink' ? 'bg-pink-100' : 'bg-blue-100'}`}>
                            <h1 className='text-sm md:w-[95%] w-[90%] md:text-[16px] font-medium text-gray-700 uppercase text-center font-poppins'>{bestSeller.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg p-8 w-3/4 max-w-4xl relative">
                    <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl"
                    onClick={() => setSelectedProduct(null)}
                    >
                    &times;
                    </button>
                    <Product product={selectedProduct} />
                </div>
                </div>
            )}
    </div>
  )
}

export default BestSellers