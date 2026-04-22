import { motion } from 'framer-motion'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="project-category">{project.category}</span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="link-btn">
          View on GitHub
        </a>
        {project.links.demo !== '#' && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-btn demo">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
