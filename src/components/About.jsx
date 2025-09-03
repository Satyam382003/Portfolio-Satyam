import React from 'react'
import image from '../../public/verticalimg.jpg'

function About() {
  return (

     <section name="About" 
     id="about" className="py-16 px-4 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Satyam"
            className="rounded-lg w-75 h-95 object-cover mx-auto md:ml-40 ml-22 position-relative box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6) mix-blend-mode: luminosity transition: 0.3s cursor: pointer"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
            <i className="bx bx-user text-blue-600 text-4xl"></i>
            About<span className="text-blue-600 ml-1">Me</span>
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700">I'm Satyam</h3>
          <h4 className="text-xl font-medium text-gray-600">
            Full Stack Developer
          </h4>
          <p className="text-gray-700">
            I am a Full Stack Developer with 2 years of experience, having a
            strong ability to build both the front and back ends of web
            applications. I create user-friendly interfaces using modern tools
            like React and manage server-side logic with technologies like
            Node.js. I work with databases such as MongoDB and MySQL to store
            and retrieve data efficiently. With my problem-solving skills, I
            ensure smooth and reliable applications from start to finish.
          </p>

          <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <p className="text-gray-800">
              <span className="font-semibold">Email:</span>{" "}
              satyampandey382003@gmail.com
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Place:</span> Mumbai, India -
              401209
            </p>
          </div>

          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/11YMnFKEV4riJj10n6oFYpi0kJ6awWhWD/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex md:items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition ml-40"
            >
              <span>Resume</span>
              <i className="bx bx-chevron-right ml-2 text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
        
    
  );
}

export default About;
