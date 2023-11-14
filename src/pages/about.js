import React from "react";
import Navbar from "@/app/components/navbar/index";
import Footer from "@/app/footer";
import "@/app/globals.css";

const About = () => {
  return (
    <div className="relative bg-sky-600 p-4">
      <Navbar className="py-2" />

      <div className="mx-auto max-w-screen-lg p-4">
        <h1 className="text-4xl font-bold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Hello, I'm Robin.
        </h1>

        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Within the realm of Computer Science Engineering, I'm deeply immersed
          in exploring the wonders of AIML at SRM University. While my focus
          doesn't lie in cybersecurity, I greatly appreciate its significance in
          our digital landscape. My passion revolves around harnessing the
          potential of AI and machine learning to innovate and solve complex
          problems. If you share a similar zeal for the fascinating capabilities
          of AIML or want to delve into cutting-edge technologies shaping our
          future, I'd love to connect and exchange insights!
        </p>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-2xl font-bold mb-4">
            Extra Curricular Activities and Co Curricular Activities
          </h2>
          <ul className="list-disc pl-4">
            <li>Club Member in SRM Hakathon</li>
            <li>AIML Workshop Participant</li>
          </ul>
        </div>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-2xl font-bold mb-4">Sem Wise GPA</h2>
          <p className="text-lg">
            Semester 1 GPA: 8.4
            <br />
            Semester 2 GPA: 8.9
          </p>
        </div>

        {/* <div className="mb-8 animate__animated animate__fadeIn animate__delay-5s">
          <h2 className="text-2xl font-bold mb-4">
            AIML Competitions and Events
          </h2>
          <ul className="list-disc pl-4">
            <li>DEFCON CTF Qualifier</li>
            <li>HackTheBox Challenges</li>
            <li>SecureCITI Cybersecurity Symposium</li>
            <li>National Cyber League (NCL)</li>
          </ul>
        </div> */}

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-6s">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-4">
            <li>C ★★★★★</li>
            <li>C++ ★★★★☆</li>
            <li>Python For ML ★★★★☆</li>
          </ul>
        </div>
      </div>

      <Footer className="py-2" />
    </div>
  );
};

export default About;
