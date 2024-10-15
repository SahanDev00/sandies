import React, { useState } from 'react'

const Product = ({ product }) => {
    const [mainPic, setMainPic] = useState(product.pic);

    const handleOrderClick = () => {
        const message = `Hello, I would like to order the following product:\n\nProduct Name: ${product.name}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=94717520661&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      };

  return (
    <div className="w-full max-h-[80vh] sm:max-h-[70vh] overflow-auto">
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full h-full'>
                <img src={mainPic} alt="" className='p-2 object-cover w-full' />
                <div className='grid grid-cols-5 items-center'>
                    {product.subPics.map((Pic, index) => (
                        <img id={index} src={Pic.pic} alt="" className='w-full h-full p-1 object-cover cursor-pointer' onClick={() => setMainPic(Pic.pic)}/>
                    ))}
                </div>
            </div>
            <div className=' h-full flex flex-col justify-center md:ml-5 md:mt-0 mt-5'>
                <h1 className='text-xl md:text-3xl text-pink-400 uppercase font-semibold text-center md:mb-10'>{product.name}</h1>
                <p className='text-lg mt-2 text-green-600 font-medium'>Rs: {product.price}</p>
                <p className='w-[90%] text-gray-600 text-lg'>{product.description}</p>
                <button onClick={handleOrderClick} className='w-[100px] py-2 bg-pink-600 hover:bg-pink-600/90 mt-4 rounded text-white'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Product