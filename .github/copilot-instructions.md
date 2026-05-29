# Abhay Singh Portfolio - Project Setup & Development Guide

## Project Overview

This is an advanced Next.js 14 portfolio website for Abhay Singh Chouhan featuring:
- Glassmorphism UI with neon accents
- Animated 3D hero section
- Terminal-style about section
- Interactive project showcase
- Live GitHub integration
- Fully responsive design
- Production-optimized

## ✅ Setup Checklist

### Step 1: Project Scaffolding ✓ COMPLETED
- [x] Created Next.js 14 project with TypeScript
- [x] Configured Tailwind CSS with custom theme
- [x] Set up PostCSS and ESLint
- [x] Installed all dependencies via npm

### Step 2: Configuration Files ✓ COMPLETED
- [x] tsconfig.json configured for App Router
- [x] next.config.js set up with image optimization
- [x] tailwind.config.js with custom colors and animations
- [x] .eslintrc.json configured
- [x] postcss.config.js ready

### Step 3: Core Application Setup ✓ COMPLETED
- [x] app/layout.tsx with metadata and fonts
- [x] app/page.tsx as main portfolio
- [x] app/globals.css with CSS variables

### Step 4: Components Created ✓ COMPLETED
- [x] Navbar with sticky positioning
- [x] Hero section with 3D particles and typing
- [x] About section with terminal styling
- [x] Skills section with proficiency rings
- [x] Projects section with modals
- [x] Timeline component
- [x] GitHub integration component
- [x] Contact form with validation
- [x] CustomCursor with trail effect
- [x] LoadingScreen splash animation

### Step 5: Utilities & Libraries ✓ COMPLETED
- [x] GitHub API integration (lib/github.ts)
- [x] All dependencies installed and verified

### Step 6: Build & Test
- [ ] Run development server (npm run dev)
- [ ] Verify no build errors (npm run build)
- [ ] Test responsive design
- [ ] Validate all animations
- [ ] Check GitHub data fetching
- [ ] Test form submission
- [ ] Lighthouse audit

### Step 7: Deployment
- [ ] Configure environment variables
- [ ] Deploy to Vercel or hosting platform
- [ ] Set up custom domain (optional)
- [ ] Verify live deployment

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Access at http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

### ESLint Check
```bash
npm run lint
```

## 📦 Dependencies

**Key Packages:**
- `next@14.0.0` - React framework
- `framer-motion@10.16.0` - Animations
- `gsap@3.12.0` - Complex animations
- `three@r156` - 3D graphics
- `tailwindcss@3.3.0` - Styling
- `lucide-react@0.292.0` - Icons

**Dev Dependencies:**
- TypeScript 5.2
- ESLint 8.57
- Autoprefixer & PostCSS

## 🎨 Key Features Implementation

### 1. Glassmorphism UI
- CSS custom properties for consistent theming
- Backdrop blur effects
- Semi-transparent cards with glow borders
- Neon accent colors

### 2. Animations
- Framer Motion for component-level animations
- GSAP for complex sequences
- Scroll-triggered animations with IntersectionObserver
- Custom CSS keyframes for decorative effects

### 3. Responsive Design
- Mobile-first approach
- Breakpoints at md (768px) and lg (1024px)
- Touch-friendly interactions
- Collapsible mobile menu

### 4. GitHub Integration
- Real-time repo fetching
- Auto-updating project list
- Language statistics
- Contribution data

### 5. Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Prefers-reduced-motion support
- Semantic HTML structure

## 🔧 Customization Guide

### Update Personal Information
Edit these files with your information:

1. **[app/layout.tsx](app/layout.tsx)** - Metadata & title
2. **[components/Hero.tsx](components/Hero.tsx)** - Name & roles
3. **[components/About.tsx](components/About.tsx)** - Bio & philosophy
4. **[components/Skills.tsx](components/Skills.tsx)** - Skills list
5. **[components/Projects.tsx](components/Projects.tsx)** - Project details
6. **[components/Timeline.tsx](components/Timeline.tsx)** - Experience
7. **[components/Contact.tsx](components/Contact.tsx)** - Contact info

### Change Colors
Edit CSS variables in [app/globals.css](app/globals.css):

```css
:root {
  --color-accent-primary: #00d9ff;      /* Main cyan */
  --color-accent-secondary: #ff006e;    /* Pink */
  --color-accent-tertiary: #ffa502;     /* Amber */
  /* ... update as needed */
}
```

### Modify GitHub Username
In [lib/github.ts](lib/github.ts):

```typescript
const GITHUB_USERNAME = 'abhaycore';  // Change this
```

### Add/Remove Projects
Edit the `projects` array in [components/Projects.tsx](components/Projects.tsx).

## 📊 Performance Optimization

### Already Implemented
- Image optimization with next/image
- Dynamic imports for heavy components
- Lazy loading for sections
- CSS variables for efficient theming
- Optimized font loading (Syne + Space Mono)

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Push to GitHub and connect Netlify
```

### Other Platforms
Build command: `npm run build`
Start command: `npm start`
Node version: 18.x or higher

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then restart: npm run dev
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### GitHub API Rate Limit
The portfolio uses the public GitHub API (60 requests/hour limit). For higher limits, add a token:

```env
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://greensock.com/docs/)

## 📞 Support

For issues or questions:
- Email: abhaysinghchouhan3234@gmail.com
- GitHub: https://github.com/abhaycore
- LinkedIn: https://www.linkedin.com/in/abhay-singh-chouhan-2b52aa353

---

**Status**: ✅ Development Ready
**Last Updated**: May 2026
**Node Version**: 18+
**npm Version**: 9+
