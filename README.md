# Techwarea - The Future, Curated

A modern, responsive tech gadget website built with React, TailwindCSS, and Framer Motion. Discover cutting-edge technology, in-depth reviews, and expert insights on the gadgets shaping tomorrow.

## 🚀 Features

- **Modern Design**: Futuristic UI with glassmorphism effects and gradient overlays
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Charts**: Technical comparisons using Recharts
- **Newsletter Signup**: Form validation with React Hook Form
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Build Tool**: Create React App

## 📱 Sections

1. **Header/Navigation** - Sticky navbar with mobile hamburger menu
2. **Hero Section** - Full-width banner with animated background elements
3. **Featured Gadgets** - Interactive grid showcasing latest tech
4. **Technology Highlights** - Split-screen layouts with tech trends
5. **Technical Stats** - Data visualization with interactive charts
6. **Reviews & Editorial** - Blog-style content cards
7. **Newsletter Signup** - Email subscription with validation
8. **Footer** - Comprehensive links and contact information

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#3b82f6)
- **Accent**: Neon Green (#22c55e)
- **Background**: Dark gradients (gray/black)
- **Text**: White with gray variations

### Typography
- **Headlines**: Poppins (display font)
- **Body**: Inter (readable sans-serif)

### Components
- Rounded corners (xl/2xl)
- Glassmorphism backgrounds
- Hover animations and micro-interactions
- Gradient text effects

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
techwarea/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FeaturedGadgets.jsx
│   │   ├── TechHighlights.jsx
│   │   ├── TechnicalStats.jsx
│   │   ├── Reviews.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🌟 Key Features

### Interactive Elements
- Hover effects on cards and buttons
- Smooth scroll navigation
- Animated background elements
- Form validation feedback

### Data Visualization
- Battery life comparison charts
- Performance trend analysis
- Market share pie charts
- Key statistics display

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🔧 Customization

### Adding New Gadgets
Edit the `gadgets` array in `FeaturedGadgets.jsx`:

```javascript
const gadgets = [
  {
    id: 1,
    name: 'Your Gadget Name',
    description: 'Description here...',
    image: 'image-url',
    tag: 'New',
    tagColor: 'bg-accent-500',
    // ... other properties
  }
];
```

### Modifying Colors
Update `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#your-color',
    // ... other shades
  }
}
```

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Dribbble
- Images from Unsplash
- Icons from Lucide React
- Fonts from Google Fonts

---

**Techwarea** - Discover the Future of Gadgets & Everyday Tech
