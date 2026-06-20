import React from "react";
function Hero(){
    return(
        <div id="hero">
            <h1>Hi, I'm Sivanesan L 👋</h1>
            <h2>Python Developer | FastAPI Developer | Full-Stack Web Developer</h2>
            <p>I build modern web applications using Python, FastAPI, React, and PostgreSQL.
                From REST APIs and authentication systems to full-stack applications, 
                I enjoy turning ideas into practical solutions.</p>
                <p>Recently, I've worked on projects including an Infrastructure-Less Smart Surveillance System and
                 a Job Application Tracker, gaining experience in backend development, databases, cloud integration,
                  and web technologies.</p>

            <p>Currently seeking opportunities as a Python Backend Developer, FastAPI Developer, or Full-Stack Developer.</p>

            <div className="hero-buttons">
  <a href="#projects" className="btn">
    View Projects
  </a>

  <a href="/resume.pdf" className="btn">
    Resume
  </a>
</div>

        </div>
    );
}

export default Hero;