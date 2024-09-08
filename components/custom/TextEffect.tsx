'use client'
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-end Developer',
        1000,
        'Programmer',
        1000,
        
      ]}
      
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#0d1310] font-bold uppercase'
      repeat={Infinity}
    />
  );
};
export default TextEffect;