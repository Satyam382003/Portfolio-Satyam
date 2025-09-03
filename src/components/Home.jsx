import React from 'react'

import pic from '../../public/favicon.png'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import { ReactTyped } from "react-typed";
function Home() {
  return (
   <>
   <div name="Home"
      className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
    <div className='flex flex-col md:flex-row'>
         <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
         <span className='text-xl'>Welcome In My Feed</span>
         <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello I'm a </h1>
            {/* <span> Developer</span> */}
             <ReactTyped
             className='text-red-700 font-bold'
          strings={["Developer", "Programmer", "GoodLearner"]}
          typeSpeed={40}
          backSpeed={50}
          loop = {true}
        />
         </div>
         <br/>
         <p className='text-sm md:text-md text-justify'>Hello i'm satyam here, trying to build my portfolio from past months, but for some reason it wasn't ready, finally i got a great chance and i did it!</p>
         <br/>
         {/* Social Media Icons */}
         <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 '>
            <div className='space-y-2'>
            <h1 className='font-bold '>Reach Me</h1>
            <ul className='flex space-x-5'>
                <li>
                    <a href='https://www.instagram.com/sattyam__11/?hl=en' target='_blank'>
                    <FaInstagram  className='text-2xl cursor-pointer'/>
                    </a>
                </li>
                 <li>
                    <a href='https://www.linkedin.com/in/satyam-pandey-0a50ba250/' target='_blank'>
                    <FaLinkedin className='text-2xl cursor-pointer'/>
                    </a>
                </li>
                 <li>
                    <a href='https://x.com/SatyamPand68278' target='_blank'>
                    <FaTwitter className='text-2xl cursor-pointer' />
                    </a>
                </li>
                 <li>
                    <a href='https://github.com/Satyam382003' target='_blank'>
                    <FaGithub className='text-2xl cursor-pointer'/>
                    </a>
                </li>

            </ul> 
         </div>
         <div className='space-y-2'>
            <h1 className='font-bold'>currently working on</h1>
            <div className='flex space-x-5'>
               <SiExpress className='text-xl md:text-2xl hover:scale-110 duration-200'/>
               <FaReact className='text-xl md:text-2xl hover:scale-110 duration-200'/>
               <FaNodeJs className='text-xl md:text-2xl hover:scale-110 duration-200'/>
               <SiMongodb className='text-xl md:text-2xl hover:scale-110 duration-200'/>
            </div>
               
         </div>
         </div>
         </div>
         <div className='md:w-1/2 md:ml-38 md:mt-10 order-1'>
            <img src={pic}
            className='rounded-full md:w-[400px] md:h-[400px] w-[300px] h-[300px] md:ml-35 md:mb-10 ml-22 mt-5' 
            alt=''/>
         </div>
   </div>
   </div>

   <br/>
   </>
  )
}

export default Home
