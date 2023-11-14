import React from "react";
import Navbar from "@/app/components/navbar/index";
import Footer from "@/app/footer";
import CertificationCard from "@/app/CertificationCard";
import "@/app/globals.css";

const certifications = [
  {
    type: "Participation",
    title: "APPLICATION OF MACHINE LEARNING IN URBAN STUDIES",
    organization: "ISRO",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1IzLLMaLZX-vo6OwmbAlRwe1gxvSypfbl",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "INTRO TO C++",
    organization: "SIMPLELEARN",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Iz6PgsgV_rLCYktsN9wLKQo87Raikh27",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "PROGRAMMING FOR PROBLEM SOLVING",
    organization: "CODETANTRA",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1J0PLwzJzRPBWJB5MiHmmkECYCzw9XbGc",
    linkUrl: null,
  },
  {
    type: "certification",
    title: "OODP HACK",
    organization: "SRMIST",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1J6L4qE9Fls8uiI3AE5Cx4WvhYlDOxBgO",
    linkUrl: null,
  },
  {
    type: "Certification",
    title: "BACKEND WEBDEV BOOTCAMP",
    organization: "DEVTOWN",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1J6YGoOW_yygKw0YSVtMIYrmXdT_M2wzf",
    linkUrl: null,
  },

  {
    type: "certification",
    title: "APPRECIATION",
    organization: "DEVTOWN",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1J4UD2Os5mMIokR-ZEGLY_9_6NXwWpxJ3",
    linkUrl: null,
  },
];

const CertificationsPage = () => {
  return (
    <div className="bg-sky-950">
      <Navbar />
      <div className="  container mx-auto max-w-screen-xl py-12 px-4">
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
