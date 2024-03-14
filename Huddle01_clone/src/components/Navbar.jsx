import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.jpg"
const Navbar = () => {
  

  return (
    <nav className='w-full bg-gray-950 shadow-lg flex items-center justify-between sticky top-0 border-b-[0.075rem] border-gray-100/50'>
        <div className='flex'>
          <div className='ml-28'>
            <img src={logo} alt="logo" className="w-40 h-16" />
          </div>
          <div className='flex space-x-7 ml-3'>
            <button  className='text-white font-bold'>Platform</button>
            <button className='text-white font-bold'>Developers</button>
            <button className='text-white font-bold'>Network</button>
            <button className='text-white font-bold'>Resources</button>
          </div>
        </div>
        <div className='flex mr-28 space-x-3'> 
        <button className='w-[140px] h-[35px] font-bold text-white bg-blue-600 rounded-lg'>Start a Meeting</button>
        <button className='w-[140px] h-[35px] bg-white font-bold rounded-lg'>Start Building</button>
        </div>
    </nav>
  );
};

export default Navbar;