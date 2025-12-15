# CLAUDE.md - Component Development Rules for This Project

## Decision Flow: Before ANY Component Task

When working with `@dejstdm/white-label-ui` components, follow this flow **every time**:

### 1. Read AGENTS.md Section 4.4 (Type Definitions and Type Safety)
- This section is mandatory reading before touching any component code
- Key rule: Both `PlainText` and `HtmlString` are type aliases for `string` — TypeScript cannot distinguish them at compile time
- You must manually verify correct prop types by checking the actual type definitions

### 2. Check the Component's `.d.ts` File FIRST
Before writing or modifying any component code:
- Locate the component's type definition in `node_modules/@dejstdm/white-label-ui/dist/ComponentName.d.ts`
- Verify **exact prop names** (e.g., `items` not `menuItems`, `logoSrc` not `logo`)
- Verify **prop types** and which are `PlainText` vs `HtmlString`
- Never assume — always verify from the source

### 3. Check the `.d.ts` for Type Imports
- Some components export types that should be used (e.g., `NavBarItem`, `FooterLink`)
- Check `index.d.ts` for all available types
- Use imported types for data structures
  - Common ones: `NavBarItem`, `FooterLink`, `FooterSocialLink`, `ImageItem`, `ProductItem`, `RecipeItem`, `FAQItem`, `SocialMediaFeedItem`

### 4. Write Code Using Verified Props
- Use only the props confirmed from step 2
- Ensure `PlainText` props receive plain text only (no HTML)
- Ensure `HtmlString` props receive valid HTML strings
- Test with data matching the expected types

### 5. Run Type Checking
After any component changes:
```bash
npm run type-check -- --noEmit src/app/path/to/file.tsx
```

For full project type check:
```bash
npm run type-check
```

## Why This Matters

- **Previous mistake**: Used `menuItems` and `logo` props on NavBar instead of `items` and `logoSrc` (from index.d.ts) — this broke the component
- **Root cause**: Assumed prop names instead of checking `.d.ts` first
- **Prevention**: This decision flow catches such errors before preview

## Component Props Reference

Always verify in the actual type files, but common components include:

- **NavBar**: Uses `items` (array of `NavBarItem`), `logoSrc`, `logoAlt`, `sticky`
- **Footer**: Uses `logoSrc`, `logoAlt`, `socialLinks` (array of `FooterSocialLink`), `links` (array of `FooterLink`), `copyright`, `copyrightYear`
- **Hero**: Uses `headline` (PlainText), `body` (HtmlString), `backgroundImage`, `buttonLabel`, `buttonHref`
- **TextSection**: Uses `headline` (PlainText), `text` (HtmlString)
- **ProductOverview**: Verify props in `node_modules/@dejstdm/white-label-ui/dist/ProductOverview.d.ts`
- **ProductDetail**: Verify props in `node_modules/@dejstdm/white-label-ui/dist/ProductDetail.d.ts`

**Always check the `.d.ts` files to confirm before using.**

## No Exceptions

This flow applies to:
- Creating new page components
- Modifying component props
- Adding new components
- Updating existing component usage

No task is too simple to skip the type-checking step.
