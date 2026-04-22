import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../ProjectCard'
import './Projects.css'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AI Agent - Coding Budget Analyzer',
      category: 'ai',
      description: 'An intelligent Python-based AI agent that analyzes coding project budgets, provides cost optimization recommendations, and forecasts resource allocation using machine learning models.',
      technologies: ['Python', 'AI/ML', 'Data Analysis'],
      highlights: [
        'Budget forecasting with predictive analytics',
        'Cost optimization suggestions',
        'Real-time reporting dashboard',
      ],
      links: {
        github: 'https://github.com/ttcook44',
        demo: '#',
      },
    },
    {
      id: 2,
      title: 'Network Security Project',
      category: 'cybersecurity',
      description: 'Comprehensive network security analysis and implementation project covering network architecture, threat detection, and secure protocol implementation.',
      technologies: ['Network+', 'Security', 'Linux'],
      highlights: [
        'Network topology design and security hardening',
        'Vulnerability assessment and remediation',
        'Security protocol implementation',
      ],
      links: {
        github: 'https://github.com/ttcook44',
        demo: '#',
      },
    },
    {
      id: 3,
      title: 'Workflow Automation Suite',
      category: 'automation',
      description: 'Zapier-based automation platform that streamlines business processes, integrating multiple services for efficient data flow and reducing manual tasks.',
      technologies: ['Zapier', 'Business Process', 'Integration'],
      highlights: [
        'Multi-service workflow orchestration',
        'Automated data transfer and validation',
        'Performance monitoring and logging',
      ],
      links: {
        github: 'https://github.com/ttcook44',
        demo: '#',
      },
    },
    {
      id: 4,
      title: 'TryHackMe Lab Portfolio',
      category: 'cybersecurity',
      description: 'Documented completion of structured cybersecurity labs covering threat analysis, defensive strategies, and practical security implementations.',
      technologies: ['Cybersecurity', 'Threat Analysis', 'Linux'],
      highlights: [
        'Lab documentation and writeups',
        'Practical security implementations',
        'Vulnerability discovery and exploitation',
      ],
      links: {
        github: 'https://tryhackme.com',
        demo: '#',
      },
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'automation', label: 'Workflow' },
  ]

  const filteredProjects = 
    activeFilter === 'all'
      ? projects
      : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="filter-buttons">
        {filters.map(filter => (
          <motion.button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="projects-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
