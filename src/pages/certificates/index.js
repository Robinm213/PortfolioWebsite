import React from "react";
import Navbar from "@/app/components/navbar/index";
import Footer from "@/app/footer";
import CertificationCard from "@/app/CertificationCard";
import "@/app/globals.css";

const certifications = [
  {
    type: "Participation",
    title: "  APPLICATIONS OF MACHINE LEARNING IN URBAN STUDIES",
    organization: "ISRO",
    date: "JUNE 2023",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1YztHuv-CNxBAcGVFSB3_0GcQpIn8fSZG",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "SRM CODING COMPETITION",
    organization: "Coding Ninjas",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1y_IYL3Mt9nUhOgUVc_lWE8SiURo80pYX",
    linkUrl:
      "https://ninjasfiles.s3.amazonaws.com/certificate_of_event_srm_coding_competition_25fc4ef7bb7e01fa2e03.pdf", // No link available
  },
  {
    type: "Certification",
    title: "MEAKATHON - 5",
    organization: "Tapar Institute of Engineering and Techolonlgy",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1ZHNImiimJOnuJD5N6M-3CrQqDfQ6XN4i",
    linkUrl:
      "https://verification.givemycertificate.com/v/3ca57c9f-df0e-4d1e-8d5b-2fb66ed13754",
  },

  {
    type: "Participation",
    title: "TECH-Q QUIZ CONTEST",
    organization: "CINTEL STUDENT ASSOCIATION",
    date: "August 2023",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1fHibZBj3r1a7zDEkDjWlL8Je24O5kg2D",
    linkUrl:
      "https://drive.google.com/file/d/1Zrc5_aTVWU0QYGHfiH7_LGj1pX8h7NvD/view?usp=drivesdk",
  },
  {
    type: "Participation",
    title: "OODP HACK 2023",
    organization: "SRMIST",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1dQxK7HErNZv_kIUMPAthLql5s0QEUkFI",
    linkUrl: null,
  },
  {
    type: "Achievement",
    title: "ISA SPORTS (CRICKET)",
    organization: "INTERNATIONAL RELATION - SRM",
    date: null,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1YJmeMVXIdZujlM3offsH35EDxWU-9RBa",
    linkUrl: null,
  },
  {
    type: "Participation",
    title: "FUNDAMENTALS OF STUDENT AMBASSADORSHIP",
    organization: "CINTEL STUDENT ASSOCIATION,",
    date: "JULY 2023",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=19MxNQjdjJkd7zjz1puuX7Wn1fn2iyGWm",
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
