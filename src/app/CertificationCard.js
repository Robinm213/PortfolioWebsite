import React, { useState } from "react";
import CertificationsPage from "@/pages/certificates/index";

const CertificateCard = ({
  type,
  title,
  organization,
  date,
  imageUrl,
  isDigital,
  linkUrl,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="mt-6 bg-gray-700 p-4 mb-8 shadow-lg rounded-md transition-transform transform hover:scale-105">
      <div className="mb-4">
        {isDigital ? (
          <div className="bg-blue-500 text-white px-2 py-1 rounded-md inline-block mb-2">
            Digital Certificate
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="mb-2 rounded-md object-cover w-full h-60 md:h-72 lg:h-96 cursor-pointer"
            onClick={handleModalToggle}
          />
        )}
        <h2 className="text-xl text-gray-200 font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-2">{organization}</p>
        <p className="text-gray-400 mb-4">{date}</p>
      </div>

      {linkUrl && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Certificate
        </a>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
          <div className="max-w-3xl w-full p-4 bg-gray-800 rounded-lg">
            <img src={imageUrl} alt={title} className="w-full" />
            <button
              className="absolute top-2 right-2 text-white bg-red-500 px-4 py-2 rounded"
              onClick={handleModalToggle}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
