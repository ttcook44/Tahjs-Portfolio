import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const contactInfo = [
    { label: 'Email', value: 'ttcook44@gmail.com', link: 'mailto:ttcook44@gmail.com' },
    { label: 'Phone', value: '(912) 704-1666', link: 'tel:+19127041666' },
    { label: 'Location', value: 'Atlanta, GA', link: '#' },
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ttcook44', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'TryHackMe', url: 'https://tryhackme.com', icon: '🛡️' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>

      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="contact-info" variants={itemVariants}>
          <p className="contact-description">
            I'm always interested in hearing about new opportunities, cybersecurity challenges, 
            and collaborative projects. Feel free to reach out!
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <span className="contact-label">{info.label}</span>
                <span className="contact-value">{info.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="contact-social" variants={itemVariants}>
          <h3>Connect With Me</h3>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title={link.name}
              >
                <span>{link.icon}</span>
                <span className="social-label">{link.name}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:ttcook44@gmail.com"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
