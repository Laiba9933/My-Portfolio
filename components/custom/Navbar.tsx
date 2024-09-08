import Menu from './Menu';
import React from 'react'

export default function Navbar() {
  return (
    <div className=' flex item-center justify-center  bg-white min-h-[64px]'>
        <div className='grid grid-cols-[10%,60%,20%] items-center  w-4/5 h-full'>

        
      <div className='font-extrabold text-lg text-cyan-500'>PORTFOLIO</div>
      
      <div></div>
      
      <div> <Menu/></div>
    </div>
    </div>
  )
}

