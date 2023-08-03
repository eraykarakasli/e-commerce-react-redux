import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavbarLeft() {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate("")} className='text-5xl font-bold cursor-pointer'>Shoppers</div>
  )
}

export default NavbarLeft