import React from 'react'
import Image  from 'next/image'
import image from "@/app/assets/image3.jpeg"

const About = () => {
  return (
    <section id ='about' className='bg-gradient-to-tr from-cyan-200 rounded-lg  min-h-screen   pb-[3rem] relative  pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-col-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
            <h1 className='text-[23px] font-bold underline uppercase  text-cyan-600 mb-[1rem]'>
              ABOUT ME
             </h1>
             {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className=' flex  mb-[2rem] flex-center justify-center text-justify font-semibold text-[19px]'>
            Hi, I&apos;m Laiba, a university student currently in my 2nd semester, with a growing passion 
            for front-end development. Even though I&apos;m early in my academic journey, I&apos;ve already 
            gained hands-on experience and skills in key technologies like TypeScript, Tailwind CSS,
             Next.js, and Node.js.
             I&apos;m dedicated to honing my craft by continuously learning and applying modern development practices.
             My focus is on creating clean, responsive, and user-friendly interfaces that provide seamless user experiences.
            Feel free to reach out if you&apos;re interested in connecting or working on something together. 
            I&apos;m always eager to explore new opportunities and expand my horizons in the tech world.
            </p> 
        </div>
        <div
           className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px]  w-[400px] h-[400px] relative'>
      <Image src={image}
     alt='user' layout='fill'
     objectFit='contain'
     className=''
      />
      </div>
      </div>
    </section>
  )
}

export default About
