import { CodeBracketSquareIcon } from '@heroicons/react/16/solid'
import { CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Skill() {
  return (
    <section id="skill" className='bg-gradient-to-r from-cyan-300 pt-[4rem] md:pt-[8rem] pb-[5rem] h-screen'>
      <p className='heading'>
       MY <span className='text-cyan-500'>Services</span>
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem]
       mt-[4rem] text-white'>
        <div>
          <div className='bg-red-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
          uppercase font-semibold text-centern p-[2rem]'>
            <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#f1f3f2]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] text-center'>
            Frontend
            </h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className='text-[15px] text-white font-normal'> 
            I design responsive, modern websites using Next.js, Tailwind CSS, and ShadCN UI components.
            My focus is on creating fast, scalable, and user-friendly web applications with clean, optimized
            code. I’m always eager to learn and adapt to new technologies.
            </p>
          </div>
        </div>
        <div>
        <div className='bg-orange-300 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
          uppercase font-semibold text-center p-[2rem]'>
          <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#f1f3f2]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
            Coder
            </h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className='text-[15px] text-white font-normal'> 
            I'm a dedicated coder with expertise in both TypeScript and C++. From building scalable 
            web applications using TypeScript to tackling complex problem-solving with C++, I strive to write 
            clean, efficient code that ensures performance and reliability.
            </p>
          </div>
        </div>
        <div>
        {/* <div className='bg-pink-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
          uppercase font-semibold text-center p-[2rem]'>
            <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#f1f3f2]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
            Developer
            </h1>
            <p className='text-[15px] text-white font-normal'> 
            As a versatile developer, I specialize in TypeScript and C++. I enjoy creating dynamic and 
            efficient web applications with TypeScript, while leveraging C++ for solving complex algorithms
            and building high-performance solutions. 
           </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Skill
