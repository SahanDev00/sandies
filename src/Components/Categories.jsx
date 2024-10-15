import React, { useState } from 'react'
import items from '../Products/items'
import Product from './Product';

const Categories = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className='w-[95%] mx-auto sm:w-full mt-10 bg-gray-100 pb-10'>
        <h1 className='text-4xl sm:text-5xl uppercase text-center my-5 pt-10 font-semibold text-blue-400'>Explore by <span className='text-pink-500'>Category</span></h1>
        {items.map((item, index) => (
            <div id={item.category} key={index} className='mt-14'>
                <h1 className='text-2xl sm:text-3xl uppercase sm:ml-5 my-3 sm:my-5 font-semibold text-pink-400'>{item.category}</h1>
                <div className='w-[98%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 rounded-md gap-4'>
                    {item.items.map((product, idx) => (  // Loop through the items array
                        <div key={idx} className='w-full mt-3 sm:mt-0 h-[300px] sm:h-[350px] xl:h-[450px] rounded-md lg:hover:shadow-lg lg:hover:-translate-y-2 duration-300 cursor-pointer' onClick={() => setSelectedProduct(product)}>
                            <img src={product.pic} className='h-[75%] md:h-[85%] w-full object-cover rounded-t-md' alt="" />
                            <div className={`w-full h-[25%] md:h-[15%] rounded-b-md flex flex-col py-7 md:py-0 justify-center items-center ${product.colour === 'pink' ? 'bg-pink-100' : 'bg-blue-100'}`}>
                                <h1 className='text-sm md:w-full w-[90%] md:text-[16px] font-medium text-gray-700 uppercase text-center'>{product.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}

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

export default Categories