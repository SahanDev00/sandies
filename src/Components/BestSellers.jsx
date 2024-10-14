import React from 'react'

const BestSellers = () => {

    const bestSellers = [
        {
            id: 1,
            name: 'Cake 1',
            price: '1000',
            pic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg',
            colour: 'pink',
            description: 'lorem dfsbfkashIFhsi fiahdsif as fifia fsaigfsia fa gdsfaihg fiahfsiha iafsiahif haifsihaihfsiha fa fiisahfihfabnfsij iwfiabfisaa fsigfsaibf isabfj abfsaiu fsb asbbabfsb',
            subPics: [
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
            ]
        },
        {
            id: 2,
            name: 'Cake 1',
            price: '1000',
            pic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg',
            colour: 'blue',
            description: 'lorem dfsbfkashIFhsi fiahdsif as fifia fsaigfsia fa gdsfaihg fiahfsiha iafsiahif haifsihaihfsiha fa fiisahfihfabnfsij iwfiabfisaa fsigfsaibf isabfj abfsaiu fsb asbbabfsb',
            subPics: [
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
            ]

        },
        {
            id: 3,
            name: 'Cake 1',
            price: '1000',
            pic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg',
            colour: 'pink',
            description: 'lorem dfsbfkashIFhsi fiahdsif as fifia fsaigfsia fa gdsfaihg fiahfsiha iafsiahif haifsihaihfsiha fa fiisahfihfabnfsij iwfiabfisaa fsigfsaibf isabfj abfsaiu fsb asbbabfsb',
            subPics: [
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
            ]

        },
        {
            id: 4,
            name: 'Cake 1',
            price: '1000',
            pic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg',
            colour: 'blue',
            description: 'lorem dfsbfkashIFhsi fiahdsif as fifia fsaigfsia fa gdsfaihg fiahfsiha iafsiahif haifsihaihfsiha fa fiisahfihfabnfsij iwfiabfisaa fsigfsaibf isabfj abfsaiu fsb asbbabfsb',
            subPics: [
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
            ]

        },
        {
            id: 5,
            name: 'Cake 1',
            price: '1000',
            pic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg',
            colour: 'pink',
            description: 'lorem dfsbfkashIFhsi fiahdsif as fifia fsaigfsia fa gdsfaihg fiahfsiha iafsiahif haifsihaihfsiha fa fiisahfihfabnfsij iwfiabfisaa fsigfsaibf isabfj abfsaiu fsb asbbabfsb',
            subPics: [
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
                {
                    subPic: 'https://c4.wallpaperflare.com/wallpaper/90/758/472/cake-gift-recognition-wallpaper-preview.jpg'
                },
            ]
        },
    ]

  return (
    <div className='w-full my-5'>
        <h1 className='text-5xl uppercase text-center my-5 font-semibold text-pink-400'>Best Sellers</h1>
            <div className='w-[98%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 rounded-md gap-4'>
                {bestSellers.map((bestSeller, index) => (
                    <div key={index} className='w-full h-[300px] sm:h-[350px] xl:h-[450px] rounded-md hover:shadow-lg hover:-translate-y-2 duration-300 cursor-default'>
                        <img src={bestSeller.pic} className='h-[85%] object-cover rounded-t-md' alt="" />
                        <div className={`w-full h-[15%] rounded-b-md flex flex-col justify-center items-center ${bestSeller.colour === 'pink' ? 'bg-pink-100' : 'bg-blue-100'}`}>
                            <h1 className='text-lg uppercase'>{bestSeller.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default BestSellers