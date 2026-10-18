# Portfolio Website

My personal portfolio — built with Next.js and Tailwind CSS, showcasing my experience in RPA/automation and Agentic AI, projects, certifications, and a live feed of my Medium articles.

- 🌐 **Live site:** https://kshitijdarwhekar.com
- 📝 **Blog:** https://medium.com/@kshitijdarwhekar

## Table of Contents

- [V1 → V2](#v1--v2)
- [Features](#features)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contributing](#contributing)

## V1 → V2

The site went through a full redesign in 2026 — new visual direction, two new sections, and a content refresh to match my current focus (RPA/Agentic AI rather than the older frontend-heavy copy).

| V1 (before) | V2 (after) |
|---|---|
| ![V1 landing page](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/6e76a09e-d4fe-4b35-a11e-aa2356e03063) | ![V2 landing page](docs/screenshots/v2/desktop/landing-page.png) |

**What changed:**
- Dark-first "modern dark tech" visual system — gradients, glass-panel cards, a cursor-reactive glow, scroll-reveal and hover-lift motion
- New **Articles** section — pulls my latest Medium posts live via RSS, no manual updates needed
- New **Certifications** section — curated from my certs, linking out to Credly for verified badges
- Content rewritten to reflect my actual current work (RPA on Automation Anywhere 360, Agentic AI, Celonis — process mining experience, SAP) instead of stale copy
- Real bugs fixed along the way: broken mobile nav, a contact form that used to wipe the page on submit, shared hover state across all project cards, and more
- Broke the old single ~500-line component into proper Server/Client components

<details>
<summary>📸 See the full V1 gallery (dark + light mode)</summary>

### V1 — Dark Mode

- Landing Page

  ![Landing Page](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/6e76a09e-d4fe-4b35-a11e-aa2356e03063)

- About Section

  ![About Page](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/87bfb04a-f60a-404a-b2df-83839b7e9c08)

- Skills Section

  ![Skills Page](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/9370b934-72e2-490d-8e2e-5fb4ac548bae)

- Portfolio Section

  ![Portfolio Website](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/9750040a-744b-40f0-bd5d-ccd802f8fd75)

- Contact Me

  ![Contact Me Page](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/58577e3b-def7-4735-a166-5b25d802491d)

- Footer

  ![Footer](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/e876487d-2145-4aa1-8fc6-f8463d634c3e)

### V1 — Light Theme

- Landing Page

  ![image](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/187f4dcd-e8e8-45ee-85ab-d4b7eca1e937)

- About Section

  ![image](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/363fd08e-b309-4c25-a188-8cf038dcc6d5)

- Skills Section

  ![image](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/f8e40a8b-993d-45b9-96a8-994691b4595a)

- Portfolio Section

  ![image](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/71a5f4ed-6bde-4b5c-b347-f8e69bd2205c)

- Contact Me

  ![image](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/debd8e6f-93f7-4f01-8964-b69e1e93e27b)

- Footer

  ![image](https://github.com/Kshitij-Darwhekar/Kshitij-Website/assets/54590658/cfde5915-e763-49f6-8d34-c24bae715aab)

</details>

## Features

- Dark-first design (default) with a persistent light/dark toggle
- Hero, About, Experience (timeline), Skills, **Certifications**, Projects, **Articles** (live Medium feed), and Contact sections
- Fully responsive, with a working mobile nav
- Scroll-reveal and hover-lift micro-interactions, respecting `prefers-reduced-motion`
- Contact form via Formspree, with honeypot spam protection
- Auto-generated Open Graph / social-share preview image, always in sync with the live site
- Google Analytics + Vercel Analytics/Speed Insights

## Technologies

- **Next.js 14** (App Router) — Server and Client Components
- **Tailwind CSS** — utility-first styling
- **Formspree** — contact form backend
- **rss-parser** — live Medium article feed
- **next/og** — dynamic Open Graph image generation
- **Vercel** — hosting and analytics

## Screenshots

### V2 — Desktop

- Hero

  ![Hero](docs/screenshots/v2/desktop/landing-page.png)

- About

  ![About](docs/screenshots/v2/desktop/about.png)

- Experience

  ![Experience](docs/screenshots/v2/desktop/experience.png)

- Skills

  ![Skills](docs/screenshots/v2/desktop/skills.png)

- Certifications

  ![Certifications](docs/screenshots/v2/desktop/certifications.png)

- Projects

  ![Projects](docs/screenshots/v2/desktop/projects.png)

- Articles

  ![Articles](docs/screenshots/v2/desktop/articles.png)

- Contact

  ![Contact](docs/screenshots/v2/desktop/contact.png)

<details>
<summary>📱 See the V2 mobile gallery</summary>

| | |
|---|---|
| ![Hero](docs/screenshots/v2/mobile/landing-page.png) | ![About](docs/screenshots/v2/mobile/about.png) |
| ![Experience](docs/screenshots/v2/mobile/experience.png) | ![Skills](docs/screenshots/v2/mobile/skills.png) |
| ![Certifications](docs/screenshots/v2/mobile/certifications.png) | ![Projects](docs/screenshots/v2/mobile/projects.png) |
| ![Articles](docs/screenshots/v2/mobile/articles.png) | ![Contact](docs/screenshots/v2/mobile/contact.png) |

</details>

> Full V1 gallery is in the [collapsed section above](#v1--v2) for comparison.

## Getting Started

To run the portfolio website on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/Kshitij-Darwhekar/Kshitij-Website.git
```

2. Navigate to the project directory:

```bash
cd portfolio-website
```

3. Install the dependencies:

```bash
npm install
```

4. Set up environment variables (see `.env.local` — you'll need a [Formspree](https://formspree.io/) form ID and a Google Analytics Measurement ID):

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=
NEXT_PUBLIC_GA_ID=
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit `http://localhost:3000` to view the website.

## Project Structure

```
src/
  app/            # Next.js routes, layout, metadata, OG image
  components/     # layout/ (nav, footer) and sections/ (hero, about, etc.)
  data/           # content as plain data (projects, skills, experience, etc.)
  hooks/          # useInView (scroll-reveal)
  lib/            # Medium RSS fetching/parsing
public/           # static assets served by the site (fonts, favicon, etc.)
docs/screenshots/ # README images only — not part of the deployed site
```

## Deployment

Deployed on [Vercel](https://vercel.com/docs), connected directly to this repo — pushes to `main` deploy to production automatically, and any other branch gets its own preview deployment.

Remember to set `NEXT_PUBLIC_FORMSPREE_FORM_ID` and `NEXT_PUBLIC_GA_ID` in your hosting platform's environment variables (a local `.env.local` only affects local development).

## Customization

- Update content under `src/data/` with your own information.
- Add or remove sections in `src/app/page.js`.
- Adjust design tokens and the `glass-panel`/`glass-card` styles in `src/app/globals.css`.
- Replace the favicon in `src/app/opengraph-image.js` (also used for the auto-generated social preview image) and `public/favicon.ico`.
- Point `src/lib/medium.js` at your own Medium RSS feed.
- Set your own [Formspree](https://formspree.io/) endpoint and Google Analytics ID.

## Contributing

Contributions are welcome! If you encounter any issues, have suggestions, or want to contribute new features, please open an issue or submit a pull request.
