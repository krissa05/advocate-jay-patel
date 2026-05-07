---
name: Sovereign Counsel
colors:
  surface: "#121414"
  surface-dim: "#121414"
  surface-bright: "#38393a"
  surface-container-lowest: "#0d0f0f"
  surface-container-low: "#1a1c1c"
  surface-container: "#1e2020"
  surface-container-high: "#282a2b"
  surface-container-highest: "#333535"
  on-surface: "#e2e2e2"
  on-surface-variant: "#d1c5b4"
  inverse-surface: "#e2e2e2"
  inverse-on-surface: "#2f3131"
  outline: "#9a8f80"
  outline-variant: "#4e4639"
  surface-tint: "#e9c176"
  primary: "#e9c176"
  on-primary: "#412d00"
  primary-container: "#c5a059"
  on-primary-container: "#4e3700"
  inverse-primary: "#775a19"
  secondary: "#c8c6c5"
  on-secondary: "#313030"
  secondary-container: "#4a4949"
  on-secondary-container: "#bab8b7"
  tertiary: "#c9c6c5"
  on-tertiary: "#313030"
  tertiary-container: "#a7a5a4"
  on-tertiary-container: "#3c3b3b"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#ffdea5"
  primary-fixed-dim: "#e9c176"
  on-primary-fixed: "#261900"
  on-primary-fixed-variant: "#5d4201"
  secondary-fixed: "#e5e2e1"
  secondary-fixed-dim: "#c8c6c5"
  on-secondary-fixed: "#1c1b1b"
  on-secondary-fixed-variant: "#474646"
  tertiary-fixed: "#e5e2e1"
  tertiary-fixed-dim: "#c9c6c5"
  on-tertiary-fixed: "#1c1b1b"
  on-tertiary-fixed-variant: "#474646"
  background: "#121414"
  on-background: "#e2e2e2"
  surface-variant: "#333535"
typography:
  display-xl:
    fontFamily: Newsreader
    fontSize: 80px
    fontWeight: "300"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: "400"
    lineHeight: "1.2"
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: "400"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: 0.15em
spacing:
  unit: 8px
  margin-page: 64px
  gutter-grid: 32px
  section-padding: 120px
---

## Brand & Style

The design system is engineered to project absolute authority, intellectual rigor, and discretionary luxury. It moves away from traditional legal tropes—gavel icons and mahogany textures—in favor of a cinematic, "Dark Mode" aesthetic that mirrors the atmosphere of high-stakes litigation.

The style is **Ultra-Minimalist Luxury**. It leverages expansive negative space to create a "gallery" feel, where every word and element carries significant weight. Drawing influence from the precise craftsmanship of Tesla and the tactile minimalism of Aesop, the UI utilizes matte finishes and razor-thin hairlines to establish depth without visual noise. The emotional response is one of calm confidence; the interface does not shout, it commands.

## Colors

The palette is strictly limited to maintain a prestigious editorial tone.

- **Primary (#C5A059):** A restrained matte gold. It is used exclusively for high-level emphasis, call-to-action borders, and critical signatures. It should never be used as a large-scale fill or gradient.
- **Backgrounds (#0A0A0A, #121212):** A dual-tone black system. The deeper black provides the base, while the slightly lighter charcoal creates subtle structural separation for containers and navigation bars.
- **Typography (#E5E5E5):** An off-white gray that reduces eye strain in dark environments while maintaining high legibility against the matte backgrounds.

## Typography

This design system uses a high-contrast typographic pairing. **Newsreader** provides a classic, literary authority for headings, suggesting a legacy of winning arguments and profound expertise. Headlines should be set with tight tracking to appear powerful and cohesive.

**Inter** is the functional counterpoint. For body text, use a generous line height (1.6) to ensure the legal copy feels breathable and digestible. Labels and small metadata should always be set in uppercase Inter with expanded letter spacing to evoke the feeling of high-end watchmaking or luxury automotive branding.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model with extreme margins. Content is centered within a generous container to focus the user's attention, avoiding edge-to-edge clutter.

A 12-column grid is utilized, but most content should be constrained to the inner 8 columns to maximize the "white space" (or "black space") on the periphery. Vertical rhythm is slow and deliberate, with large gaps between sections (120px+) to allow the content to resonate. Layouts should favor asymmetrical balance—placing a single powerful headline against a large empty area—to communicate the luxury of space.

## Elevation & Depth

This design system rejects traditional shadows and lighting effects. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Use `#121212` for cards or panels sitting on top of the `#0A0A0A` base.
- **Borders:** Instead of shadows, use 1px solid strokes. For standard elements, use a very low-opacity white (e.g., `rgba(255,255,255,0.1)`). For featured elements, use the matte gold (#C5A059) at 0.5px or 1px thickness.
- **Transitions:** Interactivity should be marked by subtle opacity shifts or color transitions (e.g., a border changing from gray to gold), rather than a change in elevation or "lift."

## Shapes

The shape language is strictly **Sharp (0px)**. Roundness is perceived as approachable and casual; sharp corners convey precision, architectural stability, and uncompromising discipline. Every button, input field, and container must feature 90-degree angles. This geometric rigidity reinforces the professional nature of elite litigation.

## Components

### Buttons

Primary buttons are transparent with a 1px gold (#C5A059) border and gold text. On hover, they should have a very subtle gold fill at 10% opacity. Secondary buttons use a subtle off-white border. All buttons use the `label-caps` typography style.

### Input Fields

Inputs are minimalist underlines rather than boxes. When focused, the 1px underline transitions from muted gray to gold. Labels sit above the line in small, wide-spaced uppercase Inter.

### Cards & Containers

Cards do not have backgrounds; they are defined by a 1px border on all sides or simply a top-border to separate sections. This maintains the "matte" feel of the system.

### Case Timelines

A specialized component for the advocate. A vertical 1px line in gold, with small sharp-edged diamonds marking key dates. Typography remains small and restrained.

### Document Previews

Legal documents should be displayed as simplified monochromatic thumbnails. Hovering over a document should reveal a gold border and a "Read Brief" label in the `label-caps` style.
