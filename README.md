# Vibe Design System

A **Neobrutalist** React + TypeScript design system featuring bold colors, heavy borders, and unapologetic typography.

![Neobrutalism](https://img.shields.io/badge/style-neobrutalist-ffde03?style=for-the-badge)
![React](https://img.shields.io/badge/react-18+-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5+-3178C6?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/scss-tokens-CC6699?style=for-the-badge&logo=sass)

## ✨ Features

- **Atomic Design** - Organized into Atoms, Molecules, and Organisms
- **SCSS Token System** - Comprehensive design tokens for colors, typography, spacing, and more
- **Accessible** - Keyboard navigation and focus styles built-in
- **TypeScript** - Full type safety with no `any` types
- **forwardRef Support** - Button and Typography support ref forwarding

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start Vite app
npm run dev
```

### Running the app

```bash
npm run dev
```

This will start the app at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── Typography/     # Text component with variants
│   │   ├── Button/         # Interactive button component
│   │   ├── Container/      # Layout container
│   │   └── Section/        # Page section wrapper
│   ├── molecules/
│   │   └── Card/           # Card with Header, Body, Footer
│   └── organisms/          # Complex components (extend here)
├── styles/
│   ├── _variables.scss     # Design tokens
│   ├── _mixins.scss        # Reusable SCSS mixins
│   └── _globals.scss       # Global styles & reset
└── index.ts                # Main exports
```

## 🎨 Design Tokens

All components use design tokens from `_variables.scss`:

### Typography

- Font families: `$font-family-sans`, `$font-family-mono`
- Sizes: `$font-size-display` through `$font-size-caption`
- Weights: `$font-weight-regular` through `$font-weight-bold`
- Line heights: `$line-height-display`, `$line-height-heading`, `$line-height-body`

### Colors

- **Primary**: Electric Yellow (`$color-primary`)
- **Secondary**: Hot Pink (`$color-secondary`)
- **Neutrals**: `$color-neutral-0` through `$color-neutral-900`
- **Semantic**: `$color-danger`, `$color-success`, `$color-warning`

### Spacing

```scss
$space-0: 0;
$space-1: 0.25rem;   // 4px
$space-2: 0.5rem;    // 8px
$space-3: 0.75rem;   // 12px
$space-4: 1rem;      // 16px
// ... up to $space-24
```

### Shadows (Neobrutalist offset shadows)

```scss
$shadow-sm: 2px 2px 0 0 $color-black;
$shadow-md: 4px 4px 0 0 $color-black;
$shadow-lg: 6px 6px 0 0 $color-black;
```

## 🧩 Components

### Typography

```tsx
import { Typography } from 'vibe-design-system';

<Typography variant="display">Hero Text</Typography>
<Typography variant="h1">Page Title</Typography>
<Typography variant="body" tone="muted">Description</Typography>
<Typography variant="caption" weight="bold">LABEL</Typography>
```

**Props:**
- `variant`: `display` | `h1` | `h2` | `h3` | `body` | `bodySm` | `caption`
- `weight`: `regular` | `medium` | `semibold` | `bold`
- `align`: `left` | `center` | `right`
- `tone`: `default` | `muted` | `danger` | `success`
- `as`: Any HTML element

### Button

```tsx
import { Button } from 'vibe-design-system';

<Button variant="primary" size="lg">Get Started</Button>
<Button variant="secondary" leftIcon={<Icon />}>Continue</Button>
<Button variant="ghost" isLoading>Loading...</Button>
<Button variant="danger" disabled>Delete</Button>
```

**Props:**
- `variant`: `primary` | `secondary` | `ghost` | `danger`
- `size`: `sm` | `md` | `lg`
- `isLoading`: boolean
- `disabled`: boolean
- `leftIcon` / `rightIcon`: ReactNode

### Container

```tsx
import { Container } from 'vibe-design-system';

<Container maxWidth="lg" padding="md">
  {/* Content */}
</Container>
```

**Props:**
- `maxWidth`: `sm` | `md` | `lg` | `xl`
- `padding`: `none` | `sm` | `md` | `lg`

### Section

```tsx
import { Section } from 'vibe-design-system';

<Section spacing="lg" background="primary">
  <Container>{/* Content */}</Container>
</Section>
```

**Props:**
- `spacing`: `sm` | `md` | `lg` | `xl`
- `background`: `none` | `subtle` | `primary`

### Card

```tsx
import { Card } from 'vibe-design-system';

<Card variant="elevated" padding="md">
  <Card.Header>
    <Typography variant="h3">Title</Typography>
  </Card.Header>
  <Card.Body>
    <Typography>Content goes here</Typography>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

**Props:**
- `variant`: `elevated` | `outlined` | `flat`
- `padding`: `sm` | `md` | `lg`

## 🎯 SCSS Import Pattern

Each component SCSS file follows this pattern:

```scss
@use "../../../styles/variables" as *;
@use "../../../styles/mixins" as *;

.component {
  // Uses tokens like $color-primary, $space-4, $shadow-md
}
```

## ♿ Accessibility

- All interactive elements have visible focus states using `@mixin focus-ring`
- Keyboard navigation supported
- Loading states announced with `aria-busy`
- Semantic HTML elements used throughout

## 🔧 BEM-ish Class Naming

```scss
.card                    // Block
.card--elevated          // Modifier
.card--padding-lg        // Modifier
.card__header            // Element
.card__body              // Element
.card__footer            // Element
```

## 📦 Build for Production

```bash
npm run build
```

This creates a static app build in `_site/`.

## ☁️ Deploy to DigitalOcean Droplet (Docker)

Use this if you want to run the app directly on your Droplet.

### 1) SSH into the Droplet

```bash
ssh root@YOUR_DROPLET_IP
```

### 2) Install Docker + Compose (Ubuntu)

From your project directory on the Droplet:

```bash
./deploy/droplet/setup-droplet.sh
```

Reconnect SSH after this step so Docker group permissions apply.

### 3) Configure environment values

Create or edit `.env` in the project root:

```dotenv
VITE_STORYBLOK_API_TOKEN=your_storyblok_token
STORYBLOK_API_TOKEN=your_storyblok_token
STORYBLOK_CV_SLUG=cv
STORYBLOK_VERSION=published
CV_CACHE_TTL_SECONDS=900
# Optional: protects POST /api/cv/cache/clear
CV_CACHE_BUST_TOKEN=set_a_random_secret
```

This stack expects a Laravel app at `../laravel-proxy` (sibling folder to this repo on the Droplet).
The frontend serves the SPA and proxies `/api/*` requests to Laravel.

### 4) Deploy

```bash
./deploy/droplet/deploy.sh
```

The app will be available on `http://YOUR_DROPLET_IP`.

CV endpoint via proxy/cache:

```bash
curl http://YOUR_DROPLET_IP/api/cv
```

Optional cache clear:

```bash
curl -X POST http://YOUR_DROPLET_IP/api/cv/cache/clear \
  -H "X-Cache-Bust-Token: $CV_CACHE_BUST_TOKEN"
```

### 5) Update after code changes

```bash
git pull
./deploy/droplet/deploy.sh
```

---

## ☁️ Deploy to DigitalOcean App Platform (optional)

This repository is configured for Docker-based deployment to DigitalOcean App Platform:

- Docker image is built from `Dockerfile` (multi-stage build + nginx runtime)
- SPA route fallback is configured in `deploy/nginx.conf`
- App Platform spec is stored in `deploy/app.yaml`
- CI/CD workflow is in `.github/workflows/deploy-do-app.yml`

### Required GitHub Secrets

- `DO_API_TOKEN`
- `DIGITALOCEAN_APP_ID`
- `DOCR_REGISTRY` (your container registry name)
- `DOCR_REPOSITORY` (your image repo, for example `vibe-design`)
- `VITE_STORYBLOK_API_TOKEN`

### Deployment flow

1. Push to `main`
2. GitHub Actions builds and pushes image to DOCR
3. Workflow renders `deploy/app.yaml` with registry values
4. Workflow updates the App Platform app with `doctl apps update`

### Local Docker smoke test

```bash
docker build --build-arg VITE_STORYBLOK_API_TOKEN=your_token_here -t vibe-design:local .
docker run --rm -p 8080:80 vibe-design:local
```

Open `http://localhost:8080`.

## 🤝 Contributing

1. Follow the existing component patterns
2. Use tokens from `_variables.scss` (no hardcoded values)
3. Ensure keyboard accessibility

---

**Made with 💛 and lots of black borders**

