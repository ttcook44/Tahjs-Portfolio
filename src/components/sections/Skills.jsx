import { motion } from 'framer-motion'
import './Skills.css'

export default function Skills() {
  const technicalSkills = [
    { name: 'Python', level: 85 },
    { name: 'Cybersecurity', level: 80 },
    { name: 'Network+', level: 75 },
    { name: 'Security+', level: 70 },
    { name: 'Microsoft Excel', level: 80 },
    { name: 'Zapier Automation', level: 85 },
  ]

  const coreCompetencies = [
    'Information Systems Management',
    'Analytical Problem Solving',
    'Collaborative Teamwork',
    'Threat Analysis & Defense',
    'Workflow Automation',
    'AI-Assisted Development',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Competencies</h2>

      <div className="skills-container">
        <div className="skills-column">
          <h3>Technical Skills</h3>
          <motion.div
            className="skills-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technicalSkills.map((skill, index) => (
              <motion.div key={index} className="skill-item" variants={itemVariants}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="skills-column">
          <h3>Core Competencies</h3>
          <motion.div
            className="competencies-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                className="competency-badge"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {competency}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
