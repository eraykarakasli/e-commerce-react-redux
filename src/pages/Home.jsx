import React from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

function Home() {
  return (
    <div>
      <SliderComp/>
      <Sorting/>
      <div className='flex'>
        <Category/>
        <Products/>
      </div>
    </div>
  )
}

export default Home