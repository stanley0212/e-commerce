'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Filter = () => {

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    const handleFilterChange = ( e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        replace(`${pathname}?${params.toString()}`)
    }

  return (
    <div className='mt-12 flex justify-between'>
        <div className='flex gap-6 flex-wrap'>
        <select name='type' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]' onChange={handleFilterChange}>
                <option>Methods</option>
                <option value='physical'>Pick Up</option>
                <option value='digital'>Delivery</option>
            </select>
            <select name='categories' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]' onChange={handleFilterChange}>
                <option>Meats</option>
                <option value='wagyu'>Wagyu</option>
                <option value='pork'>Pork</option>
                <option value='lamb'>Lamb</option>
                <option value='duck'>Duck</option>
                <option value='chicken'>Chicken</option>
            </select>
            <input type='text' name='min' placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' onChange={handleFilterChange}/>
            <input type='text' name='max' placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' onChange={handleFilterChange}/>
            {/* <select name='meats' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]' onChange={handleFilterChange}>
                <option>Meats</option>
                <option value='wagyu'>Wagyu</option>
                <option value='pork'>Pork</option>
                <option value='lamb'>Lamb</option>
                <option value='duck'>Duck</option>
                <option value='chicken'>Chicken</option>
            </select> */}
            <select name='type2' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]' onChange={handleFilterChange}>
                <option>Type</option>
                <option value='sliced'>Sliced</option>
                <option value='roll'>Roll</option>
                <option value='whole'>Whole</option>
            </select>
            <select name='size' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]' onChange={handleFilterChange}>
                <option>Size</option>
                <option value='250g'>250g</option>
                <option value='500g'>500g</option>
                <option value='1kg'>1KG</option>
            </select>
            {/* <select name='type' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Type</option>
                <option value='aw'>Australia wagyu</option>
                <option value='jw'>Japanese wagyu</option>
                <option value='port'>Pork</option>
                <option value='lamb'>Lamb</option>
            </select> */}
            <select name='' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>All Filters</option>
            </select>
        </div>
        {/* <div className=''>
            <select name='sort' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400' onChange={handleFilterChange}>
                <option>Sort By</option>
                <option value='asc price'>Price (low to high)</option>
                <option value='desc price'>Price (high to low)</option>
                <option value='asc lastUpdated'>Newest</option>
                <option value='desc lastUpdated'>Oldest</option>
            </select>
        </div> */}
    </div>
  )
}

export default Filter