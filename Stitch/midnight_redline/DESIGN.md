---
name: Midnight Redline
colors:
  surface: '#1f0f0c'
  surface-dim: '#1f0f0c'
  surface-bright: '#483531'
  surface-container-lowest: '#190a08'
  surface-container-low: '#281714'
  surface-container: '#2c1b18'
  surface-container-high: '#382622'
  surface-container-highest: '#43302c'
  on-surface: '#fbdcd6'
  on-surface-variant: '#e5beb6'
  inverse-surface: '#fbdcd6'
  inverse-on-surface: '#3f2c28'
  outline: '#ac8982'
  outline-variant: '#5c403a'
  surface-tint: '#ffb4a5'
  primary: '#ffb4a5'
  on-primary: '#650a00'
  primary-container: '#ff5637'
  on-primary-container: '#590800'
  inverse-primary: '#ba1b00'
  secondary: '#c2c7cc'
  on-secondary: '#2c3135'
  secondary-container: '#42474c'
  on-secondary-container: '#b1b6bb'
  tertiary: '#64d4fc'
  on-tertiary: '#003544'
  tertiary-container: '#0e9dc3'
  on-tertiary-container: '#002e3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a5'
  on-primary-fixed: '#3f0400'
  on-primary-fixed-variant: '#8e1300'
  secondary-fixed: '#dee3e8'
  secondary-fixed-dim: '#c2c7cc'
  on-secondary-fixed: '#171c20'
  on-secondary-fixed-variant: '#42474c'
  tertiary-fixed: '#baeaff'
  tertiary-fixed-dim: '#64d4fc'
  on-tertiary-fixed: '#001f29'
  on-tertiary-fixed-variant: '#004d62'
  background: '#1f0f0c'
  on-background: '#fbdcd6'
  surface-variant: '#43302c'
  carbon-bg: '#0A0B0D'
  steel-panel: '#16181C'
  steel-panel-alt: '#1D2025'
  steel-border: '#3A3F47'
  steel-dim: '#22252A'
  text-dim: '#9BA0A8'
typography:
  display-lg:
    fontFamily: Oswald
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  data-odometer:
    fontFamily: JetBrains Mono
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.05em
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin: 2rem
  gutter: 1.5rem
  section-gap: 5rem
  component-gap: 1rem
---

## Brand & Style

The design system is a high-performance technical framework designed for the Toronto automotive enthusiast community. It evokes the atmosphere of a premium, late-night tuning shop—dark, precise, and high-stakes. The brand personality is authoritative and exclusive, balancing the mechanical grit of a service center with the sleek digital polish of a high-end sweepstakes.

The visual style is **Corporate Technical**, utilizing "Midnight Club" aesthetics. It leverages deep carbon textures, structural grid lines reminiscent of spec sheets, and high-visibility "Redline" accents. The UI should feel like a diagnostic dashboard for a performance vehicle: functional, data-heavy, and immersive. 

**Key Motif:** Mechanical 'odometer' displays and rolling number effects for entry counts, emphasizing the tangible nature of the prize.

## Colors

The palette is strictly dark-mode to maintain a premium, atmospheric "after-hours" shop vibe. 

- **Primary (Redline):** Used exclusively for critical data (multipliers), active gauge zones, and primary call-to-action buttons. It signifies heat and urgency.
- **Secondary (Chrome):** Used for icons, secondary text, and high-light highlights on "metallic" UI elements.
- **Neutral (Carbon/Steel):** A tiered system of dark grays creates depth. The base background is Carbon, while interactive panels use Steel variants to create a layered "deck" feel.

## Typography

This design system uses a tri-font strategy to separate intent:
- **Oswald (Impact):** All-caps for headers to mimic automotive badges and industrial signage.
- **Inter (Utility):** Standard UI text for readability and professional clarity.
- **JetBrains Mono (Precision):** Reserved for numeric values, multipliers, and technical specs.

Typography should favor uppercase for labels and headings to reinforce the "spec-sheet" aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** model (12 columns) on desktop, transitioning to a single-column flow on mobile. 

A unique "Spec-Sheet" grid motif is applied to the background of panels, featuring 1px dim steel lines every 40px to create a technical drafting feel. Margins are generous to allow the "Midnight" background to breathe, making the illuminated "Redline" elements pop. Vertical spacing between sections should be significant (80px+) to maintain a premium, uncrowded experience.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Structural Outlines** rather than traditional shadows:
- **Level 0 (Base):** Deep Carbon (#0A0B0D).
- **Level 1 (Panels):** Steel (#16181C) with a 1px solid border (#3A3F47).
- **Level 2 (Interactions):** Steel-Alt (#1D2025) with a "Redline" top-border (2px).

Shadows, if used, are tight and high-opacity to simulate a physical object sitting on a shop floor, rather than soft "web" shadows.

## Shapes

The shape language is **Soft (0.25rem)**. This provides just enough rounding to feel modern and premium while maintaining the sharp, aggressive edges associated with automotive body lines and industrial tools. Buttons and containers should feel like machined parts rather than organic shapes.

## Components

- **Buttons:** Primary buttons use a solid Redline fill with JetBrains Mono caps text. Secondary buttons use a transparent background with a 2px Steel border and an Oswald font.
- **Odometer Display:** A custom component using JetBrains Mono. Numbers should be housed in individual "Steel" boxes with a subtle vertical gradient to simulate a physical rolling barrel.
- **Gauges:** Semi-circular progress bars for entry tracking. The "track" is Steel-Dim, and the "fill" is a gradient from Chrome to Redline.
- **Cards:** Product and service cards use the Level 1 Elevation (Steel panel). They feature a mandatory 1px border. Technical specs (e.g., "1.5x Multiplier") should be displayed in a badge style using JetBrains Mono.
- **Input Fields:** Dark background, 1px steel border. On focus, the border changes to Redline with a 1px solid glow.
- **Badges:** Use "Redline" text on a "Steel-Dim" background for high-contrast technical callouts.