# RACE – Advanced Computer Education

A human studio-designed, production-ready website for **RACE – Advanced Computer Education**, a premier computer training institute situated right opposite Virar East railway station in Mumbai MMR (Maharashtra 401305).

---

## 🌟 Key Features & Studio Design Choices

1. **Rooted in Local Identity**:
   - Palette: Deep Railway Navy (`#071B3A`), Warm Gold (`#C59B27`), Warm Off-White Paper base (`#FBF9F5`), and Mumbai Western Railway Vermillion Red (`#C0392B`).
   - Virar Local Motif: Thin parallel railway track section dividers with sleeper ties, authentic station-board section nameplates (`VIRAR EAST • विरार पूर्व`), and a perforated suburban railway pass ticket card for the seasonal offer.
   - "Virar Fast" local angle used exactly once: *"Catch the Virar Fast to your tech career — without the commute to Churchgate or Andheri."*
2. **Multilingual Toggle (EN / हिं / मरा)**:
   - Instant language switching across English, Hindi, and Marathi with authentic, colloquial Indian phrasing (not robotic translation).
   - Saved persistently in `localStorage`.
3. **Comprehensive Course Catalog (All 23 Courses)**:
   - Filterable by **Goal** (*Job Seekers*, *Business Owners*, *Skill Upgrade*, *Kids & Beginners*) and by **Type** (*Short-Term*, *Career-Objective*).
   - Instant interactive drawer/modal with detailed topic syllabus, typical duration, training mode, certificate details, and 1-click WhatsApp inquiry pre-fill.
   - Standalone shareable URLs (`/courses/:courseId`) with rich Open Graph tags.
4. **Editable Offers & Seasonal Promotions**:
   - Single-file configuration (`src/data/config.ts`) allowing the owner to update the offer from "Admissions Special" to "Diwali Dhamaka" or "Summer Fast-Track" without touching React code.
5. **Mobile-First Sticky Bar**:
   - Fixed bottom action bar on phones with accessible tap targets (>48px): **Call 9794323963**, **WhatsApp Chat**, and **Book Free Demo**.
6. **Local SEO & Schema.org**:
   - Valid JSON-LD structured data for `EducationalOrganization` and `LocalBusiness` targeting keywords like *"computer classes in Virar East"*, *"Tally course Virar"*, *"Marathi typing classes Virar"*.
   - XML sitemap (`/sitemap.xml`) and `robots.txt` included.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build locally
npm run preview

# 5. Run linter
npm run lint
```

---

## 🛠️ How Non-Developers Can Edit Content

All editable business details live in **`src/data/config.ts`**. You do not need to edit any UI components.

### 1. Changing Seasonal Offers & Discounts
Open `src/data/config.ts` and edit `OFFERS_CONFIG`:
```ts
export const OFFERS_CONFIG = {
  active: true,
  seasonName: 'Diwali Special Concession', // Change season title
  bannerHeadline: 'Diwali Dhamaka Offer — Flat 50% Concession',
  badge: '50% OFF',
  ticketCode: 'VIRAR-DIWALI-50', // Change coupon / ticket code
  primaryOffer: {
    title: '50% Discount on Course Fees',
    // ...
  },
  // ...
};
```

### 2. Updating Contact Number & Timings
Open `src/data/config.ts` and edit `SITE_CONFIG.contact`:
```ts
contact: {
  phone: '9794323963',
  phoneDisplay: '+91 97943 23963',
  whatsapp: 'https://wa.me/919794323963',
  timings: 'Monday to Saturday: 9:00 AM – 7:00 PM (Sunday Closed)',
}
```

### 3. Adding or Updating Batches
In `src/data/config.ts`, edit `BATCHES_SCHEDULE` to add new time slots, mark batches as "Filling Fast", or update audience descriptions.

---

## 📋 Owner's Placeholder Checklist (To Supply Real Assets)

The website is production-ready and built to display authentic content. The owner should provide the following real assets to replace the marked slots:

1. **Lab Photographs**:
   - **Where**: About & Home page lab photo slots.
   - **What**: 3 to 4 genuine photos of students practicing at the 2nd floor Raut Arcade workstations under natural lighting.
   - **Recommended specs**: `1200x800px` or `800x600px`, JPEG or WebP.
2. **Faculty Headshots & Bios**:
   - **Where**: About page faculty slot.
   - **What**: Names, degrees/qualifications (e.g. MCA, B.E., M.Com), and photos of the teachers.
3. **Exact Fee Chart / Installment Schedule**:
   - **Where**: Shared via WhatsApp when students click "Ask for Fee Details".
   - **What**: Standard base fee and subsidized 50% concession amount per course if published publicly.
4. **Alumni Testimonials & Placement Photos**:
   - **Where**: Student Success / Gallery page (`/gallery`).
   - **What**: Currently displays a warm "Share your story" invitation box. As students graduate, add real photos of certificate distribution ceremonies and authentic student quotes.

---

## 🌐 Deploying to Production

### Deploying to Netlify
1. Push your repository to GitHub or GitLab.
2. Log in to [Netlify](https://app.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Select your repository.
4. Set Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy**. Netlify will automatically handle Single Page App rewrites using `public/_redirects`.

### Deploying to Vercel
1. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
2. Import your GitHub repository.
3. Framework Preset: **Vite** (Vercel automatically detects this).
4. Click **Deploy**. Vercel will use `vercel.json` for seamless client-side routing on refreshes.