# A2Z Cooling - Service Business Website Showcase

A modern, high-performance, and visually stunning website built for a cooling and appliance service business. This project demonstrates high-end web design techniques, including glassmorphism, fluid animations, and a vibrant custom design system.

## 🚀 Key Features

- **Premium Aesthetics**: Interactive glassmorphic components, vibrant gradients, and modern typography using the "Inter" font family.
- **Responsive Design**: Fully optimized for all device sizes, from mobile phones to high-resolution desktops.
- **Dynamic Content**: Data-driven architecture where services, testimonials, and business info are managed via a centralized configuration.
- **Interactive Experience**: 
  - Infinite testimonial scrolling.
  - Multi-colored vibrant service category cards.
  - Smooth "Fade In" scroll animations.
  - Integrated WhatsApp enquiry system.
  - Embedded Google Maps location.
- **Dark/Light Harmony**: Strategic use of dark sections and light "Ice" backgrounds for maximum visual impact.

## 🛠️ Technical Stack

- **Core Framework**: React 19 (Functional Components & Hooks)
- **Language**: TypeScript (Strongly typed for stability and scalability)
- **Build Tool**: Vite (Lightning-fast development and optimized production builds)
- **Routing**: React Router DOM 7
- **Icons**: Lucide React (Dynamically rendered components)
- **Styling**: Vanilla CSS with custom design tokens (no heavy utility frameworks for maximum performance and pixel-perfect control)

## 📄 Site Structure

The application consists of **5 main pages** and multiple specialized components:

1.  **Home**: High-impact hero section, business metrics, and service previews.
2.  **About**: Detailed business history, mission, vision, and core values.
3.  **Services**: A comprehensive grid of expert solutions with vibrant, category-specific coloring.
4.  **Testimonials**: Real customer stories with star ratings and a high-end card layout.
5.  **Contact**: Advanced form with validation, quick-action WhatsApp integration, and interactive map.

### Core Components
- **DynamicIcon**: A flexible wrapper for managing Lucide icons via string identifiers.
- **FadeInSection**: An Intersection Observer-based utility for scroll-triggered entrance animations.
- **PageHeader**: A reusable, premium header component with supporting background visual options.
- **Footer**: A feature-rich footer including internal linking, business info, and social integration.

## 📂 Project Organization

```text
src/
├── assets/         # Project images and visual assets
├── components/     # Reusable UI components
├── data/           # Centralized data and business constants
├── pages/          # Individual page components (5 total)
├── App.tsx         # Main routing and layout configuration
└── index.css       # Core design system and global styles
```

## ⚙️ Development

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---
*Note: Business-specific details (phone, email, address) are centralized in `src/data/constants.ts` for easy updates.*
