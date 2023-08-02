import React from 'react'

function Sorting({setSort}) {
    return (
        <div className='bg-gray-100 my-7 p-5 flex items-center justify-end'>
            <select onChange={(e)=> setSort(e.target.value)} className='border-none  px-5 py-3 font-bold bg-gray-200'  name='' id=''>
                <option defaultChecked value="" >Seçiniz...</option>
                <option value="inc" key="">Artan</option>
                <option value="dec" key="">Azalan</option>
            </select>
        </div>
    )
}

export default Sorting