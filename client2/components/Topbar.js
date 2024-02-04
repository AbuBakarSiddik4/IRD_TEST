import Image from 'next/image'
import React from 'react'
import Magnifing from '@/public/magnifiging.svg'

export default function Topbar() {
  return (
    <main>
        <div className='flex justify-between mx-5 items-center my-3'>
        <div className='text-lg font-semibold'>Duas Page</div>
        <div className='flex bg-white rounded-md overflow-hidden'>
            <input type='search' placeholder='Search By Dua Name' className='p-2 rounded-md'/>
            <Image src={Magnifing} alt="Search Icon" className='bg-gray-200 m-1 p-2 rounded-md cursor-pointer '/>
        </div>
       
        </div>
    </main>
  )
}
