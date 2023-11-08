import React from "react";

const CertificateCard = ({
  title,
  organization,
  date,
  imageUrl,
  isDigital,
}) => {
  return (
    <div className="bg-white p-4 mb-8 shadow-lg rounded-md transition-transform transform hover:scale-105">
      <div className="mb-4">
        {isDigital ? (
          <div className="bg-blue-500 text-white px-2 py-1 rounded-md inline-block mb-2">
            Digital Certificate
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="mb-2 rounded-md object-cover w-full h-40 md:h-60 lg:h-80"
          />
        )}
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{organization}</p>
        <p className="text-gray-700 mb-4">{date}</p>
      </div>
      {/* Add any additional details or links here */}
    </div>
  );
};

export default CertificateCard;
