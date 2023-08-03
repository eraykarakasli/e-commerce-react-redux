import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartComp from '../components/cart/CartComp';
import { getCartTotal } from '../redux/cartSlice';

function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)
    console.log(carts, "carts")
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch,])
    return (
        <div>
            {
                carts?.length > 0 ? <div>
                    {
                        carts?.map((cart, i)=>(
                            <CartComp key={i} cart={cart} />
                        ))
                    }
                    <div className=' text-2xl flex items-center justify-end'>Toplam Tutar:<span className='font-bold mx-2 text-3xl'> {totalAmount} TL</span></div>
                    
                </div> :
                <div>
                    Kartınız Boş...
                </div>
            }
        </div>
    )
}

export default Cart