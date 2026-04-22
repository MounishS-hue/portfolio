# 🚀 Mounish Senisetty - Portfolio Website

A modern, sleek, and highly interactive portfolio website showcasing AI engineering expertise, full-stack development skills, and research contributions. Built with TypeScript, featuring smooth animations, dark theme, and Vercel deployment ready.

## ✨ Features

- **Modern Dark Design** - Sleek dark theme with vibrant gradient accents
- **Smooth Animations** - Engaging entrance animations and interactive hover effects
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Fast Performance** - Optimized and minified for rapid loading
- **SEO Friendly** - Meta tags and semantic HTML for better search engine visibility
- **Production Ready** - Vercel deployment configuration included
- **Interactive Elements** - Glassmorphism cards, gradient text, and smooth transitions

## 📁 Project Structure

```
├── portfolio.ts        # Main portfolio component with all styles and markup
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── vite.config.ts      # Vite build configuration
├── tsconfig.json       # TypeScript configuration
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore patterns
└── README.md           # This file
```

## 🛠️ Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **CSS3** - Modern styling with animations and gradients
- **HTML5** - Semantic markup

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MounishS-hue/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## 📦 Build for Production

Build the project for deployment:

```bash
npm run build
```

Output files will be in the `dist` directory.

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment on Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "Add New" → "Project"
5. Select your portfolio repository
6. Click "Deploy"

Vercel will automatically:
- Install dependencies
- Build the project
- Deploy to a live URL
- Set up automatic deployments on git push

## 📝 Customization

### Update Personal Information

Edit `portfolio.ts` to customize:

- **Name and Title** - Update the h1 tag in the hero section
- **Introduction** - Modify the `.intro` paragraph
- **KPIs** - Change CGPA, rankings, and metrics
- **Links** - Update email and social profile URLs
- **Skills** - Add/remove skill chips
- **Projects** - Update project descriptions and details
- **Education** - Modify education entries
- **Achievements** - Update achievements and awards

### Customize Colors

The color scheme is defined in CSS custom properties (variables):

```css
:root {
  --cyan: #06b6d4;
  --accent: #8b5cf6;
  --success: #10b981;
  --amber: #fbbf24;
}
```

Modify these colors in the `<style>` section to match your brand.

## 🎨 Design Features

- **Glassmorphism** - Frosted glass effect cards with blur
- **Gradient Text** - Eye-catching gradient headings
- **Smooth Animations** - Staggered reveal animations on load
- **Hover Effects** - Interactive card lifts and glow effects
- **Responsive Grid** - Auto-adjusting layout for all screen sizes

## ⚡ Performance Optimizations

- Minified CSS and JavaScript
- No external frameworks (vanilla JS)
- Lightweight animation library (CSS animations)
- Optimized font loading from Google Fonts
- Single-file component for faster loading

## 🔒 SEO & Meta Tags

The portfolio includes:
- Open Graph meta tags for social sharing
- Meta description for search results
- Responsive viewport configuration
- Theme color specification
- Schema markup ready

## 📱 Mobile Optimized

- Responsive design works on all devices
- Touch-friendly interactive elements
- Optimized typography for readability
- Mobile-first responsive breakpoints

## 🚢 Continuous Deployment

Once deployed on Vercel, the portfolio will automatically redeploy whenever you:
1. Push to the main branch
2. Create a pull request (preview deployment)
3. Merge a pull request

## 📞 Contact

- **Email**: senisettymounish@gmail.com
- **GitHub**: https://github.com/MounishS-hue
- **LinkedIn**: https://linkedin.com/in/mounish-senisetty
- **LeetCode**: https://leetcode.com/u/Mounish_Mou/

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Google Fonts for beautiful typography
- Vercel for hosting and deployment
- Inspiration from modern portfolio designs

## 🎯 Next Steps

To deploy your portfolio:

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Enhanced portfolio with new design"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Visit https://vercel.com/import
   - Connect your GitHub account
   - Select your portfolio repository
   - Click Deploy

3. **Custom Domain** (Optional):
   - Go to Vercel project settings
   - Add your custom domain
   - Update DNS records as instructed

Your portfolio will be live in seconds! 🎉

---

**Made with ❤️ by Mounish Senisetty**
