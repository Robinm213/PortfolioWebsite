import React from "react";
import "./globals.css";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8" id="contact">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-2">I 😍️ feedbacks.</p>
        </div>
        <div className="mb-4">
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              Twitter ↗
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              Dribbble ↗
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <p key={index} className="text-xl mx-1">
                ⭐
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
