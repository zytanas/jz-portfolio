import React from "react";
import "./WorkProjects.css";
import Vndci from "./Vndci.png";
import Footwear from "./footwear.png";
import CozyBean from "./CozyBean.png";
import Crypto from "./Cypto.png";
import SportsTxt from "./SportsTXT.png";
import GameOn from "./gameon.png";
import TodoList from "./todolist.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    src: CozyBean,
    alt: "CozyBean",
    title: "Cozy Bean Landing Page",
    tags: "Figma",
    link: "https://www.figma.com/design/97O7c4t90Ff820MssJ7MBe/Cozy-Bean?t=QkLid4X920BMRp20-1",
  },
  {
    id: 2,
    src: Footwear,
    alt: "Footwear",
    title: "Footwear Landing Page",
    tags: "Figma",
    link: "https://www.figma.com/design/mnCfXhbNcjYorb1uFaxr23/Footwear?node-id=0-1&t=QkLid4X920BMRp20-1",
  },
  {
    id: 3,
    src: Crypto,
    alt: "Crypto",
    title: "Crypto Landing Page",
    tags: "Figma",
    link: "https://www.figma.com/design/mhmDJQWxR3y8y1ddZpHT8X/Crypto?node-id=0-1&t=RvLlMHkeUFwOoC7m-1",
  },
  {
    id: 4,
    src: GameOn,
    alt: "GameOn",
    title: "GameOn Dashboard",
    tags: "Figma",
    link: "https://www.figma.com/design/b3XDxFB2NNULpxFFnOxJgE/GameOn-Dashboard?node-id=0-1&t=dR23kVbSEBNWA8a5-1",
  },
  {
    id: 5,
    src: SportsTxt,
    alt: "SportsTxt",
    title: "SportsTxt",
    tags: "Figma",
  },
  {
    id: 6,
    src: Vndci,
    alt: "Vndci",
    title: "VNDCI",
    tags: "MERN Stack & Tailwind CSS",
    link: "https://vndci-sys.vercel.app/",
  },
  {
    id: 7,
    src: TodoList,
    alt: "Todo List",
    title: "ToDo List",
    tags: "React.Js",
    link: "https://github.com/zytanas/react-todo-list",
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
