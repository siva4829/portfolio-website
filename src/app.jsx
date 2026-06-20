import Hero from "./hero";
import Navbar from "./navbar";
import React from "react";
import About from "./about";
import Skills from "./skills"
import Projects from "./project";
import Resume from "./resume";
import Contact from "./contact";

function App (){
    return(
        <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Contact />
        </div>
    );
}

export default App;
