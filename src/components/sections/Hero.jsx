import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Tahj Cook</h1>
          <h2>Cybersecurity & Software Developer</h2>
          <p>
            Georgia State University student | Passionate about cybersecurity, 
            automation, and building intelligent solutions
          </p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button onClick={() => {
            const contact = document.getElementById('contact')
            contact?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Get In Touch
          </button>
          <button 
            className="secondary"
            onClick={() => {
              const projects = document.getElementById('projects')
              projects?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="stat">
            <h3>3.5</h3>
            <p>GPA</p>
          </div>
          <div className="stat">
            <h3>B.B.A</h3>
            <p>CIS - Cybersecurity</p>
          </div>
          <div className="stat">
            <h3>2027</h3>
            <p>Expected Graduation</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
