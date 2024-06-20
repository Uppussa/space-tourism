import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 bg-gray-600 py-4 px-24 bg-opacity-40">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF"/>
              <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
            </g>
          </svg>
        </div>

       
        <ul className="flex justify-center items-center space-x-10 text-white ml-auto">
          <li className="">
            <Link to='/home' className="pb-7 border-b-2 border-transparent hover:border-white focus:border-white">00 HOME</Link>
          </li>
          <li>
            <Link to='/destination' className="pb-7 border-b-2 border-transparent hover:border-white focus:border-white">01 DESTINATION</Link>
          </li>
          <li>
            <Link to='/crew'className="pb-7 border-b-2 border-transparent hover:border-white focus:border-white">02 CREW</Link>
          </li>
          <li>
            <Link to='/technology'className="pb-7 border-b-2 border-transparent hover:border-white focus:border-white">03 TECHNOLOGY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

<ul className="flex justify-center items-center space-x-10 text-white ml-auto">
          <li className="">
            <Link to='/home' className="pb-4 border-b-2 border-transparent hover:border-white focus:border-white">00 HOME</Link>
          </li>
          <li>
            <Link to='/destination' className="pb-4 border-b-2 border-transparent hover:border-white focus:border-white">01 DESTINATION</Link>
          </li>
          <li>
            <Link to='/crew'className="pb-4 border-b-2 border-transparent hover:border-white focus:border-white">02 CREW</Link>
          </li>
          <li>
            <Link to='/technology'className="pb-4 border-b-2 border-transparent hover:border-white focus:border-white">03 TECHNOLOGY</Link>
          </li>
        </ul>