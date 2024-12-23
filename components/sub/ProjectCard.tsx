import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link: string; // External link prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain pointer-events-none" // Prevent image from blocking clicks
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
