import React from 'react'
import {
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaGithub,
} from "react-icons/fa"

function Footer() {
  return (
    <>
    {/* <hr/> */}
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaInstagram size={24}/>
                    <FaTwitter size={24}/>
                    <FaLinkedin size={24}/>
                    <FaGithub size={24}/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-6 flex flex-col items-center'>
                      <p className='text-sm'>&copy; 2025 Your Company. All rights reserved</p>
                       <p className='text-sm'>Supportive Partner Satyam </p>
                </div>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer
