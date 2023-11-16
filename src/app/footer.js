import React from "react";
import "./globals.css";
const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-8" id="contact">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="mt-2 text-2xl text-gray-400">Connect With Me!</p>
        </div>
        <div className="mb-4">
          <div className="flex justify-center">
            <div className="flex mb-2 text-gray-400 ">
              <p>Made with 🩷 by</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/robin-mandal-412a86288/"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              LINKEDIN ↗
            </a>
            {/* <a
              href="https://www.hackerrank.com/profile/rm9939"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              HACKERRANK ↗
            </a> */}
            <a
              href="https://github.com/Robinm213"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
