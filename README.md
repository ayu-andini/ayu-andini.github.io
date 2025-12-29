# Ayu Andini - Personal Portfolio Website 🌟

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)

A modern, responsive personal portfolio website built with Next.js and TailwindCSS, featuring smooth animations and a beautiful gradient design.

## ✨ Features

- 🎨 Modern and responsive design with gradient color scheme
- ⚡ Built with Next.js 14 and TypeScript
- 💅 Styled with TailwindCSS
- 🎭 Smooth animations and transitions
- 📱 Fully mobile responsive
- 🚀 Optimized for GitHub Pages deployment
- ♿ Accessible design
- 🎯 SEO optimized

## 📦 Tech Stack

- **Framework:** Next.js 14
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **Animation:** Framer Motion
- **Deployment:** GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ayu-andini/ayu-andini.github.io.git
cd ayu-andini.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment to GitHub Pages

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. Create a new GitHub repository named `ayu-andini.github.io` (or `<your-username>.github.io`)

2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ayu-andini/ayu-andini.github.io.git
git push -u origin main
```

3. The GitHub Actions workflow will automatically build and deploy your site.

4. Go to your repository Settings → Pages, and ensure:
   - Source is set to "Deploy from a branch"
   - Branch is set to `gh-pages`
   - Folder is set to `/ (root)`

5. Your site will be live at `https://ayu-andini.github.io`

### Method 2: Manual Deployment

1. Build the static export:
```bash
npm run build
# or
yarn build
```

2. The static files will be generated in the `out` directory.

3. Deploy the `out` directory to GitHub Pages:
```bash
# Install gh-pages package
npm install -g gh-pages

# Deploy
gh-pages -d out
```

## 📁 Project Structure

```
ayu-andini-portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact section
│   ├── Experience.tsx        # Experience section
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero/landing section
│   ├── Navigation.tsx        # Navigation bar
│   ├── Projects.tsx          # Projects showcase
│   └── TechStack.tsx         # Tech stack section
├── public/
│   └── images/               # Static images
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: '#FF6B9D',      // Pink
  secondary: '#C084FC',    // Purple
  accent: '#38BDF8',       // Blue
  dark: '#0F0F0F',         // Dark background
  'dark-lighter': '#1A1A1A',
}
```

### Content

Update your personal information in the component files:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About me content
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project showcase
- `components/Contact.tsx` - Contact information

### Fonts

Fonts are imported in `app/globals.css`. To change fonts:

1. Update the Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap');
```

2. Update the CSS variables:
```css
:root {
  --font-display: 'YourFont', sans-serif;
  --font-body: 'YourFont', sans-serif;
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run export` - Export static site

## 🔧 Configuration

### Next.js Configuration

The `next.config.js` is configured for static export:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

### GitHub Actions

The `.github/workflows/deploy.yml` file automates deployment to GitHub Pages on every push to the main branch.

## 🐛 Troubleshooting

### Issue: Site not loading on GitHub Pages

**Solution:** Ensure that:
1. Repository name is exactly `<your-username>.github.io`
2. GitHub Pages is enabled in repository settings
3. Source branch is set to `gh-pages`
4. Wait 2-3 minutes for deployment to complete

### Issue: Images not displaying

**Solution:** 
1. Ensure `images.unoptimized: true` is set in `next.config.js`
2. Check that image paths are relative and correct

### Issue: 404 errors on refresh

**Solution:**
- This is expected with static export. GitHub Pages doesn't support client-side routing by default.
- Use hash routing or ensure all routes are generated during build.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Ayu Andini**
- Email: ayuandi517@gmail.com
- LinkedIn: [linkedin.com/in/ayu-andinii](https://www.linkedin.com/in/ayu-andinii)
- GitHub: [@Ayuu13](https://github.com/Ayuu13)

## 🌟 Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and TailwindCSS
