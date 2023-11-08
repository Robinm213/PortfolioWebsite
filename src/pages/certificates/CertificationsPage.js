import React from "react";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
import CertificationCard from "@/app/CertificationCard";
import "@/app/globals.css";

const certifications = [
  // Add your certification data here
];

const CertificationsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-screen-xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Certifications & Achievements
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              title={certification.title}
              organization={certification.organization}
              date={certification.date}
              imageUrl={certification.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CertificationsPage;
