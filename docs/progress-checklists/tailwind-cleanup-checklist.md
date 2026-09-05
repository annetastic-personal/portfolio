# Tailwind Cleanup Checklist

This checklist brings the portfolio toward a cleaner Tailwind-first styling approach with DaisyUI enabled and minimal custom CSS.

## Goal

- Keep the visual identity consistent with the existing palette
- Reduce custom CSS to global theme tokens and true exceptions
- Prefer Tailwind utility classes and DaisyUI primitives over hand-written CSS
- Make styling easier to maintain and scale

## Current state to align with

- Tailwind is installed and configured
- DaisyUI is installed and enabled in the project config
- The app still contains a mix of custom CSS and utility classes
- Some custom classes duplicate reusable UI patterns that Tailwind or DaisyUI can already handle

## Checklist

### 1. Theme tokens only in CSS

- [ ] Keep only palette variables, base resets, and app-wide theme values in `src/index.css`
- [ ] Move any repeated color tokens to CSS variables instead of hard-coded colors in component markup
- [ ] Keep dark mode variables centralized in the same global stylesheet

### 2. Reduce custom component classes

- [ ] Replace `.button-primary` with Tailwind utilities or DaisyUI button classes
- [ ] Replace `.button-secondary` with Tailwind utilities or DaisyUI button classes
- [ ] Replace `.button-cancel` with a consistent neutral utility pattern
- [ ] Replace `.badge` with DaisyUI badge classes or Tailwind utility combinations
- [ ] Replace `.section-title` with a reusable utility pattern instead of a custom CSS class

### 3. Convert inline styles to utility classes

- [ ] Replace inline `display: flex` patterns with `flex`
- [ ] Replace `gap`, `justifyContent`, and `alignItems` inline styles with Tailwind gap and alignment utilities
- [ ] Replace `margin` inline styles with Tailwind spacing utilities
- [ ] Replace custom width or max-width inline styles with Tailwind max-w or w utilities where possible

### 4. Keep CSS for global-only concerns

- [ ] Leave base typography rules in CSS only when they affect all pages
- [ ] Leave root layout shell styling in CSS only when it is truly global
- [ ] Avoid custom component CSS for simple repeated UI elements that could be utility-driven

### 5. Use DaisyUI for common UI patterns

- [ ] Use DaisyUI buttons for primary/secondary actions
- [ ] Use DaisyUI badges for status labels and tags
- [ ] Use DaisyUI card patterns where appropriate for sections or content blocks
- [ ] Favor semantic utility classes over repeated custom CSS classes

### 6. Simplify Tailwind config

- [ ] Keep the `content` paths explicit and correct
- [ ] Keep the `safelist` minimal and only for classes generated dynamically
- [ ] Avoid overusing safelist entries as a workaround for missing utility classes
- [ ] Add theme extensions only if the project clearly needs them

### 7. Review files with the highest drift

- [ ] Review `src/index.css` and trim it to theme-only and global-only rules
- [ ] Review `src/components/DesignGuide.jsx` for inline styles and repeated custom utility-like classes
- [ ] Review `src/components/layout/MainContainer.jsx` to keep it as the example of the preferred pattern
- [ ] Review other component files for repeated custom class names or inline styles

### 8. Target end state

- [ ] Most pages use Tailwind utilities directly in JSX
- [ ] DaisyUI handles common element patterns like buttons and badges where appropriate
- [ ] Custom CSS is reduced to variables, base config, and rare one-off cases
- [ ] The codebase reads like a consistent utility-first design system

## Recommended next pass

1. Clean up `src/index.css`
2. Replace custom buttons and badges with Tailwind or DaisyUI classes
3. Convert inline styles in `src/components/DesignGuide.jsx`
4. Re-run a quick visual review to confirm the design still matches the palette and layout intent

## Notes

This is a modernization pass, not a redesign. The goal is to preserve the current visual identity while making the styling system more consistent and maintainable.
