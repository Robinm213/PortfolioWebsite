import React from "react";
import Navbar from "@/app/components/navbar/index";
import Footer from "@/app/footer";
import "@/app/globals.css";

const About = () => {
  return (
    <div className="relative bg-blue-900 p-4">
      <Navbar className="py-2" />

      <div className="mx-auto max-w-screen-lg p-4">
        <h1 className="text-4xl font-bold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Hello, I'm Sujal.
        </h1>

        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          I'm passionate about cybersecurity and currently studying at SRM
          University in Chennai. My expertise lies in securing digital
          landscapes, and I'm dedicated to enhancing online security. Beyond
          coding, I'm an avid explorer of the cyber realm, constantly learning
          and adapting to new challenges in the ever-evolving world of
          cybersecurity.
        </p>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-2xl font-bold mb-4">
            Extra Curricular Activities and Co Curricular Activities
          </h2>
          <ul className="list-disc pl-4">
            <li>Cybersecurity Club Member</li>
            <li>Participant in Capture The Flag (CTF) Competitions</li>
            <li>Organizer - Cyber Awareness Workshops</li>
          </ul>
        </div>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-2xl font-bold mb-4">Sem Wise GPA</h2>
          <p className="text-lg">
            Semester 1 GPA: 7.5
            <br />
            Semester 2 GPA: 8.9
          </p>
        </div>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-5s">
          <h2 className="text-2xl font-bold mb-4">
            Cybersecurity Competitions and Events
          </h2>
          <ul className="list-disc pl-4">
            <li>DEFCON CTF Qualifier</li>
            <li>HackTheBox Challenges</li>
            <li>SecureCITI Cybersecurity Symposium</li>
            <li>National Cyber League (NCL)</li>
          </ul>
        </div>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-6s">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-4">
            <li>Penetration Testing ★★★★★</li>
            <li>Incident Response ★★★★☆</li>
            <li>Python for Cybersecurity ★★★★☆</li>
            <li>Network Security ★★★★☆</li>
          </ul>
        </div>
      </div>

      <Footer className="py-2" />
    </div>
  );
};

export default About;
