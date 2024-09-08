// 'use client'
// //import React,{useState}from 'react'
// import React, { useState } from 'react'
// import Contactform from './Contactform'
// import SocialLinks from './SocialLinks'
//  const Contact =()=> {
//   return (
//     <section id='contact' className='h-screen bg-cyan-200  '>
//       <div className='text-[3rem] text-cyan-500 text-center font-bold md:pt-[4rem] pb-[5rem]'>
//         CONTACT
//         <div>
//         <div className="min-h-screen bg-gray-100 py-16">
// //       <h1 className="text-4xl text-center font-bold mb-8">Get in Touch</h1>

// //       {/* Contact Form */}
// //       <Contactform />
// //       {/* Social Links */}
// //       <SocialLinks />

// //       {/* Email and Phone */}
// //       <div className="text-center mt-8">
// //         <p className="text-gray-700">Or reach me via email at:</p>
// //         <a href="mailto:khalidlaiba524@gmail.com" className="text-blue-500 hover:underline">
// //         khalidlaiba524@gmail.com
// //         </a>

// //         <div className="mt-4">
// //           <p className="text-gray-700">Phone:</p>
// //           <a href="tel:+923558901911" className="text-blue-500 hover:underline">
// //             +923558901911
// //           </a>
// //         </div>
// //       </div>
// //     </div>
//         </div>
//       </div>
//     </section>
//   )
// }
//  export default Contact

"use client"
import React from 'react'
import SocialLinks from './SocialLinks';
import Contactform from './Contactform';

const Contact =() => {
  return (
    <section id='contact' className="min-h-screen bg-gradient-to-br from-cyan-300 py-16 ">
      <h1 className="text-4xl text-center font-bold mb-8">Get in Touch</h1>

      {/* Contact Form */}
      <Contactform />
      {/* Social Links */}
      <SocialLinks />

      {/* Email and Phone */}
      <div className="text-center mt-8">
        <p className="text-gray-700">Or reach me via email at:</p>
        <a href="mailto:khalidlaiba524@gmail.com" className="text-blue-500 hover:underline">
        khalidlaiba524@gmail.com
        </a>

        <div className="mt-4">
          <p className="text-gray-700">Phone:</p>
          <a href="tel:+923558901911" className="text-blue-500 hover:underline">
            +923558901911
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact
