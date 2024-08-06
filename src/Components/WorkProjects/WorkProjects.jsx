import React, { useState } from "react";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import { MdClose } from "react-icons/md";
import "react-image-gallery/styles/css/image-gallery.css";
import "./WorkProjects.css";
import RedHorseBeer from "./RHB.png";
import Vndci from "./Vndci.png";
import Dashboard from "./dashboard.png";
import Crypto from "./crypto.png";
import Enfluence from "./enfluence.png";
import RedHorseDesktop from "./red horse - desktop.png";
import RedHorseTablet from "./red horse - tablet.png";
import RedHorseMobile from "./red horse - mobile.png";
import EnfluenceDesktop from './enfluence - desktop.png'
import EnflunceLaptop from './enfluence - laptop.png'

const projects = [
  {
    id: 1,
    src: Crypto,
    alt: "Crypto",
    title: "Crypto",
    description:
      "Cryptocurrency web design that you can study different kinds of cryptocurrency in the market. Designed with Figma.",
    gallery: [Crypto],
  },
  {
    id: 2,
    src: Enfluence,
    alt: "Enfluence",
    title: "Enfluence",
    description:
      "Learning website where you can have live session with a mentor. Designed with Figma.",
    gallery: [Enfluence, EnflunceLaptop, EnfluenceDesktop],
  },
  {
    id: 3,
    src: RedHorseBeer,
    alt: "Red Horse Beer",
    title: "Red Horse Beer",
    description: "Recreation of Red Horse Beer webpage designed with Figma.",
    gallery: [RedHorseBeer, RedHorseDesktop, RedHorseTablet, RedHorseMobile],
  },
  {
    id: 4,
    src: Vndci,
    alt: "VNDCI-SYS",
    title: "VNDCI-SYS",
    description: "A Capstone Project developed using MERN Stack.",
    gallery: [Vndci],
    link: "https://vndci-sys.vercel.app/",
  },
  {
    id: 5,
    src: Dashboard,
    alt: "Dashboard",
    title: "Modernized Dashboard",
    description: "Landing Page developed using React.js.",
    gallery: [Dashboard],
    sourceCode: "https://github.com/zytanas/modernized-dashboard",
  },
];

Modal.setAppElement("#root");

const WorkProjects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProject(null);
  };

  return (
    <section id="projects" className="project-container">
      <h5>Projects</h5>
      <div className="project-contents">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => openModal(project)}
          >
            <img src={project.src} alt={project.alt} />
            <h6>{project.title}</h6>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Gallery"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="close-container">
          <MdClose onClick={closeModal} className="close-icon" />
        </div>

        {currentProject && (
          <div>
            <ImageGallery
              items={currentProject.gallery.map((img) => ({
                original: img,
                thumbnail: img,
              }))}
            />

            <div className="project-details">

              {currentProject.link && (
                <div className="project-link">
                  <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                    View Live Project
                  </a>
                </div>
              )}

              {currentProject.sourceCode && (
                <div className="project-source-code">
                  <a href={currentProject.sourceCode} target="_blank" rel="noopener noreferrer">
                    View Source Code
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default WorkProjects;
