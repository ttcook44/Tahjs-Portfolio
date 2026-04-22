# Deployment Guide

## Quick Start to Launch Your Portfolio

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add remote (replace with your actual repository)
git remote add origin https://github.com/ttcook44/Tahjs-Portfolio.git

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - (The deploy workflow will automatically run)

### Step 3: Monitor Deployment

1. Go to your repository
2. Click **Actions** tab
3. Watch the "Deploy to GitHub Pages" workflow run
4. Once ✅ Complete, your site is live!

### Step 4: Access Your Portfolio

Visit: `https://ttcook44.github.io/Tahjs-Portfolio/`

---

## Local Development

### Run Development Server
```bash
npm run dev
```
Visit `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Customization Before Deploying

### Update Personal Information

1. **Hero Section** - [src/components/sections/Hero.jsx](src/components/sections/Hero.jsx)
   - Update headline, description
   - Customize stats

2. **Skills Section** - [src/components/sections/Skills.jsx](src/components/sections/Skills.jsx)
   - Update technical skills and proficiency levels
   - Update core competencies

3. **Experience Section** - [src/components/sections/Experience.jsx](src/components/sections/Experience.jsx)
   - Update education info
   - Add/update professional experience
   - Update certification status

4. **Projects Section** - [src/components/sections/Projects.jsx](src/components/sections/Projects.jsx)
   - Add your actual projects
   - Update GitHub links
   - Add project descriptions

5. **Contact Section** - [src/components/sections/Contact.jsx](src/components/sections/Contact.jsx)
   - Verify email is correct (ttcook44@gmail.com)
   - Update social links

6. **Footer** - [src/components/Footer.jsx](src/components/Footer.jsx)
   - Update social media links

### Customize Colors

Edit [src/index.css](src/index.css) CSS variables:
```css
:root {
  --primary: #0f172a;      /* Dark background */
  --secondary: #1e293b;    /* Secondary background */
  --accent: #3b82f6;       /* Primary accent color */
  --accent-light: #60a5fa; /* Light accent */
  --text-primary: #f1f5f9; /* Main text */
  --text-secondary: #cbd5e1; /* Secondary text */
  --border: #334155;       /* Border color */
}
```

---

## Troubleshooting

### Workflow Not Running?
- Ensure `.github/workflows/deploy.yml` exists
- Check that GitHub Actions is enabled in repository settings
- Try pushing a test commit to trigger the workflow

### 404 After Deployment?
- Verify the workflow completed successfully in Actions tab
- Check that deployment is enabled in Pages settings
- Wait a few minutes for GitHub's cache to update

### Custom Domain?
1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Follow DNS configuration instructions

---

## Next Steps

1. ✅ Deploy to GitHub Pages
2. 📱 Test on mobile devices
3. 🔗 Add real project links
4. 🎯 Update all personal information
5. 📸 Add project screenshots/descriptions
6. 🚀 Share with employers/networks

---

## Support

For issues or questions about Vite/React deployment:
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev/)
