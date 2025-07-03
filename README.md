# 🎉 Happy Birthday Website

A beautiful, interactive birthday celebration website built with React, featuring animations, auto-playing media, and engaging user interactions.

## 🌟 Features

### Section 1: Hero Birthday Message
- **Animated greeting**: "Happy Birthday Aman Didi!" with celebration text effects
- **Flying balloons**: 8 animated balloons floating across the screen
- **Interactive cake**: Click the birthday cake to see it slice into 8 pieces with animation
- **Floating emojis**: Birthday-themed emojis with smooth floating animations
- **Scroll indicator**: Animated scroll prompt to guide users

### Section 2: Congratulations & Auto-playing Song
- **Celebration card**: Beautifully styled congratulations message
- **Auto-playing audio**: Birthday song automatically plays when section comes into view
- **Inspirational quote**: Themed birthday message with elegant styling
- **Visual feedback**: Audio playing indicator with pulse animation

### Section 3: Video Gallery
- **Video upload**: Upload and display custom birthday videos
- **Auto-play**: Videos automatically start when scrolled into view
- **Responsive design**: Proper aspect ratio and mobile-friendly layout
- **Upload interface**: Drag-and-drop style upload area when no video is present

### Section 4: Photo & Memes Gallery
- **Multi-image upload**: Upload multiple photos and memes
- **Carousel display**: Scrollable gallery using Embla Carousel
- **Responsive grid**: Images display beautifully on all screen sizes
- **Hover effects**: Smooth scale transitions on image hover

### Section 5: Final Wishes
- **Second video section**: Additional video upload for final messages
- **Multiple quotes**: Three beautifully styled inspirational birthday quotes
- **Gradient backgrounds**: Different styled quote cards for visual variety
- **Auto-play support**: End video plays automatically when section is visible

## 🎨 Design System

### Color Palette
- **Primary**: Pink (#e91e63) - Main brand color for text and accents
- **Secondary**: Yellow (#ffd54f) - Complementary color for highlights
- **Accent**: Purple (#ba68c8) - Used for special elements
- **Additional**: Blue, green, and red variants for balloons and decorations

### Gradients
- **Celebration**: Pink to purple gradient for main text
- **Balloons**: Gold to yellow gradient for balloon effects
- **Hero**: Subtle background gradient from white to pink

### Animations
- **Bounce-in**: Entry animation for main elements
- **Float**: Continuous floating motion for emojis and decorations
- **Fly-balloon**: Complex balloon flying animation across screen
- **Tada**: Celebration emphasis animation
- **Slide-up**: Section reveal animations
- **Cake slicing**: Custom 8-piece cake explosion animation

## 🛠️ Technical Implementation

### Built With
- **React 18.3.1** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality component library
- **Embla Carousel** - Smooth carousel implementation
- **React Router** - Client-side routing
- **Vite** - Fast build tool and development server

### Key Dependencies
- `@radix-ui/*` - Accessible component primitives
- `embla-carousel-react` - Carousel functionality
- `tailwindcss-animate` - Animation utilities
- `class-variance-authority` - Component variant management
- `clsx` - Conditional className utility

### File Structure
```
src/
├── components/ui/          # Reusable UI components
├── pages/
│   ├── Index.tsx          # Main birthday page (403 lines)
│   └── NotFound.tsx       # 404 error page
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── index.css             # Design system and animations
└── App.tsx               # Main application component
```

## 🚀 Development Setup

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started
```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start development server
npm run dev

# Step 5: Build for production
npm run build
```

### Development Options

**Use Lovable** (Recommended)
- Visit the [Lovable Project](https://lovable.dev/projects/77a900ca-397d-4ff2-b1ce-5f62cff85b71)
- Make changes through AI prompting
- Changes are automatically committed

**Use Your IDE**
- Clone and edit locally
- Push changes to sync with Lovable

**GitHub Codespaces**
- Click "Code" → "Codespaces" → "New codespace"
- Edit directly in browser

## 🎯 Usage Guide

### Customization

#### Changing the Birthday Person's Name
Edit the name in `src/pages/Index.tsx`:
```tsx
<h2 className="text-4xl md:text-6xl font-semibold text-accent mb-12">
  Your Name Here! 🎉
</h2>
```

#### Modifying Colors
Update the design system in `src/index.css`:
```css
:root {
  --birthday-pink: 320 80% 60%;
  --birthday-gold: 45 100% 60%;
  /* Add your custom colors */
}
```

#### Adding New Sections
1. Create a new section in `Index.tsx`
2. Add intersection observer logic for animations
3. Include section ID in the observer setup

### Adding Media
- **Videos**: Click upload areas in sections 3 and 5
- **Images**: Use the multi-file upload in section 4
- **Audio**: Replace the audio source URL in section 2

## 🎈 Key Features Explained

### Intersection Observer
The website uses Intersection Observer API to:
- Trigger animations when sections come into view
- Auto-play videos at the right time
- Start the birthday song automatically
- Create smooth scroll-triggered experiences

### Cake Interaction
The birthday cake has two states:
- **Whole cake**: Clickable 🎂 emoji with hover effects
- **Sliced cake**: 8 animated pieces (🧁) flying apart with staggered timing

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Fluid typography scaling from mobile to desktop
- Touch-friendly interactive elements
- Optimized image and video displays

### Performance Optimizations
- Lazy loading of heavy assets
- Efficient animation using CSS transforms
- Intersection observer for conditional rendering
- Optimized bundle size with tree-shaking

## 🎭 Animation Details

### Balloon Animation
Each balloon has:
- Individual animation delays (0.8s intervals)
- Unique positioning (12% spacing)
- Color cycling through 6 theme colors
- 8-second infinite flight path

### Cake Slicing Animation
- 8 individual cake pieces
- Each piece has unique keyframe animation
- Staggered delays (0.1s intervals)
- Pieces fly in different directions with rotation

## 📱 Browser Support

- Modern browsers with ES6+ support
- Chrome 88+
- Firefox 88+
- Safari 14+
- Edge 88+

## 🔧 Development Notes

### Performance Considerations
- The main `Index.tsx` file is 403 lines and should be refactored into smaller components
- Consider splitting the large file into focused components:
  - `HeroSection.tsx`
  - `CongratulationsSection.tsx`
  - `VideoSection.tsx`
  - `GallerySection.tsx`
  - `WishesSection.tsx`
  - `BirthdayCake.tsx`
  - `FlyingBalloons.tsx`

### Potential Improvements
- Add error handling for media uploads
- Implement loading states for video processing
- Add accessibility features (ARIA labels, keyboard navigation)
- Consider adding sound controls for the auto-playing audio
- Add image optimization and compression

## 🚀 Deployment

Simply open [Lovable](https://lovable.dev/projects/77a900ca-397d-4ff2-b1ce-5f62cff85b71) and click on Share → Publish.

## 🌐 Custom Domain

To connect a custom domain:
1. Navigate to Project > Settings > Domains
2. Click Connect Domain
3. Follow the setup instructions

Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📄 License

This project is created for personal birthday celebrations. Feel free to adapt and use for your own special occasions!

---

Made with ❤️ for birthday celebrations 🎂✨
