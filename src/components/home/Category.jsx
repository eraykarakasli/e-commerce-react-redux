import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

function Category({ setCategory }) {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories)

  console.log(categories, "cate")

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className=' bg-gray-100 p-4 max-h-screen'>
      <div className='border-b p-2 pb-1 text-xl font-bold'>Kategoriler</div>
      {
        categories?.map((category, i) => (
          <div
          onClick={()=> setCategory(category)}
          className='text-xl mt-2 cursor-pointer 
          hover:bg-gray-200 p-2 rounded-1
           ' key={i}>{category.charAt(0).toUpperCase()+category.slice(1)}</div>
        ))
      }
    </div>
  )
}

export default Category