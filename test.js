import React, { useState } from 'react';

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using weather API',
      image: '/api/placeholder/400/300',
      tags: ['React', 'API Integration', 'CSS']
    },
    {
      title: 'Task Manager',
      description: 'A productive task management application',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Redux', 'Firebase']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">John Doe</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setActiveSection('home')}
                className={`px-3 py-2 rounded-md ${activeSection === 'home' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveSection('projects')}
                className={`px-3 py-2 rounded-md ${activeSection === 'projects' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`px-3 py-2 rounded-md ${activeSection === 'contact' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frontend Developer & UI Designer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Crafting beautiful and functional web experiences
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
                View Projects
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50">
                Contact Me
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'UI Design', 'Responsive Design', 'Git', 'API Integration'].map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioWebsite;
