import { motion } from 'framer-motion'
import './Experience.css'

export default function Experience() {
  const education = [
    {
      school: 'Georgia State University',
      degree: 'Bachelor of Business Administration',
      concentration: 'Computer Information Systems - Cybersecurity',
      graduated: 'Expected 2027',
      gpa: '3.5',
      highlights: [
        'Active member of Cybersecurity Club',
        'Mentee in Blacks in Cybersecurity Program',
        'Strong academic performance',
      ],
    },
  ]

  const experience = [
    {
      title: 'Cybersecurity Labs',
      organization: 'TryHackMe (Self-Directed)',
      period: 'Ongoing',
      description: [
        'Completed structured beginner-level cybersecurity labs',
        'Reinforced understanding of threat awareness and defensive security practices',
        'Maintained documentation of lab exercises',
      ],
    },
    {
      title: 'Automation Project',
      organization: 'Group Project - Zapier',
      period: 'Recent Coursework',
      description: [
        'Designed and implemented automated workflow with Zapier',
        'Mapped business requirements to technical triggers',
        'Tested and validated workflow accuracy',
      ],
    },
  ]

  const certifications = [
    { name: 'CompTIA Network+', status: 'In Progress - Expected 2026' },
    { name: 'CompTIA Security+', status: 'Actively Studying' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience & Education</h2>

      <div className="experience-container">
        {/* Education */}
        <div className="experience-column">
          <h3>Education</h3>
          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((item, index) => (
              <motion.div key={index} className="timeline-item" variants={itemVariants}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{item.degree}</h4>
                  <p className="organization">{item.school}</p>
                  <p className="period">{item.graduated} • GPA: {item.gpa}</p>
                  <p className="concentration">{item.concentration}</p>
                  <ul className="highlights">
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Professional Experience */}
        <div className="experience-column">
          <h3>Professional Experience</h3>
          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experience.map((item, index) => (
              <motion.div key={index} className="timeline-item" variants={itemVariants}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p className="organization">{item.organization}</p>
                  <p className="period">{item.period}</p>
                  <ul className="description">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <div className="certifications">
            <h4>Certifications</h4>
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <span className="cert-icon">📜</span>
                  <div>
                    <p className="cert-name">{cert.name}</p>
                    <p className="cert-status">{cert.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
