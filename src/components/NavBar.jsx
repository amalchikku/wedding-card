import React, { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black p-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extralight text-white">J & T</h1>

        {/* Hamburger icon (only visible on mobile) */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-12 px-10 text-white text-lg">
          <li className="hover:text-gray-500 cursor-pointer">Home</li>
          <li className="hover:text-gray-500 cursor-pointer">Our Story</li>
          <li className="hover:text-gray-500 cursor-pointer">Details</li>
          <li className="hover:text-gray-500 cursor-pointer">Location</li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-600 flex flex-col items-center gap-6 py-6 text-white text-lg md:hidden z-50">
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">Our Story</li>
            <li className="hover:text-gray-500 cursor-pointer">Details</li>
            <li className="hover:text-gray-500 cursor-pointer">Location</li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default NavBar;
