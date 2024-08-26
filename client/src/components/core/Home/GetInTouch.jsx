import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function GetInTouch() {
  return (
    <div className='bg-get flex items-center justify-center'>
      <div className='flex justify-between w-full max-w-6xl p-8'>
        {/* Left Column: Company Name and Social Media Links */}
        <div className='w-1/2 pr-8'>
          <h2 className='text-gray-800 text-3xl font-bold mb-4 flex items-center space-x-4'>
            <span>Get in Touch</span>
          
          </h2>
          <div className='text-gray-800 text-lg mt-4'>
            <p className='mb-2'>Follow us on:</p>
            <ul className='flex space-x-4 ml-4'>
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

        {/* Right Column: Address */}
        <div className='w-1/2 pl-8'>
          <h2 className='text-gray-800 text-3xl font-bold mb-4'>Contact Us</h2>
          <p className='text-gray-800 text-lg mb-2'>123 Example Street</p>
          <p className='text-gray-800 text-lg mb-2'>Bhopal, MP, India</p>
          <p className='text-gray-800 text-lg'>Phone: +91-123-456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
