import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-blue-900 text-white p-8 text-center flex flex-col items-center justify-center min-h-screen animate-fade-in"
    >
      <div className="img-container mb-6">
        <img
          className="w-32 mx-auto rounded-full"
          src="/profile-pic.png"
          alt="profile-pic"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">I craft interfaces</h1>
      <p className="mb-6">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <p>
        <a href="#projects" className="text-blue-300 underline">
          Take me to the magic land ↗
        </a>
      </p>
    </div>
  );
};

export default Hero;
