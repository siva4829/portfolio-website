import React from "react";

function Contact(){
    return(
        <section id="contact">
            <h1>
                Contact me
            </h1>
            <p>I'm currently seeking opportunities as a Python Developer, Backend Developer, FastAPI Developer, or Full-Stack Developer.</p>
            <p>Feel free to reach out for job opportunities, collaborations, or professional networking.</p>
            <div className="contact-links">
                <a href="mailto:sivanesanecetech@gmail.com">📧 Email</a>
                <a href="https://github.com/siva4829" target="_blank" rel="noferrer">💻 GitHub</a>
                <a href="https://www.linkedin.com/in/siva4829/" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            </div>
        </section>
    );
}

export default Contact;