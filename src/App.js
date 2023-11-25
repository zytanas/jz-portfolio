import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
