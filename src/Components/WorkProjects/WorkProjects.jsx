import React from 'react';
import './WorkProjects.css';
import RedHorseBeer from "./RHB.png";
import Vndci from "./Vndci.png"
import Dashboard from './dashboard.png'
import Crypto from './crypto.png'
import Enfluence from './enfluence.png'

const projects = [
  { id: 1, src: Crypto, alt: 'Crypto', title: 'Crypto', description: 'Cyrptocurrency web design that you can study different kinds of cyrptocurrency in the market. Designed with Figma.', link:'https://www.figma.com/design/ksacQpj0JplHYdZjzkuZ7z/Crypto?node-id=0-1&t=Af09TSVJo7SePE3W-1'},
  { id: 2, src: Enfluence, alt: 'Enfluence', title: 'Enfluence', description: 'Learning website where you can have live session with a mentor. Designed with Figma.', link:''},
  { id: 3, src: RedHorseBeer, alt: 'Red Horse Beer', title: 'Red Horse Beer', description: 'Recreation of Red Horse Beer webpage designed with Figma.', link:'https://www.figma.com/design/BCJoj8rYEvmhXvi6dPxhto/Red-Horse-Beer?node-id=0-1&t=y7E7fLIGj1VxzNdo-0'},
  { id: 4, src: Vndci, alt: 'VNDCI-SYS', title: 'VNDCI-SYS', description: 'A Capstone Project developed using MERN Stack.', link: 'https://vndci-sys.vercel.app/' },
  { id: 5, src: Dashboard, alt: 'Dashboard', title: 'Modernized Dashboard', description: 'Landing Page developed using React.js.', link: 'https://github.com/zytanas/modernized-dashboard' },
];

const WorkProjects = () => {
  return (
    <section id='projects' className='project-container'>
      <h5>Projects</h5>
      <div className='project-contents'>
        {projects.map(project => (
          <div key={project.id} className='project-item'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.src} alt={project.alt} />
            </a>
            <h6>{project.title}</h6>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProjects;
