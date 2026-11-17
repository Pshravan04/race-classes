# RACE Design System (`design.md`)

> **Reddys Advanced Computer Education (RACE)**  
> Official UI/UX Design System, Brand Style Guide & Component Specification  
> *Grounded in practical, modern, and accessible interface engineering for Mumbai MMR's premier computer training institute.*

---

## 1. Brand Identity & Principles

### Brand Overview
- **Name:** RACE – Reddys Advanced Computer Education
- **Tagline:** Practical IT & Computer Training (Virar East, Mumbai MMR)
- **Station-Side Landmark:** 202, 2nd Floor, Raut Arcade, Directly Opposite Virar East Railway Station Subway
- **Visual Personality:** Professional, authoritative, energetic, and trustworthy. Built with a precise "station-to-classroom" ethos that balances academic prestige with welcoming community warmth.

### Core Visual Motifs
- **Dual Diagonal Speed Stripes:** Two parallel 45° angled parallel bars in **RACE Blue (`#0e2340`)** and **RACE Red (`#c6383b`)**, symbolizing forward momentum, practical speed, and career acceleration.
- **Laptop & Pixel Grid:** Tech elements seamlessly integrated with sharp, aerodynamic typography.

---

## 2. Color Palette & Design Tokens

### 2.1 Primary Brand Color: RACE Blue
A deep, authoritative navy commanding confidence and academic reliability.

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `blue-900` **(Base)** | `#0e2340` | Primary brand headers, hero backgrounds, primary buttons, logo |
| `blue-700` | `#16345c` | Secondary deep blue, gradient end-stop, button hover states |
| `blue-500` | `#2e5b8a` | Accent borders, medium container fills, active navigation tabs |
| `blue-300` | `#7ba3c7` | Subtle borders, progress bars, light tech badge outlines |
| `blue-100` | `#e6f0f8` | Soft tinted card backgrounds, active menu item fills |

### 2.2 Accent Brand Color: RACE Red
An energetic, high-urgency crimson driving primary call-to-actions, limited-seat highlights, and concession badges.

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `red-900` **(Base)** | `#c6383b` | Primary conversion CTAs ("Get Started", "Claim Offer"), badges |
| `red-700` | `#d9740f` | Warm gradient transition, amber/saffron warmth balance |
| `red-500` | `#e76b6b` | Accent highlights, secondary error states, decorative tints |
| `red-300` | `#f4a7a7` | Soft pill backgrounds, tag borders, subtle banners |
| `red-100` | `#fdeaea` | Concession banner backgrounds, error message containers |

### 2.3 Neutral Palette
Neutral greys engineered for crystal-clear readability and WCAG AA contrast on mobile and desktop displays.

| Token | Hex Value | Role & Applied Context |
| :--- | :--- | :--- |
| `neutral-900` | `#0b0b0b` | High-contrast body headings, primary typography |
| `neutral-700` | `#374151` | Default paragraph text, descriptive subtitles |
| `neutral-500` | `#6b7280` | Muted secondary copy, timestamp labels, icon strokes |
| `neutral-300` | `#cbd5e1` | Card borders, table dividers, input borders |
| `neutral-100` | `#f8fafc` | Canvas background, off-white card surfaces, input fields |

### 2.4 Functional / Semantic UI Colors

| Semantic State | Hex Value | Tailwind Token | Application |
| :--- | :--- | :--- | :--- |
| **Success** | `#10b981` | `bg-emerald-500` | WhatsApp CTAs, verified badges, seat availability |
| **Warning** | `#f59e0b` | `bg-amber-500` | Urgent countdown timers, fast-filling batches |
| **Error** | `#ef4444` | `bg-red-500` | Form validation errors, mandatory field notices |
| **Info** | `#3b82f6` | `bg-blue-500` | Informational callouts, syllabus notices, tool tags |
| **Border** | `#e5e7eb` | `border-slate-200` | Global card borders, grid dividers, horizontal rules |

### 2.5 Gradients
Subtle, premium gradients used on hero banners, card accents, and featured banners.

- **Blue Gradient:** `linear-gradient(135deg, #0e2340 0%, #16345c 100%)`
  - *CSS Variable:* `var(--gradient-race-blue)`
  - *Context:* Top navigation, dark hero cards, learning journey blueprint card.
- **Red Gradient:** `linear-gradient(135deg, #c6383b 0%, #d9740f 100%)`
  - *CSS Variable:* `var(--gradient-race-red)`
  - *Context:* Special 50% concession banners, high-urgency promotional ribbons.

---

## 3. Typography Specification

### 3.1 Font Pairing
- **Heading Font:** **Helvetica** (Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`)
  - *Weights:* Bold (`700`), SemiBold (`600`), Medium (`500`)
  - *Character:* Clean, structural, authoritative, tight tracking on large headlines (`letter-spacing: -0.02em`).
- **Paragraph / Body Font:** **Poppins** (Fallback: `"Inter", system-ui, sans-serif`)
  - *Weights:* Regular (`400`), Medium (`500`), SemiBold (`600`)
  - *Character:* Geometric, open counters, highly legible at small sizes on mobile screens.

### 3.2 Fluid Type Scale

| Role | Font Family | Size (Mobile → Desktop) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | Helvetica | `clamp(2.25rem, 5vw, 3.5rem)` | 700 | 1.1 | `-0.03em` |
| **Heading 1 (H1)** | Helvetica | `clamp(1.85rem, 4vw, 2.75rem)` | 700 | 1.15 | `-0.02em` |
| **Heading 2 (H2)** | Helvetica | `clamp(1.5rem, 3vw, 2.25rem)` | 700 | 1.2 | `-0.015em` |
| **Heading 3 (H3)** | Helvetica | `clamp(1.25rem, 2.5vw, 1.75rem)` | 600 | 1.3 | `-0.01em` |
| **Heading 4 (H4)** | Helvetica | `1.125rem` (18px) | 600 | 1.4 | `0em` |
| **Body Large** | Poppins | `1.0625rem` (17px) | 400 / 500 | 1.6 | `0em` |
| **Body Normal** | Poppins | `0.9375rem` (15px) | 400 | 1.6 | `0em` |
| **Body Small** | Poppins | `0.8125rem` (13px) | 400 / 500 | 1.5 | `0.01em` |
| **Caption / Tag** | Poppins | `0.6875rem` (11px) | 600 / 700 | 1.4 | `0.05em (caps)` |

---

## 4. Spacing, Grid & Border Radius System

### 4.1 Spacing Scale (8pt Grid System)
- **Base Grid Unit:** `16px` (`1rem`)
- **Spacing Units:**
  - `4px` (`0.25rem` / `space-xs`): Tight icon-label gaps, tag paddings.
  - `8px` (`0.5rem` / `space-sm`): Card sub-element padding, badge margins.
  - `12px` (`0.75rem` / `space-md-sm`): Input padding, pill gaps.
  - `16px` (`1rem` / `space-md`): Standard card interior padding on mobile.
  - `24px` (`1.5rem` / `space-lg`): Desktop card padding, layout gutter.
  - `32px` (`2rem` / `space-xl`): Section subsection margins, form spacing.
  - `48px` (`3rem` / `space-2xl`): Desktop section vertical padding (`py-12`).
  - `64px` (`4rem` / `space-3xl`): Major section vertical rhythm (`py-16` / `py-20`).

### 4.2 Border Radius Scale

| Token | Radius Value | Applied Components |
| :--- | :--- | :--- |
| `radius-sm` | `4px` | Small tags, tech logo badges, micro chips |
| `radius-md` | `8px` | Form inputs, select dropdowns, secondary action buttons |
| `radius-lg` | `12px` | Content cards, syllabus accordion rows, video thumbnail frames |
| `radius-xl` | `24px` | Major bento cards, course cards, dialogue modals, blueprint cards |
| `radius-pill` | `9999px` | Primary CTA buttons, WhatsApp action FAB, filter pills, counter tags |

---

## 5. Buttons & Interactive States

```
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│     Shop Now / Enquire →        │   │        Get Started →            │
│   (Primary Blue: #0e2340)       │   │     (Primary Red: #c6383b)      │
└─────────────────────────────────┘   └─────────────────────────────────┘
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│          Learn More →           │   │       Explore Courses →         │
│   (Outline Blue: #0e2340)       │   │    (Outline Red: #c6383b)       │
└─────────────────────────────────┘   └─────────────────────────────────┘
```

### 5.1 Primary RACE Blue Button
- **Default:** Background `#0e2340`, Text `#ffffff`, Border `none`, Radius `9999px` or `12px`.
- **Hover:** Background `#16345c`, Shadow `0 10px 15px -3px rgba(14, 35, 64, 0.25)`.
- **Active:** Scale `0.98`, Background `#0b1c33`.
- **Disabled:** Background `#cbd5e1`, Text `#6b7280`, Cursor `not-allowed`.

### 5.2 Primary RACE Red Button
- **Default:** Background `#c6383b`, Text `#ffffff`, Border `none`, Radius `9999px` or `12px`.
- **Hover:** Background `#a82b2e`, Shadow `0 10px 15px -3px rgba(198, 56, 59, 0.3)`.
- **Active:** Scale `0.98`, Background `#922427`.
- **Disabled:** Background `#f4a7a7`, Text `#ffffff`, Opacity `0.6`.

### 5.3 Outlined Variants
- **Blue Outline:** Background `transparent`, Border `1.5px solid #0e2340`, Text `#0e2340`. Hover: Background `#e6f0f8`.
- **Red Outline:** Background `transparent`, Border `1.5px solid #c6383b`, Text `#c6383b`. Hover: Background `#fdeaea`.

---

## 6. Icons & Brand Elements

### 6.1 Iconography
- **Set:** Lucide Line Icons (2px uniform stroke, rounded caps).
- **Core Icons:**
  - `Home`: Campus navigation.
  - `Search`: Course search & filter input.
  - `GraduationCap`: Certificates, diplomas, and career credentials.
  - `BookOpen`: Syllabus curriculum and learning modules.
  - `User`: 1-on-1 faculty desk coaching.
  - `Phone`: Tap-to-call admissions helpline (`8793314239`, `8482881614`, `9794323963`).
  - `MessageSquare` / `MessageCircle`: WhatsApp direct admissions desk (`9794323963`).
  - `ArrowRight`: Action prompts and read-more indicators.

### 6.2 Brand Visual Accents
- **Speed Bars (Dual Diagonal Accent):** Angled parallel bars rotated at -20° or 45°, combining `#0e2340` (Navy) and `#c6383b` (Red) to frame section headers or bottom corner cards.
- **Toggles & Switches:** Rounded pill track (`bg-slate-200` inactive, `bg-[#0e2340]` active) with smooth sliding white knob.
- **Pagination Dots:** Active dot expanded in `#0e2340` or `#c6383b`, inactive dots in `#cbd5e1`.

---

## 7. Component Layout Patterns

### 7.1 Course Cards (ITVedant Pattern)
- **Top Bar:** Urgency ticker with countdown timer and red `[X seats left]` pill.
- **Visual Banner:** Lab photo or technology stack illustration with `100% Practical` badge.
- **Tools Strip:** 5-column software logos (Java, Spring, Python, Excel, TallyPrime, AWS) with clear labels.
- **Feature Pills:** `UNLIMITED INTERVIEWS`, `50% CONCESSION`, `SPECIAL LADIES BATCH`.
- **Dual Buttons:** "Download Brochure" (Outlined) + "Know More" (Vibrant Accent / Red).

### 7.2 Course Journey Curriculum
- **Left Blueprint Card:** Solid `#0e2340` with 3 white stat cards (30+ Projects, 10+ Tools, 280+ Live Session Hours) and a primary syllabus download CTA.
- **Right Timeline Accordion:** Vertical connector line, active glowing status node, `#Tag` taxonomy, duration pill, and 2-column bulleted topics.

### 7.3 Sticky Corner Action Form Button
- **Fixed Position:** `fixed bottom-22 right-4 sm:right-6 z-40` (neatly stacked above WhatsApp FAB).
- **Style:** Deep navy `#0e2340` pill with glowing status dot (`bg-[#A2D016]` or `#c6383b`), sparkle icon, and "Enquire / Book Demo" label.
- **Modal:** Interactive tabs for "Book Free Demo" and "Syllabus & Fees" with instant 10-digit validation and direct WhatsApp prefill.

---

## 8. CSS Variables & Tailwind Tokens

```css
:root {
  /* Brand Primary: RACE Blue */
  --race-blue-900: #0e2340;
  --race-blue-700: #16345c;
  --race-blue-500: #2e5b8a;
  --race-blue-300: #7ba3c7;
  --race-blue-100: #e6f0f8;

  /* Brand Accent: RACE Red */
  --race-red-900: #c6383b;
  --race-red-700: #d9740f;
  --race-red-500: #e76b6b;
  --race-red-300: #f4a7a7;
  --race-red-100: #fdeaea;

  /* Neutrals */
  --race-neutral-900: #0b0b0b;
  --race-neutral-700: #374151;
  --race-neutral-500: #6b7280;
  --race-neutral-300: #cbd5e1;
  --race-neutral-100: #f8fafc;

  /* Functional UI */
  --race-success: #10b981;
  --race-warning: #f59e0b;
  --race-error: #ef4444;
  --race-info: #3b82f6;
  --race-border: #e5e7eb;

  /* Gradients */
  --gradient-race-blue: linear-gradient(135deg, #0e2340 0%, #16345c 100%);
  --gradient-race-red: linear-gradient(135deg, #c6383b 0%, #d9740f 100%);

  /* Typography */
  --font-heading: 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Poppins', system-ui, sans-serif;

  /* Border Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```

---

## 9. Accessibility & Quality Checklist

- [x] **WCAG AA Contrast:** Text elements maintain a minimum contrast ratio of 4.5:1 against their backgrounds (`#0e2340` on white provides an exceptional 13.8:1 contrast).
- [x] **Touch Targets:** All interactive buttons and mobile links have a minimum height of `48px` on mobile screens.
- [x] **Clear Focus States:** Interactive controls feature accessible focus rings with `2px offset`.
- [x] **Zero Slop:** Authentic local photography, official vector SVG tech logos, transparent course syllabi, and genuine helpline phone numbers (`8793314239`, `8482881614`, `9794323963`).
