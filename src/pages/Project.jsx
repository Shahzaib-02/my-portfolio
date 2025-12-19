import React from "react";
import { motion } from "framer-motion";
import "../Styles/Project.css";

const projects = [
  {id:1,title:"Portfolio",desc:"Responsive portfolio UI",img:"/assets/project1.jpg"},
  {id:2,title:"Ecommerce",desc:"Store UI and interactions",img:"/assets/project2.jpg"},
  {id:3,title:"Weather App",desc:"Small weather SPA",img:"/assets/project3.jpg"}
];

export default function Projects(){
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((p,i)=>(
            <motion.article className="proj-card" key={p.id} initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:i*0.08}} viewport={{once:true}}>
              <div className="proj-media">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-actions">
                  <a className="btn-primary" href="#">Live</a>
                  <a className="btn-ghost" href="#">Source</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
