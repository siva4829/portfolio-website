import React from "react";
import projects from "./data/projects";
function Projects(){
    return(
        <div id="projects">
            <h1>Projects</h1>
            {projects.map((project)=>(
            <div className="project-card" key={project.id}>
                <h2>{project.title}</h2>
                <h3>{project.tech}</h3>
                <p>{project.description}</p>
                <h4>Key Features :</h4>
                <ul>
                    {project.feature.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            ))}

        </div>
    );
}

export default Projects;