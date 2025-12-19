import React from "react";
import { motion } from "framer-motion";
import "../Styles/Contact.css";

export default function Contact(){
  const handleSubmit = (e)=>{ e.preventDefault(); alert("Demo message sent"); e.target.reset(); };
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <motion.div className="contact-left" initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}}>
          <h2>Contact</h2>
          <p>Have a project? Let’s build it together.</p>
        </motion.div>
        <motion.form onSubmit={handleSubmit} className="contact-form" initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" rows="6" placeholder="Message" required />
          <button className="btn-primary" type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}
