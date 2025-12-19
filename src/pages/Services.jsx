
import { motion } from "framer-motion";
import "../Styles/Services.css";

const services = [
  {id:1,title:'UI Development',desc:'Pixel-perfect responsive UI'},
  {id:2,title:'Interactions',desc:'Micro-interactions & animations'},
  {id:3,title:'Performance',desc:'Fast and accessible experiences'}
];

export default function Services(){
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Services</h2>
        <div className="services-grid">
          {services.map((s,i)=>(
            <motion.div className="service-card" key={s.id} whileHover={{scale:1.03}} transition={{type:'spring'}} initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
