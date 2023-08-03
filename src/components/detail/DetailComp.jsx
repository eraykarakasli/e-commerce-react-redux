import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

function DetailComp({ productDetail }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const addBasket = () => {
        dispatch(addToCart({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity }))
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    const increment = () => {
        if (quantity < productDetail?.rating.count) {
            setQuantity(quantity + 1)
        }
    }

    return (
        <div className='flex gap-10 my-10'>
            <img className='h-[400px] object-cover ' src={productDetail?.image} alt="" />
            <div className=''>
                <div className='text-5xl font-bold'>
                    {productDetail?.title}
                </div>
                <div className='my-4'>
                    {productDetail?.description}
                </div>
                <div className='my-2 text-xl text-red-600 font-bold'>
                    Rating: {productDetail?.rating?.rate}
                </div>
                <div className='my-2 text-lg text-red-600 font-bold' >
                    Count:  {productDetail?.rating?.count}
                </div>
                <div className='text-5xl font-bold'>
                    {productDetail?.price} <span className='text-sm'>TL</span>
                </div>
                <div className='flex items-center justify-start my-4 gap-5'>
                    <div
                        onClick={decrement}
                        className='text-5xl cursor-pointer'>-</div>
                    <input className='w-[60px] font-bold text-3xl text-center' type="text" value={quantity} />
                    <div
                        onClick={increment}
                        className='text-4xl cursor-pointer '>+</div>
                </div>
                <div onClick={addBasket} className='rounded-full bg-gray-200 hover:bg-gray-500 hover:text-white text-2xl border w-[250px] h-16 flex items-center cursor-pointer justify-center'>Sepete Ekle</div>
            </div>

        </div>
    )
}

export default DetailComp