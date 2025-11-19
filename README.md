# White Label UI - Next.js Template

A Next.js template project for building pages using components from [`@dejstdm/white-label-ui`](https://github.com/dejstdm/white-label-ui-lib), a component library with a role-based theming system.

## Overview

This template provides a starting point for creating pages using **only** components from the `@dejstdm/white-label-ui` package. All UI components, styling, and theming are handled by the library, enabling rapid brand customization through configuration rather than code changes.

**Core Principle**: Pages are composed exclusively using white-label-ui components. No custom React components or CSS for page content.

## Features

- ✅ Pre-configured Next.js App Router setup
- ✅ White-label UI component library integration
- ✅ Theme system support (default, 7up, lays, and more)
- ✅ TypeScript support
- ✅ Mobile-first responsive components
- ✅ CMS-ready (components accept HTML strings from rich text editors)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

   The project includes a `.npmrc` file that configures npm to use GitHub Packages for the `@dejstdm/white-label-ui` package. No additional authentication is required for public packages.

2. **If installation fails with authentication errors:**
   
   If you encounter authentication errors when installing `@dejstdm/white-label-ui`, you may need to authenticate with GitHub Packages. Create a GitHub Personal Access Token with `read:packages` permission and add it to your `~/.npmrc`:
   
   ```bash
   # Create/edit ~/.npmrc in your home directory
   echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc
   ```
   
   **Note:** Never commit your personal access token to the repository. Keep it in your user-level `~/.npmrc` file only.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Components

### Navigation & Layout
- `NavBar` - Navigation bar with sticky option, menu items, mobile burger menu
- `Footer` - Footer with logo, links, and content sections

### Hero Section
- `Hero` - Full-width hero section with background image, headline, body content, optional button

### Content Sections
- `TextSection` - Text content section with headline and WYSIWYG content
- `ImageSection` - Image gallery section with optional slider/carousel

### Feature Components
- `ProductSlider` - Product carousel/slider with navigation controls
- `RecipeSlider` - Recipe carousel/slider with navigation and pagination
- `FAQ` - FAQ accordion with expandable questions/answers
- `SocialMediaFeed` - Social media feed component

### Social Icons
- `FacebookIcon`, `InstagramIcon`, `XTwitterIcon` - React SVG icon components

## Usage Example

```typescript
import { Hero, TextSection, ImageSection, Footer } from '@dejstdm/white-label-ui';

export default function HomePage() {
  return (
    <>
      <Hero 
        backgroundImage="/hero.jpg"
        headline="Welcome to Our Site"
        body="<p>Discover amazing products and services.</p>"
        buttonLabel="Get Started"
        buttonHref="/products"
      />
      <TextSection 
        headline="About Us"
        text="<p>We are a company dedicated to excellence...</p>"
      />
      <ImageSection images={imageData} />
    </>
  );
}
```

## Theming

### Default Theme

The default theme is automatically included. Just import the styles in your `layout.tsx`:

```typescript
import '@dejstdm/white-label-ui/dist/style.css';
```

### Custom Themes

To use a different theme (e.g., `7up`):

```typescript
// layout.tsx
import '@dejstdm/white-label-ui/dist/style.css';
import '@dejstdm/white-label-ui/themes/7up/dist/theme.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="7up">
      <body>{children}</body>
    </html>
  );
}
```

**Available themes**: `default`, `7up`, `lays` (check package for latest)

## Important Rules

1. **Use only white-label-ui components** - No custom React components for page content
2. **No custom CSS** - All styling comes from the component library and themes
3. **CMS content** - Components accept HTML strings from rich text editors (e.g., `headline="<h2>Title</h2>"`)
4. **Swiper CSS** - If using slider components, import Swiper CSS:
   ```typescript
   import 'swiper/css';
   import 'swiper/css/navigation';
   import 'swiper/css/pagination';
   ```

For detailed rules and guidelines, see [`AGENTS.md`](./AGENTS.md).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme imports
│   ├── page.tsx            # Home page using white-label-ui components
│   └── [routes]/           # Additional pages
└── ...
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Resources

- **Component Library**: [`@dejstdm/white-label-ui`](https://github.com/dejstdm/white-label-ui-lib)
- **Source Repository**: [white-label-ui-lib](https://github.com/dejstdm/white-label-ui-lib)
- **Project Rules**: See [`AGENTS.md`](./AGENTS.md) for detailed development guidelines
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
