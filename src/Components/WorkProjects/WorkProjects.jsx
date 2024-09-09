import React from "react";
import "./WorkProjects.css";
import RedHorseBeer from "./redhorse.png";
import Vndci from "./Vndci.png";
import Bank from "./Bank.png";
import Crypto from './Cypto.png';
import SportsTxt from './SportsTXT.png';
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    src: Crypto,
    alt: "Crypto",
    title: "Cryptocurrency Service Landing Page",
    description:
      "A modern, crypto platform design focused on simplicity, security, and seamless navigation, offering quick access to essential features, legal information, and social media engagement.",
    tags: "Figma",
  },
  {
    id: 2,
    src: SportsTxt,
    alt: "SportsTxt",
    title: "SportsTxT",
    description:
      "Revamp version of SportsTXT for a technical exam for a web designer role. SportsTXT is an online platform designed to deliver the ultimate sports fan experience.",
    tags: "Figma",
  },
  {
    id: 3,
    src: Bank,
    alt: "Bank",
    title: "Online Banking Dashboard",
    description:
      "A sleek and secure online banking dashboard offering real-time account management, transaction tracking, and personalized financial insights for effortless financial control.",
    tags: "Figma",
  },
  {
    id: 4,
    src: Vndci,
    alt: "Vndci",
    title: "VNDCI",
    description:
      "Web-based inventory system built, designed to streamline and optimize inventory management with a user-friendly interface and robust performance.",
    tags: "MERN Stack & Tailwind CSS",
    link: 'https://vndci-sys.vercel.app/',
  },
  {
    id: 5,
    src: RedHorseBeer,
    alt: "Red Horse Beer",
    title: "Red Horse Beer",
    description:
      "A modern recreation of the Red Horse Beer webpage designed in Figma, blending bold visuals with intuitive navigation to enhance brand identity.",
    tags: "Figma",
  },
];

const WorkProjects = () => {
  return (
    <section id="projects" className="project-container">
      <h5>Projects</h5>
      <div className="project-contents">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.src} alt={project.alt} />
            <h6>{project.title}</h6>
            <p>{project.description}</p>
            <div>{project.tags}</div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="View Project"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProjects;
