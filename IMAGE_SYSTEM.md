# Image System Documentation

## 🎨 Overview

Your portfolio now includes a complete, production-ready image system with:

- ✅ **OptimizedImage Component**: Automatic WebP/AVIF conversion, lazy loading, zoom functionality
- ✅ **ImageGrid Component**: Responsive gallery layouts with stagger animations
- ✅ **ArchitectureDiagram Component**: Styled sections for system architecture visuals
- ✅ **BeforeAfterSlider Component**: Interactive comparison slider with drag/touch support
- ✅ **HeroImage Component**: Full-width hero images with overlay and content support
- ✅ **Smart Placeholders**: Beautiful cyan-themed placeholders until you add real images

## 🚀 Components Usage

### OptimizedImage

The main image component with loading states, zoom, and optimization.

```tsx
import { OptimizedImage } from "@/components/optimized-image";

<OptimizedImage
  src="/images/profile/portrait.jpg"
  alt="Shahriar Khan - Software Engineer"
  width={600}
  height={600}
  priority={true}  // Use for above-fold images
  caption="Professional portrait taken in 2025"
  zoomable={true}  // Click to view fullscreen
  className="rounded-2xl"
/>
```

**Features:**
- Automatic loading skeleton with pulse animation
- Hover effects (scale + border glow)
- Zoom icon on hover
- Fullscreen modal with ESC/click to close
- Fallback to beautiful placeholders
- Smart width/height calculations

### ImageGrid

Create responsive image galleries.

```tsx
import { ImageGrid } from "@/components/optimized-image";

<ImageGrid
  images={[
    {
      src: "/images/project/screenshot-1.jpg",
      alt: "Dashboard Interface",
      caption: "Main Dashboard View"
    },
    {
      src: "/images/project/screenshot-2.jpg",
      alt: "Analytics Panel",
      caption: "Real-time Analytics"
    },
    // ... more images
  ]}
  columns={3}  // 2, 3, or 4
  gap={6}      // Tailwind gap size
/>
```

**Features:**
- Responsive grid: 1 col mobile → 2 col tablet → 3/4 col desktop
- Stagger animation (each image delays by 0.1s)
- All OptimizedImage features included
- Perfect for project galleries

### ArchitectureDiagram

Styled section for system architecture images.

```tsx
import { ArchitectureDiagram } from "@/components/optimized-image";

<ArchitectureDiagram
  src="/images/projects/mlops/architecture.jpg"
  title="System Architecture"
  description="High-level overview of the MLOps pipeline with data flow and component interactions."
/>
```

**Features:**
- Gradient background container
- Border with hover effect
- Title with cyan accent
- Optional description text
- Full-width responsive layout
- Zoomable by default

### BeforeAfterSlider

Interactive comparison slider.

```tsx
import { BeforeAfterSlider } from "@/components/optimized-image";

<BeforeAfterSlider
  before="/images/project/before.jpg"
  after="/images/project/after.jpg"
  alt="Performance Improvement"
/>
```

**Features:**
- Drag slider with mouse or touch
- Starts at 50% position
- "Before" label on left, "After" on right
- Cyan accent color for slider handle
- Smooth clip-path transition
- Works on mobile and desktop

### HeroImage

Full-width hero images with overlay.

```tsx
import { HeroImage } from "@/components/optimized-image";

<HeroImage
  src="/images/hero/background.jpg"
  alt="Workspace"
  overlay={true}  // Gradient overlay
>
  <div>
    <h1 className="text-6xl font-bold text-white">
      Welcome to My Portfolio
    </h1>
  </div>
</HeroImage>
```

**Features:**
- Full viewport height (60vh → 80vh responsive)
- Gradient overlay for text readability
- Children rendered centered over image
- Priority loading
- Cover fit mode

## 📍 Where Images Are Used

### Project Detail Pages (`/projects/[slug]`)

1. **Hero Image** (line ~97):
```tsx
<OptimizedImage
  src={`/images/projects/${project.slug}/hero.jpg`}
  alt={`${project.title} - Main Interface`}
  width={1400}
  height={800}
  priority
/>
```

2. **Architecture Diagram** (line ~115):
```tsx
<ArchitectureDiagram
  src={`/images/projects/${project.slug}/architecture.jpg`}
  title="System Architecture"
  description="High-level overview..."
/>
```

3. **Screenshot Gallery** (line ~210):
```tsx
<ImageGrid
  images={[...6 screenshots]}
  columns={3}
  gap={6}
/>
```

4. **Before/After Comparison** (line ~245):
```tsx
<BeforeAfterSlider
  before={`/images/projects/${project.slug}/before.jpg`}
  after={`/images/projects/${project.slug}/after.jpg`}
  alt="Performance Comparison"
/>
```

### About Page (`/about`)

**Profile Portrait** (line ~26):
```tsx
<OptimizedImage
  src="/images/profile/portrait.jpg"
  alt="Shahriar Khan - Software Engineer"
  width={600}
  height={600}
  priority
  zoomable={false}
/>
```

## 🎯 Image Paths Structure

All images follow this convention:

```
/images/{section}/{subsection}/{filename}.jpg
```

Examples:
- `/images/profile/portrait.jpg`
- `/images/projects/mlops-face-recognition/hero.jpg`
- `/images/about/coffee-coding.jpg`
- `/images/uses/hardware-setup.jpg`

## 🎨 Placeholder System

**Currently Active**: All images show beautiful cyan-themed placeholders:

```
https://placehold.co/1200x675/1a1a1a/22d3ee?text=Alt+Text
```

**Features:**
- Dark background (#1a1a1a) matches your theme
- Cyan text (#22d3ee) matches neon-cyan
- Alt text displayed as placeholder label
- Proper dimensions (prevents layout shift)
- Professional appearance

**When to Replace:**
1. Add real image to `/public/images/`
2. Image component automatically detects and uses it
3. Falls back to placeholder if missing

## 🔧 Next.js Configuration

Your `next.config.ts` now includes:

```typescript
images: {
  formats: ["image/webp", "image/avif"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "placehold.co",  // Placeholder service
    },
  ],
}
```

**What this does:**
- Automatically converts JPG/PNG to WebP/AVIF
- Generates multiple sizes for responsive images
- Allows placehold.co domain for placeholders
- Optimizes images at build time

## 📏 Recommended Image Sizes

| Component | Width | Height | Aspect | Format |
|-----------|-------|--------|--------|--------|
| Profile | 600px | 600px | 1:1 | JPG |
| Project Hero | 1400px | 800px | 7:4 | JPG |
| Architecture | 1400px | 800px | 7:4 | PNG |
| Screenshots | 1200px | 800px | 3:2 | PNG |
| Before/After | 1200px | 800px | 3:2 | PNG |
| Lifestyle | 800px | 600px | 4:3 | JPG |

## 🎬 Animation Details

### Loading Skeleton
```css
animate-pulse  /* Pulsing gray background */
scale-110 blur-lg  /* Blurred large preview */
→ scale-100 blur-0  /* Sharp final image */
```

### Hover Effects
```css
group-hover:scale-105  /* Slight zoom */
group-hover:border-cyan-500/50  /* Cyan border glow */
opacity-0 → opacity-100  /* Zoom icon fade in */
```

### Gallery Stagger
```tsx
transition={{ delay: index * 0.1 }}
// Image 1: 0ms
// Image 2: 100ms
// Image 3: 200ms
// etc.
```

### Zoom Modal
```tsx
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0 }}
```

## 🎨 Styling Customization

### Change Border Color
```tsx
// In OptimizedImage component
className="border border-cyan-500/50"  // Change cyan-500 to orange-500
```

### Adjust Hover Scale
```tsx
// In OptimizedImage component
className="group-hover:scale-105"  // Change to scale-110 for more zoom
```

### Modify Grid Columns
```tsx
<ImageGrid columns={4} />  // Use 4 columns on large screens
```

### Custom Gap Size
```tsx
<ImageGrid gap={8} />  // Larger gaps between images
```

## 🔥 Pro Tips

### 1. Lazy Loading
- `priority={true}` for above-fold images
- Automatic lazy loading for below-fold
- Reduces initial page load time

### 2. Caption Usage
```tsx
<OptimizedImage
  caption="This caption appears below the image in italic gray"
/>
```

### 3. Disable Zoom
```tsx
<OptimizedImage
  zoomable={false}  // For profile photos or small icons
/>
```

### 4. Object Fit
```tsx
<OptimizedImage
  objectFit="contain"  // Instead of "cover" to show full image
/>
```

### 5. Architecture Diagrams
- Export from Excalidraw/Figma as PNG
- Use transparent background
- Include labels and arrows
- Match your cyan/orange/pink colors

### 6. Before/After Images
- Must be identical dimensions
- Same camera angle/perspective
- Clear visual difference
- Add "Before" and "After" labels in image itself

## 📊 Performance Impact

**With Optimization:**
- WebP: ~25-35% smaller than JPG
- AVIF: ~50% smaller than JPG
- Lazy loading: Only loads visible images
- Responsive: Serves correct size for device

**Example Savings:**
- Original JPG: 500 KB
- Optimized WebP: 175 KB (65% savings)
- Mobile size: 50 KB (90% savings)

## 🐛 Troubleshooting

### Image Not Showing?
1. Check file path is correct
2. Verify image is in `/public/images/`
3. Ensure filename matches exactly (case-sensitive)
4. Clear `.next` cache: `rm -rf .next`

### Placeholder Not Loading?
1. Check internet connection (placehold.co is external)
2. Verify `next.config.ts` includes placehold.co in remotePatterns
3. Check browser console for CORS errors

### Zoom Not Working?
1. Ensure `zoomable={true}` prop
2. Check no parent element has `overflow: hidden`
3. Verify z-index is high enough (9999)

### Slow Image Loading?
1. Optimize images before uploading (use TinyPNG)
2. Keep file sizes under 500 KB
3. Use WebP/AVIF formats
4. Enable priority loading for hero images

## 🎯 Next Steps

1. **Add First Image**: 
   ```bash
   # Copy your portrait
   cp ~/Desktop/my-photo.jpg public/images/profile/portrait.jpg
   ```

2. **Test Locally**:
   ```bash
   npm run dev
   # Visit http://localhost:3000/about
   ```

3. **Add Project Images**:
   - Take screenshots of your projects
   - Create architecture diagrams
   - Organize in project folders

4. **Optimize Performance**:
   ```bash
   # Build and analyze
   npm run build
   npm run start
   ```

5. **Deploy**:
   - Vercel automatically optimizes images
   - No additional configuration needed

## 📚 Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [TinyPNG - Image Compression](https://tinypng.com/)
- [Excalidraw - Diagrams](https://excalidraw.com/)
- [Squoosh - Image Optimizer](https://squoosh.app/)
- [Placeholder Service](https://placehold.co/)

---

**You're all set!** 🎉

The image system is fully functional with beautiful placeholders. Add real images whenever you're ready - the components handle everything automatically.
