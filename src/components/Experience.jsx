import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'M&M Properties',
    duration: 'May 2023 – July 2023',
    description: 'Building scalable web apps with React and Node.js. Led the redesign of client dashboards, worked with NoSQL Databases such as MongoDB for Data integration',
  },
  {
    role: 'Web Developer Intern',
    company: 'Prodigy Infotech',
    duration: ' Dec 2023 – Jan 2024',
    description: 'Worked on UI components using React and Tailwind. Performing various tasks assigned by the organisation such as making Apps, building Games, and Analyzing bugs and correction in the code it was a short Internship but very Useful.',
  },
];

const Experience = () => {
  return (
    <section name="Experience"
        id="experience"  className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          <FaBriefcase className="inline-block w-6 h-6 mr-2 text-blue-600" />
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
              <p className="text-sm text-gray-500">{exp.company}</p>
              <div className="flex items-center text-sm text-gray-400 mt-1">
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                {exp.duration}
              </div>
              <p className="mt-3 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;






 



