# Gentiq AI Marketing Website

A modern, responsive marketing website for Gentiq AI - Mission control for enterprise prompts.

## Features

- **Modern Design**: Beautiful gradient backgrounds and clean typography
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Email signup forms with Google Forms integration
- **Performance**: Built with React and optimized for speed
- **Accessible**: Follows web accessibility best practices

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive design** with mobile-first approach

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── FeaturesSection.tsx
│   ├── DifferentiatorsSection.tsx
│   ├── PricingSection.tsx
│   ├── CompatibilitySection.tsx
│   ├── FinalCTASection.tsx
│   └── Footer.tsx
├── App.tsx
├── index.tsx
└── index.css
```

## Sections

1. **Header** - Navigation with logo and CTA button
2. **Hero** - Main value proposition with email signup
3. **Problem** - Identifies pain points with current prompt management
4. **Solution** - Introduces PromptOps approach
5. **Features** - 5-step workflow (Design, Deploy, Test, Evolve, Govern)
6. **Differentiators** - What makes Gentiq AI unique
7. **Pricing** - Three-tier pricing structure
8. **Compatibility** - Integration capabilities
9. **Final CTA** - Last chance to convert visitors
10. **Footer** - Links and company information

## Customization

- Colors and styling can be modified in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

## License

Private - All rights reserved.
