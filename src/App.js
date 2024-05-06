import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import './Components/App.css'
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>

  );
}

export default App;
