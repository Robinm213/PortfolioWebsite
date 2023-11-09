// components/navbar/index.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg cursor-pointer">
          <Link href="/">Satyam</Link>
        </div>

        {/* Toggle button for mobile */}
        <div className="block lg:hidden">
          <a onClick={toggleMenu} className="text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </a>
        </div>

        {/* Menu items */}
        <ul
          id="menu"
          className="hidden lg:flex items-center space-x-4 lg:flex-grow lg:space-x-8"
        >
          <li className="link">
            <Link href="/projects/proj">Projects</Link>
          </li>
          <li className="link">
            <Link href="/certificates/CertificationsPage">Achievements</Link>
          </li>
          <li className="link">
            <a href="#" className="text-white hover:text-blue-300">
              About Me
            </a>
          </li>
          <li className="toggle-btn">
            <button className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-blue-300">
              Toggle Theme
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
