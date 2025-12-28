# 🚀 Quick Start Guide

## What You Have

A fully functional, modern portfolio website with:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Smooth animations using Framer Motion
- ✅ All sections populated with your resume data:
  - Hero section with your name and contact
  - About section with education and achievements
  - Experience section with your work history
  - Projects section with 5 major projects
  - Skills section with all your technical skills
  - Achievements section with awards and scholarships
  - Contact section with all contact methods

## ⚠️ Before You Start

**IMPORTANT**: You need Node.js version 20.9.0 or higher!

Check your current version:
```bash
node --version
```

If you see v18 or lower, upgrade:
```bash
# Using nvm (recommended)
nvm install 20.9.0
nvm use 20.9.0

# Or download from https://nodejs.org/
```

## 🎯 Next Steps

### 1. Add Your Resume PDF (5 minutes)

1. Save your resume as a PDF
2. Place it in: `public/resume/Shahriar_Khan_Resume.pdf`
3. Done! The download button will work automatically

### 2. Test Locally (2 minutes)

```bash
# Make sure you're in the project directory
cd "E:\EWU University\portfolio\my-portfolio"

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser!

### 3. Customize (Optional)

#### Change Colors
Edit `src/app/globals.css` and modify the CSS variables

#### Update Content
All content is in `components/sections/`:
- `hero.tsx` - Your name, tagline, social links
- `about.tsx` - About you section
- `experience.tsx` - Work experience
- `projects.tsx` - Your projects
- `skills.tsx` - Technical skills
- `achievements.tsx` - Awards and achievements
- `contact.tsx` - Contact information

### 4. Deploy to Vercel (10 minutes)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/turjo410/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. **Important**: Set Node.js version to 20.x in Project Settings
6. Click "Deploy"
7. Done! Your site will be live at `https://your-project.vercel.app`

## 📝 Customization Tips

### Change Your Photo/Avatar
Add an image to `public/` folder and use it in `hero.tsx`

### Add More Projects
Edit the `projects` array in `components/sections/projects.tsx`

### Update Experience
Edit the `experiences` array in `components/sections/experience.tsx`

### Change Theme Colors
Modify CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: 240 5.9% 10%;    /* Change this! */
  --secondary: 240 4.8% 95.9%; /* And this! */
}
```

## 🐛 Troubleshooting

### "Node.js version required" error
➡️ Upgrade to Node.js 20.9.0 or higher (see instructions above)

### npm install fails
➡️ Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Port 3000 is already in use
➡️ Use a different port: `npm run dev -- -p 3001`

### Build fails on Vercel
➡️ Make sure Node.js version is set to 20.x in Project Settings → General

## 📧 Need Help?

- Check the main README.md for detailed documentation
- Email: turjo410@gmail.com
- GitHub Issues: https://github.com/turjo410/portfolio/issues

## 🎉 You're All Set!

Your portfolio is ready to go. Just add your resume PDF and deploy!

Happy coding! 🚀
