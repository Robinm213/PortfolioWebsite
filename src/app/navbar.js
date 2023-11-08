// import React from "react/client";
import Link from "next/link";
import "./globals.css";
const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Developer</div>
        <ul className="flex items-center space-x-4">
          <li className="link">
            <Link
              href="/projects/proj"
              className="text-white hover:text-blue-300"
            >
              Projects
            </Link>
          </li>
          <li className="link">
            <Link
              href="/certificates/CertificationsPage"
              className="text-white hover:text-blue-300"
            >
              Achievements
            </Link>
          </li>
          <li className="link">
            <Link href="#" className="text-white hover:text-blue-300">
              Newsletter
            </Link>
          </li>
          <li className="toggle-btn">
            <button
              onClick={toggleTheme}
              className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-blue-300"
            >
              Toggle Theme
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
