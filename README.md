# Abhay Singh Chouhan  -  Portfolio 

A world-class, production-grade personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **GSAP**.

## 🎯 Features

- **Glassmorphism UI** with stunning neon accents and atmospheric depth
- **3D Hero Section** with particle effects and mouse parallax
- **Typing Animation** cycling through professional roles
- **Custom Cursor Trail** with spring physics and interactive morphing
- **Terminal-Style About Section** with realistic typing effect
- **Animated Skills Grid** with proficiency rings
- **Interactive Project Cards** with 3D tilt effects and detailed modals
- **Timeline Component** with scroll-triggered animations
- **Live GitHub Integration** fetching repos, stats, and contribution data
- **Contact Form** with validation and loading states
- **Fully Responsive** design optimized for mobile, tablet, and desktop
- **Accessibility** features with reduced motion support
- **Performance Optimized** with lazy loading and dynamic imports

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles & CSS variables
├── components/
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Hero.tsx            # Hero section with 3D & typing
│   ├── About.tsx           # Terminal-style about section
│   ├── Skills.tsx          # Skills & tech stack grid
│   ├── Projects.tsx        # Projects with modals
│   ├── Timeline.tsx        # Experience timeline
│   ├── GitHub.tsx          # GitHub integration
│   ├── Contact.tsx         # Contact form
│   ├── LoadingScreen.tsx   # Splash screen animation
│   ├── CustomCursor.tsx    # Custom cursor trail
├── lib/
│   ├── github.ts           # GitHub API functions
├── public/                 # Static assets
└── package.json            # Dependencies & scripts
```

## 🎨 Customization

### Colors & Theme

Edit CSS custom properties in [app/globals.css](app/globals.css):

```css
:root {
  --color-accent-primary: #00d9ff;
  --color-accent-secondary: #ff006e;
  --color-accent-tertiary: #ffa502;
  /* ... more variables */
}
```

### Content

- Update personal info in [components/Hero.tsx](components/Hero.tsx)
- Edit skills in [components/Skills.tsx](components/Skills.tsx)
- Modify projects in [components/Projects.tsx](components/Projects.tsx)
- Update contact details in [components/Contact.tsx](components/Contact.tsx)

### GitHub Integration

Change the GitHub username in [lib/github.ts](lib/github.ts):

```typescript
const GITHUB_USERNAME = 'abhaycore';
```

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion + GSAP
- **3D**: Three.js (optional)
- **Icons**: Lucide React
- **API**: GitHub REST API
- **Fonts**: Syne (Display) + Space Mono (Code)

## 📊 Performance

Lighthouse targets:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The portfolio is compatible with any Node.js hosting:

- Netlify
- GitHub Pages (with static export)
- AWS Amplify
- Railway
- Render

## 📝 Environment Variables

None required for basic setup. Optional:

```env
# GitHub API (optional, uses public API by default)
NEXT_PUBLIC_GITHUB_TOKEN=your_token_here
```

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📄 License

MIT © 2026 **Abhay Singh Chouhan**

## 🙋 Support

For issues or questions, open an issue or reach out via:

- 📧 Email: abhaysinghchouhan3234@gmail.com
- 💼 LinkedIn: [Abhay Singh Chouhan](https://www.linkedin.com/in/abhay-singh-chouhan-2b52aa353)
- 🐙 GitHub: [@abhaycore](https://github.com/abhaycore)

---

**Built with ❤️ and a lot of coffee ☕**
