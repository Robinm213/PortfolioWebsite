import React from "react";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
import ProjectCard from "@/app/ProjectCard";
import "@/app/globals.css";

const projects = [
  {
    title: "Project 1",
    description: "Description for Project 1.",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Project 2",
    description: "Description for Project 2.",
    imageUrl: "/project2.jpg",
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-screen-md py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
