import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/ttcook44" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer">
            TryHackMe
          </a>
        </div>
        <p>&copy; {currentYear} Tahj Cook. All rights reserved.</p>
      </div>
    </footer>
  )
}
