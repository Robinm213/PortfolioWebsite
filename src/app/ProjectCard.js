import React from "react";

const ProjectCard = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
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
      </div>
    </a>
  );
};

export default ProjectCard;
