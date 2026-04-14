# Design System Specification: High-End Market Intelligence

## 1. Overview & Creative North Star: "The Silent Authority"
This design system is built upon the concept of **"The Silent Authority."** In the volatile, high-noise world of cryptocurrency, the interface must act as a calming filter. It rejects the frantic "trading terminal" aesthetic in favor of a bespoke, editorial experience that feels curated and intentional.

We break the "template" look through **Intentional Asymmetry**. Rather than a rigid, repetitive grid, we use expansive whitespace and varying card widths to guide the eye toward critical data. The system utilizes tonal depth and layered transparency to create a sense of physical space, moving away from flat, lifeless digital interfaces.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep blacks and subtle greys, allowing the vibrant accent colors to communicate market sentiment with surgical precision.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning content. Boundaries must be defined solely through background color shifts.
- To separate a section, place a `surface-container-low` element against a `surface` background.
- Use `surface-container-highest` only for the most critical interactive elements to provide natural contrast.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of fine, dark glass. 
- **Base Layer:** `surface` (#131315)
- **Nested Content:** `surface-container-low` (#1b1b1d)
- **Interactive Cards:** `surface-container-high` (#2a2a2c)

### The "Glass & Gradient" Rule
To elevate the experience, use **Glassmorphism** for floating headers or navigation bars. Use `surface` at 70% opacity with a `20px` backdrop-blur. 
- **Signature CTA Texture:** For primary buttons or "Bullish" highlights, use a subtle linear gradient from `primary` to `primary-container`. This provides a "glow" that feels professional rather than flat.

---

## 3. Typography: Editorial Clarity
We utilize a high-contrast scale to ensure that market-moving data is unmistakable.

- **Display & Headlines:** Use `display-md` or `headline-lg` for portfolio totals and market caps. These should feel like a premium magazine title—grand and confident.
- **Data Points:** Use `title-md` for coin names and prices. The generous letter spacing in `label-sm` should be used for secondary metadata (e.g., "24H VOLUME") to maintain a clean, organized look.
- **Hierarchy through Weight:** Use `inter-bold` sparingly for primary headers and `inter-regular` for all body text to ensure the layout feels "light" and airy despite the dark theme.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional structural lines or heavy drop shadows.

- **The Layering Principle:** Place a `surface-container-lowest` card inside a `surface-container-low` section to create a soft, natural recess.
- **Ambient Shadows:** For "floating" elements like modals or dropdowns, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow must feel like ambient light blockage, not a dark smudge.
- **The "Ghost Border" Fallback:** If accessibility requirements demand a container edge, use the `outline-variant` token at **15% opacity**. Never use a 100% opaque border.
- **Dimensionality:** Backgrounds should never be flat. Use a subtle radial gradient of `surface-bright` in the top-left corner of the screen to simulate a soft studio light hitting the interface.

---

## 5. Components

### Buttons
- **Primary:** `primary` background with `on-primary` text. Use `xl` (1.5rem) roundedness for a pill-shaped, premium feel.
- **Secondary:** Glass-style. `surface-container-highest` at 40% opacity with a `backdrop-blur`.
- **States:** On hover, the `surface-tint` should provide a subtle 10% brightness increase.

### Cards & Data Lists
- **Rule:** Forbid divider lines. Use `spacing-lg` (vertical whitespace) or a shift from `surface-container-low` to `surface-container-high` to separate assets.
- **Roundedness:** All cards must use `xl` (1.5rem) or `lg` (1rem) corner radius to maintain the "Soft Minimalism" feel.

### Market Indicators (Chips)
- **Bullish:** `on-primary-container` text on a subtle `primary_fixed_dim` (at 20% opacity) background.
- **Bearish:** `on-tertiary-container` text on a `tertiary_fixed_dim` (at 20% opacity) background.
- **Caution:** `on-secondary-container` text on a `secondary_fixed_dim` background.

### Input Fields
- Avoid boxes. Use a simple `surface-container-highest` background with a `sm` (0.25rem) bottom-only accent of `surface-tint` that appears only on focus.

---

## 6. Do's and Don'ts

### Do
- **Do** use generous whitespace (at least 24px–32px) between unrelated data sets.
- **Do** use `on-surface-variant` for secondary labels to create a sophisticated grey-on-black hierarchy.
- **Do** favor large, "Apple-style" iconography with thin strokes (1.5pt).

### Don't
- **Don't** use pure white (#FFFFFF) for text. Use `on-surface` (#e4e2e4) to reduce eye strain and maintain the premium dark aesthetic.
- **Don't** use 1px dividers. If you feel the need for a line, you haven't used enough whitespace or tonal shift.
- **Don't** use aggressive animations. Transitions should be "Spring" based, feeling heavy and intentional (e.g., `0.4s cubic-bezier(0.16, 1, 0.3, 1)`).