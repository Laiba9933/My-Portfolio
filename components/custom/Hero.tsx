import React from 'react'
import TextEffect from './TextEffect'
import Image from 'next/image'
import images from "@/app/assets/logo.jpeg"
import { ArrowDownIcon } from 'lucide-react'
export default function Hero() {
  return (
    <>
     <section id='hero' className=' h-[88vh] bg-gradient-to-r from-cyan-300 rounded-lg  min-h-screen bg-center'>
      <div className='w-[88%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
       <div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
          HI, I'M <span className='text-cyan-500'>LAIBA KHALID</span>
        </h1>
        <TextEffect/>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className='mt-[2rem] text-[18px] font-semibold text-[#18171792]'>
        Welcome to my portfolio! I&apos;m a front-end developer in the making, currently pursuing 
        my studies in university. I&apos;m skilled in TypeScript, Tailwind CSS, Next.js, and Node.js, 
        and I love building visually appealing and responsive web applications.
          </p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button className='px-[2rem] hover:bg-slate-200 transition-all duration-200 py-[1rem]
            font-bold uppercase bg-blue-500 text-black flex items-center space-x-2'>
              <p> Download CV</p>
                <ArrowDownIcon/>
              
            </button>
          </div>
        </div>
        <div className='w-[400px]  hidden bg-[#37738a] relative lg:flex  items-center rounded-full h-[500px]'>
      <Image src={images}
     alt='user' layout='fill'
     className='object-cover rounded-full' />
        </div>
      </div>
     </section>
     
     </>
  )
}
