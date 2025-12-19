import React from "react";
import { motion } from "framer-motion";
import "../Styles/Experience.css";

export default function Experience(){
  const items = [
    {company:'Company A',role:'Frontend Dev',time:'2023 - present'},
    {company:'Company B',role:'UI Engineer',time:'2021 - 2023'}
  ];
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="exp-list">
          {items.map((it,i)=>(
            <motion.div className="exp-card" key={i} initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.08}} viewport={{once:true}}>
              <h3>{it.company}</h3>
              <p className="muted">{it.role} • {it.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
