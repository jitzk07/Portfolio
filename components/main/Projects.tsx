import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div
      className="projects-container flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/JK-shopping.png"
          title="E-commerce Website MERN"
          description="I built a feature-rich e-commerce platform with secure authentication, product management, and a seamless shopping experience."
          link="https://jk07-shopping.netlify.app/" // External link to the project
        />
        <ProjectCard
          src="/job-portal.png"
          title="Job Portal MERN Stack"
          description="I developed an online job portal with features for job listings, applications, and a user-friendly interface for seamless job search and recruitment."
          link="https://example.com/job-portal"
        />
        <ProjectCard
          src="/weather-application.png"
          title="React Weather App"
          description="I created a weather application that displays current conditions and allows dynamic searches for weather updates in different locations."
          link="https://example.com/weather-app"
        />
      </div>
    </div>
  );
};

export default Projects;

