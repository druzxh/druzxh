import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import LogoImage from '../assets/logo.png'


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="border-b p-4 flex justify-between items-center">
      <div className="ml-16 text-lg font-bold">
        <img src={LogoImage} alt="Logo" className="h-10" />
      </div>
      <div className="flex mr-16 items-center space-x-16">
        <NavLink to="/" className="hover:text-gray-500">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-gray-500">
          About
        </NavLink>
        <NavLink to="/project" className="hover:text-gray-500">
          Project
        </NavLink>
        <button
          className="flex items-center focus:outline-none w-10 h-10"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FiSun className="hover:text-gray-500" size={20} />
          ) : (
            <FiMoon className="hover:text-gray-500" size={20} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
