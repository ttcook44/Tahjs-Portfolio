# Tahj Cook's Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing cybersecurity projects, skills, and experience.

## Features

- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast development and production builds
- 🎨 **Dark Tech Aesthetic** - Modern dark theme with gradient accents
- 🎯 **Smooth Animations** - Framer Motion animations for engaging interactions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔍 **Project Filtering** - Filter projects by category (AI, Cybersecurity, Automation)
- 📊 **Skills Showcase** - Visual skill level indicators and competency badges
- ⚙️ **Automated Deployment** - GitHub Actions workflow for seamless GitHub Pages deployment

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations and transitions
- **React Router DOM** - Navigation and routing
- **CSS3** - Modern styling with CSS variables and gradients

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ttcook44/Tahjs-Portfolio.git
cd Tahjs-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Deployment to GitHub Pages

This portfolio is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Ensure your repository is public** on GitHub

2. **Go to Repository Settings:**
   - Navigate to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

3. **The workflow will run automatically** when you push to the main branch

4. **Wait for deployment** - GitHub Actions will build and deploy your site, then visit:
   ```
   https://ttcook44.github.io/Tahjs-Portfolio/
   ```

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

This requires `gh-pages` package (included in dependencies).

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       └── Contact.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Sections

- **Hero** - Eye-catching introduction with statistics
- **Skills** - Technical skills with progress bars and core competencies
- **Experience** - Education timeline and professional experience
- **Projects** - Featured projects with filtering by category
- **Contact** - Contact information and social links with mailto integration

## Customization

### Colors
Edit the CSS variables in [src/index.css](src/index.css):
```css
:root {
  --primary: #0f172a;
  --secondary: #1e293b;
  --accent: #3b82f6;
  --accent-light: #60a5fa;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --border: #334155;
}
```

### Content
Update content in the section components:
- [Hero.jsx](src/components/sections/Hero.jsx) - Personal intro
- [Skills.jsx](src/components/sections/Skills.jsx) - Skills and competencies
- [Experience.jsx](src/components/sections/Experience.jsx) - Education and experience
- [Projects.jsx](src/components/sections/Projects.jsx) - Project showcase

## License

This project is open source and available under the MIT License.

## Contact

- **Email:** ttcook44@gmail.com
- **Phone:** (912) 704-1666
- **Location:** Atlanta, GA
- **GitHub:** [ttcook44](https://github.com/ttcook44)
