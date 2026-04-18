# Portfolio Website

A modern, modular portfolio website built with **Next.js 15** and **React 19**. Designed to showcase projects, skills, and professional experience through a clean, responsive single-page interface.

## 📖 About This Project

This is a portfolio website application that displays professional work and expertise through a structured, component-based interface. It provides a single-page experience with multiple customizable sections including projects, skills, experience, and contact information. The website is fully configurable—simply edit the content data to populate your own portfolio with your projects and information.

## ✨ Key Features

- **Responsive Design**: Mobile-first layout with Tailwind CSS, works seamlessly on all devices
- **Single-Page Application**: Smooth scrolling navigation between sections without page reloads
- **Modular Sections**: 10 independent sections (Hero, Projects, Skills, Experience, etc.)
- **Project Showcase**: Detailed project cards with problem statements, solutions, and outcomes
- **Skill Organization**: Skills grouped by technology stack with descriptions
- **Flexible Content**: All content lives in a single TypeScript file—no database needed
- **Expandable Components**: Built-in expandable content cards for detail-rich information
- **Contact Integration**: Quick-access contact section with email and social links

## 🛠 Tech Stack

- **Next.js 15.2.4** - React framework with SSR and static generation
- **React 19.0.0** - UI component library
- **TypeScript 5.8.2** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.3** - CSS processing and optimization
- **Autoprefixer 10.4.20** - Automatic vendor prefixes

## 🏗 Architecture

The application follows a **component-driven, data-first architecture**:

```
Content Data (lib/content.ts)
    ↓
Section Configuration (lib/sections.ts)
    ↓
Layout Wrapper (components/layout/portfolio-shell.tsx)
    ↓
Section Components (components/sections/*)
    ↓
Card Components (components/cards/*)
    ↓
UI Components (components/ui/*)
```

**Data Flow:**

1. All portfolio content is defined in `lib/content.ts`
2. Section components import and render this content
3. Layout wrapper orchestrates section display and navigation
4. Sidebar navigation enables smooth scrolling between sections

## 📱 Sections Overview

The website consists of 10 primary sections:

| Section                  | Purpose                                  |
| ------------------------ | ---------------------------------------- |
| **Hero**                 | Introduction with call-to-action buttons |
| **Projects**             | Showcase of major work with details      |
| **Skills**               | Technical skills grouped by stack        |
| **Engineering Approach** | Core development principles              |
| **Experience**           | Professional experience and roles        |
| **Certifications**       | Credentials with verification links      |
| **AI Workflow**          | Development methodology and tools        |
| **About**                | Personal background and philosophy       |
| **Currently Building**   | Current learning and development goals   |
| **Contact**              | Email and social media links             |

Each section is a standalone React component that can be independently customized or removed.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
Portfolio/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Homepage entry point
│   └── globals.css              # Global styles
│
├── components/
│   ├── cards/                   # Reusable card components
│   │   ├── project-card.tsx     # Project display component
│   │   ├── skill-card.tsx       # Skill item component
│   │   ├── experience-card.tsx  # Experience item component
│   │   ├── certification-card.tsx # Certification item component
│   │   └── empty-card.tsx       # Empty state placeholder
│   │
│   ├── layout/                  # Layout components
│   │   ├── portfolio-shell.tsx  # Main application wrapper
│   │   ├── section-header.tsx   # Section header component
│   │   └── sidebar-nav.tsx      # Sidebar navigation
│   │
│   ├── sections/                # Page sections (one component per section)
│   │   ├── hero-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── certifications-section.tsx
│   │   ├── engineering-principles-section.tsx
│   │   ├── ai-workflow-section.tsx
│   │   ├── about-section.tsx
│   │   ├── currently-building-section.tsx
│   │   └── contact-section.tsx
│   │
│   └── ui/                      # Primitive UI components
│       ├── button-link.tsx      # Link button component
│       ├── expandable-content.tsx # Collapsible content component
│       ├── section-placeholder.tsx # Empty section placeholder
│       └── cn.ts                # Classname utility
│
├── lib/
│   ├── content.ts               # All portfolio content (EDIT THIS)
│   └── sections.ts              # Section configuration and mapping
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
└── postcss.config.js            # PostCSS configuration
```

### Key Files

- **[lib/content.ts](lib/content.ts)** - Central content file. Edit here to customize portfolio data (person info, projects, skills, experience, certifications, etc.)
- **[lib/sections.ts](lib/sections.ts)** - Section definitions and component mapping. Controls which sections appear and their order
- **[components/layout/portfolio-shell.tsx](components/layout/portfolio-shell.tsx)** - Root layout wrapper that manages navigation and section rendering
- **[app/page.tsx](app/page.tsx)** - Homepage entry point

## ⚙️ Customization

### Updating Portfolio Content

All portfolio content is centralized in `lib/content.ts`. Edit the following exports:

```typescript
// Personal/site info
export const person = { name, role, headline, tagline, email }

// Hero CTA buttons
export const heroActions = [{ label, href, variant }]

// Featured projects
export const projects = [{ title, role, stack, highlights, problem, approach, solution, outcome }]

// Skill groups
export const skillGroups = [{ title, description, items }]

// Engineering principles
export const engineeringPrinciples = [{ title, description }]

// Experience entries
export const experiences = [{ company, role, period, points }]

// Certifications
export const certifications = [{ title, issuer, date, href }]

// Development workflow items
export const workflowItems = [...]

// Current goals
export const currentlyBuilding = [...]

// Contact links
export const contactLinks = [...]
```

### Styling

- **Global Styles**: Edit [app/globals.css](app/globals.css)
- **Tailwind Config**: Customize colors, fonts, spacing in [tailwind.config.ts](tailwind.config.ts)
- **Component Styles**: Each component uses Tailwind utility classes inline

### Adding a New Section

1. Create a new file in `components/sections/your-section.tsx`
2. Add the corresponding data export to `lib/content.ts`
3. Add section definition to `sectionItems` array in `lib/sections.ts`:
   ```typescript
   {
     id: "your-id",
     title: "Your Section",
     shortLabel: "11",
     Component: YourSectionComponent
   }
   ```

### Removing a Section

Delete the entry from `sectionItems` array in `lib/sections.ts`. The component file can remain unused or be deleted.

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Vercel automatically detects Next.js and deploys with optimal settings.

### Netlify

Build command: `npm run build`  
Publish directory: `.next`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms

- **AWS Amplify** - Connect Git repo for auto-deploy
- **GitHub Pages** - Export as static site
- **Self-hosted** - Run `npm run build && npm start` on any Node.js server

## 📊 Performance Considerations

- **Next.js Image Optimization**: Use `next/image` for images
- **Code Splitting**: Sections load on-demand via dynamic imports
- **CSS Optimization**: Tailwind purges unused styles in production
- **Responsive Images**: Configure breakpoints in Tailwind config

## 🔮 Future Improvements

- Dark mode support
- Search functionality to filter projects/skills
- Blog or articles section
- Dynamic theme color customization
- Analytics integration
- Email contact form submission
- Testimonials section
- Timeline component for experience

## 📝 License

This project is provided as-is for portfolio or reference purposes.

---

Built with Next.js 15 & React 19 | Last Updated: April 2026
