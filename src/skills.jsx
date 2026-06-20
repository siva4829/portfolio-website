import React from "react";
import skillss from "./data/skill";

function Skills(){
    return(
        <div className="skills-grid" id="skills" >
            <h1>Skill</h1>
            {
                skillss.map((skill) => (
                    <div className="skill-card" key={skill.id}>
                        <h2>{skill.title}</h2>
                        <ul>
                            {skill.lang.map((item,index)=>
                            (<li key={index}>{item}</li>

                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}
export default Skills;