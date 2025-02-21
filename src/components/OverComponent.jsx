import React from 'react';
import { myImage } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const OverComponent = ({ name }) => {
  if (name === "navbar") {
    return (
      <div className="bg-gray-800 text-white" style={{ position: "absolute", top: "0px", width: "100%", zIndex: 1 }}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">MyWebsite</Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="navbar-home" className={(isActive) => (isActive ? "get" : null)}>Home</NavLink>
            <NavLink to="navbar-about" className={(isActive) => (isActive ? "get" : null)}>About</NavLink>
            <NavLink to="navbar-services" className={(isActive) => (isActive ? "get" : null)}>Services</NavLink>
            <NavLink to="navbar-contact" className={(isActive) => (isActive ? "get" : null)}>Contact</NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
            <i className="fas fa-bars w-6 h-6"></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden bg-gray-700">
          <ul className="space-y-2 py-4">
            <li><NavLink to="navbar-home" className="block px-4 py-2 hover:bg-gray-600">Home</NavLink></li>
            <li><NavLink to="navbar-about" className="block px-4 py-2 hover:bg-gray-600">About</NavLink></li>
            <li><NavLink to="navbar-services" className="block px-4 py-2 hover:bg-gray-600">Services</NavLink></li>
            <li><NavLink to="navbar-contact" className="block px-4 py-2 hover:bg-gray-600">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    );
  } else if (name === "mainbody") {
    return (
      <div style={{ position: "absolute", top: "83px", height: "435px", backgroundColor: "darkblue", color: "white" }} className='overstyle'>
        <h1>{name}</h1>
      </div>
    );
  }

  return (
    <div style={{ position: "absolute", top: "520px", height: "63px", backgroundColor: "darkblue", color: "white" }} className='overstyle'>
      <h1>{name}</h1>
    </div>
  );
};

export default OverComponent;
