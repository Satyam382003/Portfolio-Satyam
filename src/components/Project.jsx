import React, { useState } from 'react'
import call from '../../public/call management system.webp'
import Employee from '../../public/Employee management system.webp'
import payment from '../../public/payment_gateway.avif'
import games from '../../public/games.avif'
import weather from '../../public/imd-weather-forecast.jpg';
import noteApp from '../../public/noteapp.avif'

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showType, setShowType] = useState(null); // "text" or "source"

  const cardItem = [
    {
      id: 1,
      logo: call,
      name: "calls Management System",
      text: "This is a system to manage customer calls, logs, and support tickets efficiently.",
      sourceCode: "https://github.com/Satyam382003/Calls-Management-System"
    },
    {
      id: 2,
      logo: Employee,
      name: "Employee Management System",
      text: "A complete solution to manage employee details, payroll, and attendance.",
      sourceCode: "https://github.com/Satyam382003/Employee-Management-System"
    },
    {
      id: 3,
      logo: payment,
      name: "payment Gateway",
      text: "A payment gateway integration with Stripe, PayPal, and Razorpay.",
      sourceCode: "https://github.com/Satyam382003/Payment-Gateway"
    },
    {
      id: 4,
      logo: games,
      name: "Matrix Game",
      text: "A simple React-based Matrix game for fun and learning.",
      sourceCode: "https://github.com/Satyam382003/3x3-Matrix-Project"
    },
    {
      id: 5,
      logo: weather,
      name: "weather forecast",
      text: "A weather forecasting app using OpenWeather API.",
      sourceCode: "https://github.com/Satyam382003/weather-app"
    },
    {
      id: 6,
      logo: noteApp,
      name: "Note App",
      text: "A note-taking app with CRUD functionality using React & Node.js.",
      sourceCode: "https://github.com/Satyam382003/Note-App-Application"
    }
  ]

  return (
    <div name="Project" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div className='text-3xl font-bold mb-5 text-center'>
        <h1>Projects</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-5 mx-5'>
        {cardItem.map(({ id, logo, name, text, sourceCode }) => (
          <div key={id} className='md:w-[380px] md:h-[400px] rounded-lg shadow-lg p-1 cursor-pointer border-[1px] border-white hover:scale-105 duration-200'>
            <img src={logo} className='w-[470px] h-[250px] p-1 border-[1px] border-white text-center' alt='' />
            <div>
              <div className='font-bold text-lg mb-2 text-center'>{name}</div>
            </div>

            <div className='px-12 py-2 space-x-3 justify-around text-center'>
              <button
                className='bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded'
                onClick={() => { setSelectedProject(id); setShowType("text"); }}
              >
                Text
              </button>
              <button
                className='bg-green-700 hover:bg-green-500 text-white font-bold px-4 py-2 rounded'
                onClick={() => { setSelectedProject(id); setShowType("source"); }}
              >
                Source Code
              </button>
            </div>

            {selectedProject === id && showType === "text" && (
              <p className='text-gray-700 px-3 mt-2 text-sm'>{text}</p>
            )}
            {selectedProject === id && showType === "source" && (
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-600 underline block mt-2 px-3'
              >
                View Source Code
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project;
