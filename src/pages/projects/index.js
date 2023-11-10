import React from "react";
import Navbar from "@/app/components/navbar/index";
import Footer from "@/app/footer";
import ProjectCard from "@/app/ProjectCard";
import "@/app/globals.css";

const projects = [
  {
    title: "ATM Banking System",
    description:
      "A basic C-language mini-project created as part of my learning journey.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1BkEDzr0g3TrvLQhyFBS2042V0jdBdLxu",
    linkUrl: null,
  },
  {
    title: "Car Rental System",
    description:
      "A basic car rental system mini-project developed during my journey of learning C++.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Wtw2XU04tGmTMWof8aT5kQaO9vbZ0rgJ",
    linkUrl: null,
  },
  {
    title: "Weather App",
    description:
      "A clean weather app created using Python Tkinter with API integration for live updates.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1V5nYzn0a5BEH-g6ZjgL8qBb8gtLXohsD",
    linkUrl: null,
  },
  {
    title: "PDM - Expense Management",
    description:
      "A basic Java project utilizing Java Swing. It functions similar to the Splitwise app but with a different approach.",
    imageUrl: "/project7.jpg",
    linkUrl: null,
  },
  {
    title: "Micro-processor Based Water Level Controller",
    description:
      "A project based on Arduino Uno that monitors the water level in a tank and can control the pump accordingly.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1hc6RkYuLSvmLPYgNpeEpWLmnh9gQjbId",
    linkUrl: null,
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid mx-auto max-w-screen-xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              linkUrl={project.linkUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
