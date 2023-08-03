import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
function CartComp({cart}) {
    const dispatch = useDispatch()

  return (
    
    <div className='font-bold my-10 flex items-center justify-between'>
        <img src={cart?.image} className='w-[150px] h-[150px] my-5 object-cover' alt={cart?.title} />
        <div className='w-[476px]'>
            <div className='text-2xl '>{cart?.title}</div>
            <div>{cart?.description}</div>
        </div>
        <div className='text-2xl'>{cart?.price} <span className='text-sm '>TL</span> ({cart?.quantity}) </div>
        <div onClick={()=> dispatch(removeFromCart(cart.id))} className='bg-red-500 rounded-full'><FaTrashAlt className='h-[40px] mx-5  cursor-pointer'/> </div>
        
    </div>
  )
}

export default CartComp