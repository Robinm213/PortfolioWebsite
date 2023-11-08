import React from "react";

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white p-4 mb-8 shadow-lg rounded-md">
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 rounded-md object-cover w-full h-40 md:h-60 lg:h-80"
      />
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      {/* Add any additional details or links here */}
    </div>
  );
};

export default ProjectCard;
