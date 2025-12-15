# AGENTS.md - White Label UI Template Project Rules

## Quick Reference

**Core Principle**: All pages MUST be composed exclusively using components from `@dejstdm/white-label-ui`. No custom React components, custom styling, or direct HTML structure should be used for page content.

For project setup and theming overview, see [`README.md`](./README.md).

**Available Components ONLY**:
- NavBar, Footer, Hero, TextSection, ImageSection, ProductSlider, ProductOverview, ProductDetail, RecipeSlider, RecipeOverview, FAQ, SocialMediaFeed

**If component doesn't exist**: Refuse with exact message (see CRITICAL RULE below). DO NOT create substitutes.

**Enforcement**: `npm run lint` runs a custom ESLint rule (`white-label-ui/only-white-label-components`) that blocks non-allowed UI components and invalid imports.

---

## Do

- Use ONLY components from `@dejstdm/white-label-ui` (see list above)
- Import from: `import { ComponentName } from '@dejstdm/white-label-ui'`
- Use TypeScript for all files
- Check type definitions in `node_modules/@dejstdm/white-label-ui/dist/index.d.ts`
- Use functional components with const
- Import CSS: `@dejstdm/white-label-ui/dist/style.css`
- Import Swiper CSS if using sliders: `swiper/css`, `swiper/css/navigation` (and `swiper/css/pagination` for `RecipeSlider`)
- Use Font Awesome icons: `fa-brands fa-square-facebook` format
- Compose pages using only white-label-ui components
- Use existing components creatively to achieve layouts

## Don't

- DO NOT create custom React components
- DO NOT use HTML elements as UI components (`<button>`, `<div>`, `<section>`, etc.). Only the basic document tags listed in section 1.3 are allowed.
- DO NOT import UI components from other libraries
- DO NOT create wrapper components (exception: `RootLayout` / `SiteLayout` are allowed by ESLint for layout-only composition)
- DO NOT use existing components as substitutes for non-existent components
- DO NOT add custom CSS for page styling
- DO NOT use inline styles
- DO NOT hardcode colors, fonts, or spacing
- DO NOT modify or extend existing components
- DO NOT suggest workarounds using HTML elements

---

## Commands

### File-scoped checks (preferred - faster)
```bash
# Type check a single file
npm run type-check -- --noEmit src/app/page.tsx

# Lint a single file
npm run lint -- src/app/page.tsx

# Format (if you have prettier)
# npx prettier --write src/app/page.tsx
```

### Full project checks
```bash
# Type check entire project
npm run type-check

# Lint entire project
npm run lint

# Build project
npm run build

# Development server
npm run dev
```

**Note**: Always type-check and lint updated files. Use full project build sparingly.

---

## Safety and Permissions

**Allowed without asking**:
- Read files, list files
- Type-check single files
- Lint single files
- Run dev server for testing

**Ask first**:
- Package installs (`npm install`)
- Git operations (commit, push, etc.)
- Deleting files
- Running full build
- Creating new files outside `src/app/` (pages only)

---

## Project Structure

- **Pages**: `src/app/page.tsx`, `src/app/[routes]/page.tsx`
- **Layout**: `src/app/layout.tsx` (import CSS here)
- **Components**: NONE - use only from `@dejstdm/white-label-ui`
- **Types**: Check `node_modules/@dejstdm/white-label-ui/dist/index.d.ts`
- **Metadata**: `node_modules/@dejstdm/white-label-ui/dist/meta/*.meta.js` (for Fusion)
- **Themes**: `node_modules/@dejstdm/white-label-ui/themes/<brand>/dist/theme.css`

---

## Good and Bad Examples

### ✅ Good - Using existing components
```typescript
import { Hero, TextSection, ProductSlider } from '@dejstdm/white-label-ui';

export default function HomePage() {
  return (
    <>
      <Hero headline="Welcome" body="<p>Content</p>" />
      <ProductSlider products={products} />
      <TextSection headline="About" text="<p>Info</p>" />
    </>
  );
}
```

### ❌ Bad - Creating custom components
```typescript
// DON'T DO THIS
const Button = ({ label }) => <button>{label}</button>;
const ProductCard = ({ product }) => <div>...</div>;
```

### ❌ Bad - Using HTML as components
```typescript
// DON'T DO THIS
<button onClick={...}>Click me</button>
<div className="custom-card">...</div>
```

### ❌ Bad - Using existing component as substitute
```typescript
// DON'T DO THIS - if user asks for "ProductComparison", don't use TextSection
<TextSection headline="Product Comparison" text="..." />
// Instead: REFUSE with the exact message
```

### ✅ Good - Footer with social icons
```typescript
import { Footer } from '@dejstdm/white-label-ui';

const socialLinks = [
  { name: 'Facebook', href: '...', icon: 'fa-brands fa-square-facebook' }
];
<Footer socialLinks={socialLinks} />
```

---

## PR Checklist

Before submitting code:
- [ ] Type check passes: `npm run type-check`
- [ ] Lint passes: `npm run lint`
- [ ] Only uses components from `@dejstdm/white-label-ui`
- [ ] No custom React components created
- [ ] No custom CSS added
- [ ] No HTML elements used as UI components
- [ ] All imports from `@dejstdm/white-label-ui` only
- [ ] Swiper CSS imported if using sliders
- [ ] Font Awesome CSS imported if using social icons

---

## Project Overview

This is a **Next.js template project** for creating pages using **ONLY** components from the `@dejstdm/white-label-ui` NPM package. The package is developed in the [white-label-ui-lib](https://github.com/dejstdm/white-label-ui-lib) repository and published to NPM as `@dejstdm/white-label-ui`.

---

## ⚠️ CRITICAL RULE: Handling Non-Existent Components

**THIS IS THE MOST IMPORTANT RULE - MUST BE OBEYED ALWAYS, WITH NO EXCEPTION**

If a user requests a component that does NOT exist in `@dejstdm/white-label-ui`, you MUST:

1. **IMMEDIATELY STOP** - Do not attempt to create, substitute, or work around the missing component
2. **DO NOT** create custom components
3. **DO NOT** use HTML elements as substitutes
4. **DO NOT** import components from other libraries
5. **DO NOT** suggest workarounds or alternatives using non-library components

**REQUIRED RESPONSE**: Reply with this exact message (no variations):

```
Thanks for the idea! We don't have that component in our White Label UI library yet. 
We can add it to the backlog, or you can choose an existing component instead.
```

**How to Verify Component Existence**:
- Check the list of available components in section 1.1 below
- Verify in `node_modules/@dejstdm/white-label-ui/dist/index.d.ts` for exported components
- If unsure, assume the component does NOT exist and use the refusal message above

**This rule applies to**:
- Builder.io Fusion AI agents
- Any AI assistant working on this project
- Human developers (who should request components in the source repository)

**NO EXCEPTIONS** - Even if the requested component seems simple or similar to existing ones, you must refuse and direct the user to contact the development team.

---

## 1. Component Usage Rules

### 1.1 Allowed Components

**ONLY** use components exported from `@dejstdm/white-label-ui`:

#### Navigation & Layout
- `NavBar` - Navigation bar with sticky option, menu items, mobile burger menu
- `Footer` - Footer with logo, links, and content sections

#### Hero Section
- `Hero` - Full-width hero section with background image, headline, body content, optional button

#### Content Sections
- `TextSection` - Text content section with headline and WYSIWYG content
- `ImageSection` - Image gallery section with optional slider/carousel

#### Product Components
- `ProductSlider` - Product carousel/slider with navigation controls
- `ProductOverview` - Product overview/listing component
- `ProductDetail` - Product detail component

#### Feature Components
- `RecipeSlider` - Recipe carousel/slider with navigation and pagination
- `RecipeOverview` - Recipe overview/listing component
- `FAQ` - FAQ accordion with expandable questions/answers
- `SocialMediaFeed` - Social media feed component

#### Social Icons (Font Awesome)
Social icons use **Font Awesome** icon classes. Components accept Font Awesome class strings for API integration.

### 1.2 Component Import Rules

**REQUIRED**: Import components ONLY from `@dejstdm/white-label-ui`:

```typescript
import { 
  NavBar, Hero, Footer, TextSection, ImageSection, 
  ProductSlider, ProductOverview, ProductDetail, RecipeSlider, RecipeOverview, FAQ, SocialMediaFeed
} from '@dejstdm/white-label-ui';
```

**⚠️ IMPORTANT**: If you try to import a component that doesn't exist, you will get:
- **TypeScript error**: `Module '"@dejstdm/white-label-ui"' has no exported member 'ComponentName'`
- **Runtime error**: `Attempted import error: 'ComponentName' is not exported from '@dejstdm/white-label-ui'`

**If a component is requested that doesn't exist**: See the **CRITICAL RULE** section above. Do NOT attempt to import it or create a substitute.

**Internal Components (NOT Exported)**:
The library contains internal primitives (e.g., `Container`, `Button`, `Heading`, `Text`, `WysiwygContent`) that are not part of the public API. Do not import anything other than the components listed in section 1.1.

If you see `Module '"@dejstdm/white-label-ui"' has no exported member 'X'`, the symbol is internal/not exported—follow the **CRITICAL RULE** and choose an exported component instead.

**FORBIDDEN**:
- Creating custom React components for page content
- Using raw HTML elements for layout/UI, except the basic document tags listed in section 1.3
- Importing UI components from other libraries
- Creating wrapper components around white-label-ui components (exception: `RootLayout` / `SiteLayout` layout-only wrappers allowed by ESLint)
- Attempting to import internal components (Container, Button, Heading, Text, WysiwygContent)
- Attempting to import non-existent components (use the refusal message from CRITICAL RULE section)

### 1.3 Next.js Framework Elements

**ALLOWED** Next.js-specific elements:
- `next/image` - For optimized images (when not using ImageSection)
- `next/link` - For Next.js routing (components may use this internally)
- `next/script` - For loading external scripts (rare; prefer library behavior)
- `next/head` - Legacy/head management (App Router users should prefer metadata exports)
- Next.js App Router structure (`layout.tsx`, `page.tsx`, route groups, etc.)
- Next.js metadata exports
- Next.js font optimization (`next/font`)

**ALLOWED** basic document HTML elements (for framework structure only, not UI/layout): `html`, `body`, `head`, `title`, `meta`, `link`, `script`

**FORBIDDEN**:
- Using Next.js Image/Link to create custom UI components
- Wrapping white-label-ui components unnecessarily

### 1.4 Peer Dependencies

**REQUIRED** peer dependencies (install separately):
- `react` (^19.2.3)
- `react-dom` (^19.2.3)
- `swiper` (^12.0.0) - Required for slider components (`ProductSlider`, `RecipeSlider`, `ImageSection`)

**Installation**:
```bash
npm install react@^19.2.3 react-dom@^19.2.3 swiper@^12.0.0
```

**Note**: This template already declares these packages in `package.json`. The versions above reflect the library’s peer dependency requirements.

### 1.5 Swiper CSS (Required for Slider Components)

If using slider components (`ProductSlider`, `RecipeSlider`, `ImageSection`), **MUST** import Swiper CSS:

```typescript
// In layout.tsx or page.tsx
import 'swiper/css';
import 'swiper/css/navigation';  // Required by: ProductSlider, RecipeSlider, ImageSection
import 'swiper/css/pagination';  // Required by: RecipeSlider
```

---

## 2. Page Composition Rules

### 2.1 Page Structure

Pages should be composed using white-label-ui components in a logical order:

**Typical Page Structure**:
1. `NavBar` (if not in layout)
2. `Hero` (optional, for landing pages)
3. `TextSection` / `ImageSection` (content sections)
4. `ProductSlider` / `ProductOverview` / `ProductDetail` / `RecipeSlider` / `RecipeOverview` (product/feature sections)
5. `FAQ` (if needed)
6. `SocialMediaFeed` (if needed)
7. `Footer` (if not in layout)

### 2.2 Layout Files

**`layout.tsx` Rules**:
- **MUST** import component styles: `@dejstdm/white-label-ui/dist/style.css` (includes default theme automatically)
- **OPTIONAL** for non-default themes: Import theme CSS: `@dejstdm/white-label-ui/themes/<brand>/dist/theme.css`
- **OPTIONAL** for non-default themes: Set `data-theme` attribute on `<html>` element: `<html data-theme="<brand>">`
- Can include `NavBar` and `Footer` if they appear on all pages
- Can use Next.js font optimization
- **FORBIDDEN**: Custom CSS classes or styling in layout

**Example Layout (Default Theme)**:
```typescript
import '@dejstdm/white-label-ui/dist/style.css';
import { NavBar, Footer } from '@dejstdm/white-label-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar {...navProps} />
        {children}
        <Footer {...footerProps} />
      </body>
    </html>
  );
}
```

**Example Layout (Custom Theme - 7up)**:
```typescript
import '@dejstdm/white-label-ui/dist/style.css';
import '@dejstdm/white-label-ui/themes/7up/dist/theme.css';
import { NavBar, Footer } from '@dejstdm/white-label-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="7up">
      <body>
        <NavBar {...navProps} />
        {children}
        <Footer {...footerProps} />
      </body>
    </html>
  );
}
```

**Example Layout (With Swiper CSS for Sliders)**:
```typescript
import '@dejstdm/white-label-ui/dist/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavBar, Footer } from '@dejstdm/white-label-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar {...navProps} />
        {children}
        <Footer {...footerProps} />
      </body>
    </html>
  );
}
```

### 2.3 Page Files

**`page.tsx` Rules**:
- MUST compose pages using ONLY white-label-ui components
- Components should be direct children or siblings (no custom wrapper divs)
- **FORBIDDEN**: Custom CSS modules, inline styles, or custom className props
- **FORBIDDEN**: Custom wrapper components or layout divs

**Example Page**:
```typescript
import { Hero, TextSection, ImageSection } from '@dejstdm/white-label-ui';

export default function HomePage() {
  return (
    <>
      <Hero {...heroProps} />
      <TextSection {...textProps} />
      <ImageSection {...imageProps} />
    </>
  );
}
```

---

## 3. Styling and Theming Rules

### 3.1 Theme System

**REQUIRED**:
- Use the theming system provided by `@dejstdm/white-label-ui`
- Import component styles: `@dejstdm/white-label-ui/dist/style.css` (default theme is automatically included)

**OPTIONAL** (for non-default themes):
- Import theme CSS: `@dejstdm/white-label-ui/themes/<brand>/dist/theme.css`
- Set `data-theme` attribute on `<html>` element: `<html data-theme="<brand>">`

**Available Themes**:
- `default` - Automatically included with `@dejstdm/white-label-ui/dist/style.css`, no additional import needed
- `7up` - Import from `@dejstdm/white-label-ui/themes/7up/dist/theme.css`
- `lays` - Import from `@dejstdm/white-label-ui/themes/lays/dist/theme.css`

**Theme Behavior**:
- Default theme works immediately after importing `dist/style.css` - no `data-theme` attribute needed
- Custom themes require both CSS import AND `data-theme` attribute on `<html>` element
- `data-theme` values match theme folder names (e.g. `data-theme="7up"`, `data-theme="lays"`)
- Themes use CSS variables scoped to `[data-theme="<theme>"]` selectors
To see all available themes after install, check `node_modules/@dejstdm/white-label-ui/themes/`.

**FORBIDDEN**:
- Custom CSS files for page styling (except minimal global resets if absolutely necessary)
- Inline styles on components
- CSS modules for page content
- Overriding component styles with custom CSS
- Using `!important` to override theme styles

### 3.2 CSS Variables

Components use CSS variables from the theme system. **DO NOT**:
- Override CSS variables directly
- Create custom CSS variables that conflict with theme variables
- Modify theme CSS files

### 3.3 Global Styles

**ALLOWED**:
- Minimal global resets in `globals.css` (if absolutely necessary)
- Next.js font variable definitions

**FORBIDDEN**:
- Component-specific styles
- Layout styles
- Theme overrides

---

## 4. Component Props and Configuration

### 4.1 Component Props

- Use component props as defined in the package
- Check Storybook documentation in [white-label-ui-lib](https://github.com/dejstdm/white-label-ui-lib) for available props
- Components accept CMS/content data through props
- All components are standalone and manage their own internal layout (each includes `Container` internally)

**Common prop patterns (verify in `.d.ts`)**:
- Most sections use `headline?: PlainText`, `subheadline?: HtmlString`, `headlineLevel?: HeadingLevel`
- `NavBar` uses `items?: NavBarItem[]` and `logoSrc?: string`
- `Footer` uses `links?: FooterLink[]`, `socialLinks?: FooterSocialLink[]`, and `logoSrc?: string`
- `ProductDetail` differs: `headline?: HtmlString` and `image` is required (plus `variant`)

### 4.2 CMS Content Handling

**Important**: Components accept HTML strings from CMS rich text editors for specific props:
- **HtmlString props** (`text`, `subheadline`, `body`, `description`, etc.) accept HTML strings (e.g., `"<h2>Title</h2>"`, `"<p>Description</p>"`)
- **PlainText props** (`headline`, `buttonLabel`, etc.) accept **plain text only** - no HTML tags
- Components use internal `WysiwygContent` component to render CMS HTML safely
- **DO NOT** wrap CMS HTML in React components - pass HTML strings directly to props
- Example: `text="<p>Our Products</p>"` (HtmlString) vs `headline="Our Products"` (PlainText)

### 4.3 Social Icons Usage (Font Awesome)

**Social icons use Font Awesome icon classes**. Components accept Font Awesome class strings for API integration.

**Font Awesome Icons**:
- **Facebook**: `fa-brands fa-square-facebook`
- **Instagram**: `fa-brands fa-square-instagram`
- **Twitter/X**: `fa-brands fa-square-x-twitter`

**Font Awesome CSS Requirement**:

**Required:** Import Font Awesome CSS in your application root (e.g., `src/app/layout.tsx`):

`@dejstdm/white-label-ui` includes `@fortawesome/fontawesome-free` as a dependency, so it is installed automatically when you install the library.

```typescript
// In src/app/layout.tsx
import '@fortawesome/fontawesome-free/css/all.min.css';
```

**Usage in Footer**:
```typescript
import { Footer } from '@dejstdm/white-label-ui';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/yourpage',
    icon: 'fa-brands fa-square-facebook'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/yourpage',
    icon: 'fa-brands fa-square-instagram'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourpage',
    icon: 'fa-brands fa-square-x-twitter'
  }
];

<Footer socialLinks={socialLinks} />
```

**Usage in SocialMediaFeed**:
```typescript
import { SocialMediaFeed } from '@dejstdm/white-label-ui';

const socialLinks = [
  {
    name: 'Follow us on Facebook',
    href: 'https://facebook.com/yourpage',
    icon: 'fa-brands fa-square-facebook'
  },
  {
    name: 'Follow us on Instagram',
    href: 'https://instagram.com/yourpage',
    icon: 'fa-brands fa-square-instagram'
  }
];

<SocialMediaFeed socialLinks={socialLinks} />
```

**Icon Styling**:
- Icon styling (size, color) is controlled by theme CSS, not component props
- Icons are **required** - no auto-detection, no fallbacks

### 4.4 Type Definitions and Type Safety

**REQUIRED**: Always check and respect type definitions from `@dejstdm/white-label-ui`:

- **Check type definitions** before using components - inspect `node_modules/@dejstdm/white-label-ui/dist/index.d.ts`
- **Prefer importing exported types** so your data and prop objects match the public API.
- **Respect prop types** - use props exactly as defined in the type definitions
- **Understand type distinctions**:
  - `PlainText` - Plain text only, no HTML (e.g., `headline`, `buttonLabel`)
  - `HtmlString` - HTML strings from CMS (e.g., `text`, `subheadline`, `body`)
- **Run type checking**: Use `npm run type-check` to verify types are correct
- **Note**: Both `PlainText` and `HtmlString` are type aliases for `string`, so TypeScript cannot distinguish them at compile time. You must manually ensure:
  - `PlainText` props receive plain text only
  - `HtmlString` props can receive HTML strings

**Exported types (from `index.d.ts`)**:

- **Utility/value types**: `HeadingLevel`, `HeadingVariant`, `TextSize`, `ButtonVariant`, `ButtonSize`, `CollapseMode`, `PlainText`, `HtmlString`, `ProductDetailVariant`
- **Data structure types**: `NavBarItem`, `FooterLink`, `FooterSocialLink`, `ImageItem`, `ProductItem`, `RecipeItem`, `FAQItem`, `SocialMediaFeedItem`, `SocialMediaFeedSocialLink`, `AccordionTriggerRender`, `AccordionItemData`
- **Component props types**: `NavBarProps`, `FooterProps`, `HeroProps`, `TextSectionProps`, `ImageSectionProps`, `ProductSliderProps`, `ProductOverviewProps`, `ProductDetailProps`, `RecipeSliderProps`, `RecipeOverviewProps`, `FAQProps`, `SocialMediaFeedProps`

**Common prop name patterns (quick reference; always verify in `.d.ts`)**:
- `NavBar`: `items` (not `menuItems`), `logoSrc` (not `logo`), `logoAlt`, `sticky`
- `Footer`: `logoSrc`, `logoAlt`, `socialLinks`, `links`, `copyright`, `copyrightYear`
- `Hero`: `headline` (PlainText), `subheadline`/`body` (HtmlString), `backgroundImage`, `buttonLabel`, `buttonHref`

**Example - Checking Types**:
```typescript
// Check the type definition first
import type { TextSectionProps } from '@dejstdm/white-label-ui';

// TextSectionProps.headline is PlainText (plain text only)
// TextSectionProps.text is HtmlString (can contain HTML)

// ✅ Correct usage
<TextSection 
  headline="Welcome"  // PlainText - no HTML
  text="<p>This is HTML content</p>"  // HtmlString - can contain HTML
/>

// ❌ Wrong - HTML in PlainText prop
<TextSection headline="<h2>Welcome</h2>" />  // TypeScript won't catch this, but it's wrong
```

### 4.5 Data Structure

- Components expect data in specific formats (check package documentation)
- Use TypeScript types from the package if available
- Pass data directly to components - no data transformation wrappers
- Components handle their own internal layout using the `Container` component (no need to wrap in containers)

---

## 5. Development Workflow

### 5.1 Adding New Components

**FORBIDDEN** in this template project:
- Creating new React components
- Modifying existing white-label-ui components
- Creating component wrappers
- Substituting missing components with custom code or HTML

**REQUIRED**:
- **If a component doesn't exist**: Follow the **CRITICAL RULE** section above - use the refusal message and direct users to contact the development team
- Request new components in the [white-label-ui-lib](https://github.com/dejstdm/white-label-ui-lib) repository
- Use existing components creatively to achieve desired layouts
- Check package documentation for component capabilities

### 5.2 Package Updates

- Regularly update `@dejstdm/white-label-ui` to latest version
- Check package changelog for breaking changes
- Test pages after package updates

### 5.3 Testing

- Test pages with different themes
- Verify responsive behavior (components are mobile-first)
- Test component prop variations
- Verify accessibility (components should include a11y features)

---

## 6. File Structure Rules

### 6.1 Allowed File Types

**ALLOWED**:
- `page.tsx` - Next.js page files using white-label-ui components
- `layout.tsx` - Next.js layout with theme imports
- `globals.css` - Minimal global styles only
- Route groups, dynamic routes, API routes (Next.js features)
- TypeScript type definitions (if needed for data)

**FORBIDDEN**:
- Custom component files (`components/` directory with React components)
- CSS modules for pages (`*.module.css` for page styling)
- Custom utility components
- Wrapper components

### 6.2 Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme imports
│   ├── page.tsx            # Home page using white-label-ui components
│   ├── globals.css         # Minimal global styles only
│   └── [routes]/           # Additional pages using white-label-ui components
└── ...
```

**FORBIDDEN**:
- `src/components/` - No custom components
- `src/lib/` - No custom utilities (unless for data fetching/API)
- `src/styles/` - No custom stylesheets

---

## 7. Code Quality Rules

### 7.1 TypeScript

- Use TypeScript for all files
- **Always check type definitions** from `@dejstdm/white-label-ui` before using components (see section 4.4)
- Import types from `@dejstdm/white-label-ui` if available
- Use `npm run type-check` to verify types are correct
- Respect prop types exactly as defined - do not pass incorrect types (e.g., HTML to PlainText props)
- Define data types for component props if needed

### 7.2 Code Style

- Follow Next.js and React best practices
- Use functional components
- Use const for component definitions
- Descriptive variable names
- Early returns when possible

### 7.3 Accessibility

- Components from white-label-ui should include accessibility features
- Ensure proper semantic HTML (components handle this)
- Test with keyboard navigation
- Test with screen readers

---

## 8. Common Patterns

### 8.1 Multi-Section Page

```typescript
import { Hero, TextSection, ImageSection, FAQ, Footer } from '@dejstdm/white-label-ui';

export default function AboutPage() {
  return (
    <>
      <Hero {...heroData} />
      <TextSection {...introData} />
      <ImageSection {...galleryData} />
      <TextSection {...storyData} />
      <FAQ {...faqData} />
    </>
  );
}
```

### 8.2 Product/Content Listing Page

```typescript
import { NavBar, ProductSlider, TextSection, Footer } from '@dejstdm/white-label-ui';

export default function ProductsPage() {
  return (
    <>
      <ProductSlider {...productsData} />
      <TextSection {...descriptionData} />
    </>
  );
}
```

### 8.3 Footer with Social Icons

```typescript
import { Footer } from '@dejstdm/white-label-ui';

export default function Layout() {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/yourpage',
      icon: 'fa-brands fa-square-facebook'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/yourpage',
      icon: 'fa-brands fa-square-instagram'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/yourpage',
      icon: 'fa-brands fa-square-x-twitter'
    }
  ];

  return (
    <Footer 
      socialLinks={socialLinks}
      links={footerLinks}
      copyright="Your Company"
      copyrightYear="2025"
    />
  );
}
```

---

## 9. Violations and Enforcement

### 9.1 What Constitutes a Violation

- Creating custom React components for UI
- Using custom CSS for component styling
- Wrapping white-label-ui components unnecessarily
- Using raw HTML for layout instead of components
- Importing UI components from other libraries
- Modifying component behavior with custom wrappers

### 9.2 How to Fix Violations

1. Identify the white-label-ui component that can replace custom code
2. Check component documentation for available props/features
3. Request new component in white-label-ui-lib if needed
4. Refactor to use white-label-ui components only

---

## 10. Package Information

### 10.1 Package Details

- **NPM Package**: `@dejstdm/white-label-ui`
- **Current Version**: Check `package.json` for the version used by this template
- **Registry**: GitHub Packages (`@dejstdm` scope)
- **Package Type**: ES Module (`"type": "module"`)

### 10.2 Installation

```bash
# Install the package
npm install @dejstdm/white-label-ui

# Install peer dependencies
npm install react react-dom swiper
```

**Note**: If installing from GitHub Packages, ensure your `.npmrc` is configured:
```
@dejstdm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

Set `NPM_TOKEN` to a GitHub Personal Access Token with `read:packages`, or use a user-level `~/.npmrc` token for `//npm.pkg.github.com/`.

## 11. Resources

- **NPM Package**: `@dejstdm/white-label-ui`
- **Source Repository**: [white-label-ui-lib](https://github.com/dejstdm/white-label-ui-lib)
- **Storybook**: Check repository for Storybook URL (components documentation)
- **Package README**: See package documentation for usage examples
- **Component Development Rules**: See `packages/components-react/AGENTS.md` in source repo
- **Architecture Documentation**: See `ARCHITECTURE.md` in source repo for design tokens, theming system, and constraints

---

## Summary

**Remember**: This template project is a **consumer** of `@dejstdm/white-label-ui`, not a developer of it. All UI must come from the package. If you need something that doesn't exist, request it in the source repository, don't build it here.

**Golden Rule**: If you're writing custom React components or CSS for page content, you're doing it wrong. Use white-label-ui components instead.
