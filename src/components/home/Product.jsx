import React from 'react'

function Product({product}) {
  return (
    <div className='w-[390px] p-2 mb-2 mx-2 border rounded-md relative cursor-pointer'>
        <div className='text-3xl font-bold absolute rounded-md top-0 right-0 m-1 bg-black p-2 text-white'>{product.price}<span className='text-sm'>TL</span></div>
        <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="image" />
        <div className='font-bold  text-center px-3 m-3 text-xl'>{product?.title}</div>
    </div>
  )
}

export default Product