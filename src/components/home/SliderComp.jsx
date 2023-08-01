import React from 'react'
import Slider from "react-slick";

function SliderComp() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className='!flex items-center px-6 bg-[#f6f6f6]'>
                <div>
                    <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                    <div className='text-lg my-4 '>Quasi, beatae dolor? Necessitatibus hic animi atque quod repellendus eaque non sit? Reiciendis eius, itaque suscipit facilis vel repudiandae reprehenderit doloribus necessitatibus.</div>
                    <div className='border rounded-full cursor-pointer text-2xl h-16 w-[200px] flex items-center justify-center bg-gray-200'>İncele...</div>
                </div>
                <img className='h-[750px]' src="https://akn-fashfed.a-cdn.akinoncloud.com/products/2022/11/02/32591364/c60442ce-d1b0-4254-893b-56f141374bdf_size2000_quality100_cropCenter.jpg" alt="ayakkabı1" />
            </div>
            <div className='!flex items-center px-6 bg-[#f6f6f6]'>
                <div>
                    <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                    <div className='text-lg my-4 '>Quasi, beatae dolor? Necessitatibus hic animi atque quod repellendus eaque non sit? Reiciendis eius, itaque suscipit facilis vel repudiandae reprehenderit doloribus necessitatibus.</div>
                    <div className='border rounded-full cursor-pointer text-2xl h-16 w-[200px] flex items-center justify-center bg-gray-200'>İncele...</div>
                </div>
                <img className='h-[750px]' src="https://akn-fashfed.a-cdn.akinoncloud.com/products/2022/04/05/25348224/9ccf8d9a-b90b-40e9-ae0b-8c24939c2bf5_size2000_quality100_cropCenter.jpg" alt="ayakkabı2" />

            </div>
        </Slider>

    )
}

export default SliderComp