import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "./WorkProjects.css";
import RedHorseBeer from "./Rhb.png";
import Vndci from "./Vndci.png";
import Bank from "./Bank.png";


const projects = [
  {
    id: 1,
    src: Bank,
    alt: "Bank",
    title: "Online Banking Dashboard ",
    description:
      "A sleek and secure online banking dashboard offering real-time account management, transaction tracking, and personalized financial insights for effortless financial control.",
    tags:"Figma"
    },
  {
    id: 2,
    src: Vndci,
    alt: "Vndci",
    title: "VNDCI",
    description:
      "Web-based inventory system built, designed to streamline and optimize inventory management with a user-friendly interface and robust performance.",
  tags:"MERN Stack & Tailwind CSS"
  },
  {
    id: 3,
    src: RedHorseBeer,
    alt: "Red Horse Beer",
    title: "Red Horse Beer",
    description: "A modern recreation of the Red Horse Beer webpage designed in Figma, blending bold visuals with intuitive navigation to enhance brand identity.",
    tags:"Figma"
  },

];


const WorkProjects = () => {


  return (
    <section id="projects" className="project-container">
      <h5>Projects</h5>
      <div className="project-contents">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
          >
            <img src={project.src} alt={project.alt} />
            <h6>{project.title}</h6>
            <p>{project.description}</p>
            <div>{project.tags}</div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WorkProjects;
