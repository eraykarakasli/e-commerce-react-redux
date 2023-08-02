import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

function Home() {
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('')


  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className='flex'>
        <Category setCategory={setCategory}/>
        <Products category={category} />
      </div>
    </div>
  )
}

export default Home