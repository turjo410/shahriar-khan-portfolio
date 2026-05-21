# Saiful Islam - Portfolio Website

A modern, visually stunning portfolio website built with cutting-edge technologies. Features 3D animations, smooth transitions, and a fully responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Modern UI/UX Design** - Clean, professional interface with gradient effects and glass morphism
- **🌟 3D Animations** - Interactive 3D elements using Three.js and React Three Fiber
- **⚡ Smooth Animations** - Fluid transitions powered by Framer Motion
- **📱 Fully Responsive** - Perfect on all devices from mobile to desktop
- **🎯 Interactive Skills** - Animated skill bars and circular progress indicators
- **📊 Data Visualization** - Beautiful charts and progress indicators using Recharts
- **📧 Contact Form** - Functional contact form with validation
- **🔍 SEO Optimized** - Meta tags and semantic HTML for better search rankings
- **🌙 Dark Theme** - Eye-friendly dark mode design
- **🚀 Performance Optimized** - Fast loading with Next.js optimizations

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Animations** | Framer Motion |
| **Charts** | Recharts, React Circular Progressbar |
| **Icons** | React Icons |
| **Typing Effect** | React Type Animation |

## 📦 Installation

1. **Navigate to the portfolio directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   └── components/
│       ├── Navbar.tsx       # Navigation bar
│       ├── Hero.tsx         # Hero section with 3D
│       ├── About.tsx        # About me section
│       ├── Skills.tsx       # Skills visualization
│       ├── Experience.tsx   # Work experience timeline
│       ├── Projects.tsx     # Project showcase
│       ├── Education.tsx    # Education & certifications
│       ├── Contact.tsx      # Contact form
│       ├── Footer.tsx       # Footer section
│       ├── Background3D.tsx # 3D background component
│       ├── LoadingScreen.tsx# Loading animation
│       └── ParticleBackground.tsx
├── public/
│   └── resume.pdf          # Your downloadable resume
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Customization

### Personal Information
Edit the following files to customize your information:

- **Hero.tsx** - Update name, title, and social links
- **About.tsx** - Modify about text and personal info
- **Skills.tsx** - Add/remove skills and adjust proficiency levels
- **Experience.tsx** - Update work experience
- **Projects.tsx** - Add your projects
- **Education.tsx** - Update education and certifications
- **Contact.tsx** - Update contact information

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### Fonts
The portfolio uses:
- **Inter** - Body text
- **Poppins** - Display/headings
- **JetBrains Mono** - Code/monospace

## 📧 Contact Form Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Update the Contact.tsx with your EmailJS credentials

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click!

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **AWS Amplify**: Full Next.js support
- **Docker**: Containerize for any hosting

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by React Icons
- 3D effects powered by Three.js community

---

**Made with ❤️ by Saiful Islam**
