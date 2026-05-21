# Shahriar Khan - Portfolio Website

A modern, minimalistic, and responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Modern Design**: Clean, minimalistic UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Performance Optimized**: Fast loading with Next.js App Router
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- **Node.js 20.9.0 or higher** (Required by Next.js 16)
- npm, yarn, or pnpm

> ⚠️ **Important**: Next.js 16 requires Node.js version 20.9.0 or higher. If you're using an older version, please upgrade:
> ```bash
> # Using nvm (recommended)
> nvm install 20.9.0
> nvm use 20.9.0
> ```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/turjo410/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
my-portfolio/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx             # Home page with all sections
│       └── globals.css          # Global styles and theme variables
├── components/
│   ├── ui/                      # Reusable UI components (ShadCN)
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── sections/                # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── achievements.tsx
│   │   └── contact.tsx
│   ├── navigation.tsx           # Header navigation
│   ├── footer.tsx               # Footer component
│   └── theme-toggle.tsx         # Dark mode toggle
├── lib/
│   └── utils.ts                 # Utility functions
├── public/
│   └── resume/                  # Resume PDF and images
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Edit `components/sections/hero.tsx` and `components/sections/contact.tsx`
2. **Projects**: Update the `projects` array in `components/sections/projects.tsx`
3. **Experience**: Modify the `experiences` array in `components/sections/experience.tsx`
4. **Skills**: Edit the `skills` object in `components/sections/skills.tsx`
5. **Achievements**: Update `components/sections/achievements.tsx`

### Change Theme Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 240 5.9% 10%;
  --secondary: 240 4.8% 95.9%;
  /* ... other colors */
}
```

### Add Resume PDF

Place your resume PDF file in the `public/resume/` directory and name it `Shahriar_Khan_Resume.pdf`, or update the link in `components/sections/hero.tsx`.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Shahriar Khan**
- Email: turjo410@gmail.com
- LinkedIn: [shahriar-khan-08770b289](https://linkedin.com/in/shahriar-khan-08770b289)
- GitHub: [@turjo410](https://github.com/turjo410)

---

Built with ❤️ using Next.js and Tailwind CSS
