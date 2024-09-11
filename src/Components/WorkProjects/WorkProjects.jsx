import React from "react";
import "./WorkProjects.css";
import Vndci from "./Vndci.png";
import Footwear from './footwear.png'
import CozyBean from './CozyBean.png'
import Crypto from './Cypto.png';
import SportsTxt from './SportsTXT.png';
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    src: CozyBean,
    alt: "CozyBean",
    title: "Cozy Bean Landing Page",
    description:
      "Cozy Beans is a welcoming neighborhood café offering handcrafted coffee, delectable desserts, and a cozy atmosphere where every sip and bite feels like home.",
    tags: "Figma",
    link: "https://www.figma.com/design/97O7c4t90Ff820MssJ7MBe/Cozy-Bean?t=QkLid4X920BMRp20-1"
  },
  {
    id: 2,
    src: Footwear,
    alt: "Footwear",
    title: "Footwear Landing Page",
    description:
      "A sleek platform design, Footwear is your one-stop destination for stylish and comfortable shoes, offering a wide range of designs to suit every step of your journey.",
    tags: "Figma",
    link: "https://www.figma.com/design/mnCfXhbNcjYorb1uFaxr23/Footwear?node-id=0-1&t=QkLid4X920BMRp20-1"
  },
  {
    id: 3,
    src: Crypto,
    alt: "Crypto",
    title: "Cyrptocurrency Landing Page",
    description:
      "A modern, crypto platform design focused on simplicity, security, and seamless navigation, offering quick access to essential features, legal information, and social media engagement.",
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
    src: SportsTxt,
    alt: "SportsTxt",
    title: "SportsTxt",
    description:
      "Revamp version of SportsTXT for a technical exam for a web designer role. SportsTXT is an online platform designed to deliver the ultimate sports fan experience.",
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
