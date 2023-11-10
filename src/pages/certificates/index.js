import React from "react";
import Navbar from "@/app/components/navbar/index";
import Footer from "@/app/footer";
import CertificationCard from "@/app/CertificationCard";
import "@/app/globals.css";

const certifications = [
  {
    type: "Participation",
    title: "FUNDAMENTALS OF SOC",
    organization: "PALOALTO",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1rPfAwUmaxt213SrWCSgaGrHTedUh7PiR",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "FUNDAMENTALS OF SOC",
    organization: "PALOALTO",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1kJrgAVbA82I6efI3x9EcrCTIeSRPPeO6",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "FUNDAMENTALS OF NEWTORK",
    organization: "PALOALTO",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1SAOy-RJ6ikE-zlAO9DqWVT2d7KcX59y9",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "FUNDAMENTALS OF CLOUD SECURITY",
    organization: "PALOALTO",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1X4C35uNb_toso1zEZ1QzbIkynQOKx4Nf",
    linkUrl: null,
  },
  {
    type: "Certification",
    title: "MEAKATHON - 5",
    organization: "Tapar Institute of Engineering and Techolonlgy",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1kEc8uoUFtNdPhHssK8iU1l9ZzvH7tSNU",
    linkUrl: null,
  },

  {
    type: "Participation",
    title: "TECH-Q QUIZ CONTEST",
    organization: "CINTEL STUDENT ASSOCIATION",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1JSTzO21JOPMhscsOYRwmxYqzKBPxMsaj",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "Virtual Internship",
    organization: "PALOALTO",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=12iCAcXsppnYkUyHW_dAQYOYJtCVNOh4u",
    linkUrl: null,
  },
  {
    type: "Achievement",
    title: "OODP in JAVA",
    organization: "SCALER TOPIC",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1CkOAM471OYiWGKFG_7lBYDKpV-7hXyQ3",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "Cyber Security and Ethical Hacking Workshop",
    organization: null,
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1bKT6tYgxGpb1dKXGlPWiside1eYMg4Lh",
    linkUrl: null,
  },

  {
    type: "Participation",
    title: "STAY SAFE ONLINE CAMPAIGN",
    organization: null,
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Z-NmUMPDnulC7kclPABGuV3sM63dIaZm",
    linkUrl: null,
  },
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
