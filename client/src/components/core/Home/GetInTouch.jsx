import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const companies = [
  { name: "New RK Construction", path: "/construction-home" },
  { name: "RKS Homes", path: "/rks-homes" },
  { name: "SRS Foods", path: "/srs-foods" },
  { name: "Ri Si Home Food", path: "/ri-si-home-food" },
  { name: "72 GDR Steel", path: "/72-gdr-steel" }
];

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    company: companies[0].name,
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='bg-gray-100 flex items-center justify-center py-8'>
      <div className='flex flex-col lg:flex-row justify-between w-full max-w-6xl p-6 bg-white shadow-lg rounded'>
        {/* Left Column: Company Name and Social Media Links */}
        <div className='lg:w-1/2 lg:pr-8 mb-8 lg:mb-0'>
          <h2 className='text-gray-800 text-3xl font-bold mb-4'>
            Get in Touch
          </h2>
          <div className='text-gray-800 text-lg'>
            <p className='mb-2'>Follow us on:</p>
            <ul className='flex space-x-4'>
              <li>
                <a 
                  href='https://facebook.com' 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-blue-600 hover:text-blue-800 transition-colors duration-300'
                >
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li>
                <a 
                  href='https://twitter.com' 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-blue-400 hover:text-blue-600 transition-colors duration-300'
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a 
                  href='https://instagram.com' 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-pink-500 hover:text-pink-700 transition-colors duration-300'
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a 
                  href='https://linkedin.com' 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-blue-700 hover:text-blue-900 transition-colors duration-300'
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Address and Contact Form */}
        <div className='lg:w-1/2 lg:pl-8'>
          <h2 className='text-gray-800 text-3xl font-bold mb-4'>Contact Us</h2>
          <div className='text-gray-800 text-lg mb-6'>
            <p className='mb-2'>123 Example Street</p>
            <p className='mb-2'>Bhopal, MP, India</p>
            <p className='mb-2'>Phone: +91-123-456-7890</p>
            <p>Email: example@example.com</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-gray-800 text-lg mb-2'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-gray-800 text-lg mb-2'>Email:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div>
              <label htmlFor='phone' className='block text-gray-800 text-lg mb-2'>Phone Number:</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded'
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-gray-800 text-lg mb-2'>Message:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded'
                rows='4'
                required
              />
            </div>
            <div>
              <label htmlFor='company' className='block text-gray-800 text-lg mb-2'>Company:</label>
              <select
                id='company'
                name='company'
                value={formData.company}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded'
              >
                {companies.map((company) => (
                  <option key={company.name} value={company.name}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>
            <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
