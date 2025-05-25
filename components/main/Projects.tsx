
import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="this is a modern portfolio website built with Next.js, showcasing my skills and projects. It features a responsive design, smooth animations, and a user-friendly interface."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description=" this project showcases a collection of interactive website cards, each designed to highlight different features and functionalities. The cards are built using HTML, CSS, and JavaScript, ensuring a responsive and engaging user experience."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="This project is a space-themed website that showcases various aspects of space exploration, including planets, stars, and galaxies. It features a visually appealing design with animations and interactive elements to engage users."
        />
      </div>
    </div>
  );
};

export default Projects;
