# Developer Portfolio - J Akash Rao

A modern, responsive portfolio website showcasing backend-focused full stack development work, projects, skills, and engineering principles. Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## 🎯 Overview

This is a professional developer portfolio site for **J Akash Rao**, a backend-focused full stack developer specializing in:

- **MERN Stack** (React, Node.js, Express, MongoDB)
- **Java Stack** (Spring Boot, MySQL)
- REST API design, authentication, and scalable backend systems

The portfolio highlights 3 major projects, certifications, internship experience, and engineering principles that guide backend development work.

## ✨ Key Features

- **Responsive Design**: Mobile-first layout using Tailwind CSS
- **Smooth Navigation**: Single-page application with smooth scrolling between sections
- **Project Showcase**: Detailed project cards with problem statements, approaches, and outcomes
- **Skills Organization**: Grouped by technology stack with descriptions
- **Certifications**: Links to verified credentials
- **Engineering Philosophy**: Articulated core principles for backend development
- **Contact Integration**: Quick access to email and social links
- **Modern Stack**: Built with latest versions of Next.js 15 and React 19

## 📋 Project Sections

1. **Hero** - Introduction and call-to-action buttons
2. **Projects** - Three featured projects:
   - **Civix** - Digital civic engagement platform (MERN Stack)
   - **Data Visualization Platform** - File ingestion and reporting system (React, Node.js)
   - **Fraud Detection System** - Rule-based backend prototype (Java, Spring Boot)
3. **Skills** - Organized by technology stack:
   - MERN Stack
   - Java Stack
   - Core Backend Skills (REST APIs, JWT, Data Structures)
4. **Engineering Approach** - Core principles:
   - Start with contracts
   - Design for trust
   - Keep logic maintainable
5. **Experience** - Internship roles at Infosys Springboard and KodNest
6. **Certifications** - 6 verified credentials with direct links
7. **AI Workflow** - Development approach using AI tools
8. **About** - Personal background and development philosophy
9. **Currently Building** - Active learning and development goals
10. **Contact** - Email and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository** (if from git):

```bash
git clone <repository-url>
cd Portfolio
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout wrapper
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── cards/              # Card components
│   │   ├── certification-card.tsx
│   │   ├── empty-card.tsx
│   │   ├── experience-card.tsx
│   │   ├── project-card.tsx
│   │   └── skill-card.tsx
│   ├── layout/             # Layout components
│   │   ├── portfolio-shell.tsx
│   │   ├── section-header.tsx
│   │   └── sidebar-nav.tsx
│   ├── sections/           # Section components (one per section)
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
│   └── ui/                 # Reusable UI components
│       ├── button-link.tsx
│       ├── cn.ts
│       ├── expandable-content.tsx
│       └── section-placeholder.tsx
├── lib/
│   ├── content.ts          # Portfolio data (person, projects, skills, etc.)
│   └── sections.ts         # Section configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.ts          # Next.js configuration
```

### Key Files

- **[lib/content.ts](lib/content.ts)** - Central data file containing all portfolio content (person info, projects, skills, experience, certifications, etc.)
- **[lib/sections.ts](lib/sections.ts)** - Section configuration and component mapping
- **[components/layout/portfolio-shell.tsx](components/layout/portfolio-shell.tsx)** - Main layout wrapper
- **[app/page.tsx](app/page.tsx)** - Homepage entry point

## 🛠 Tech Stack

### Frontend

- **Next.js 15.2.4** - React framework with server-side rendering
- **React 19.0.0** - UI library
- **TypeScript 5.8.2** - Type safety
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.3** - CSS processing
- **Autoprefixer 10.4.20** - Browser vendor prefixes

### Development Tools

- **Node.js 18+** - JavaScript runtime
- **npm** - Package manager

## 📝 Customization

### Updating Portfolio Content

All portfolio content is centralized in **[lib/content.ts](lib/content.ts)**:

1. **Update personal info**:

```typescript
export const person = {
  name: "Your Name",
  role: "Your Role",
  headline: "Your headline",
  tagline: "Your tagline",
  email: "your-email@example.com",
};
```

2. **Add/edit projects**: Update the `projects` array
3. **Modify skills**: Update `skillGroups`
4. **Update experience**: Modify `experiences` array
5. **Add certifications**: Update `certifications` array
6. **Edit principles**: Modify `engineeringPrinciples`

### Styling

Tailwind CSS is configured in [tailwind.config.ts](tailwind.config.ts). Customize:

- Colors
- Fonts
- Spacing
- Responsive breakpoints

Global styles are in [app/globals.css](app/globals.css).

### Adding New Sections

1. Create a new component in `components/sections/your-section.tsx`
2. Add to `sectionItems` array in [lib/sections.ts](lib/sections.ts)
3. Add corresponding content to [lib/content.ts](lib/content.ts)

## 🔗 Live Links

- **Projects**: GitHub repositories linked in project cards
- **Certifications**: Google Drive links for verified credentials
- **Contact**: Email and social media in contact section

## 📊 Portfolio Highlights

### Technical Focus

- Backend system design and REST API development
- MERN and Java Spring Boot ecosystems
- JWT authentication and security
- Database integration (MongoDB, MySQL)

### Development Approach

- Contract-first API design
- Security by default
- Code maintainability and structure
- Production-ready implementations

### Tools & Methodology

- AI-assisted code generation (Codex, Cursor)
- Problem-first prompting approach
- Code validation and refinement
- Focus on architecture and code quality

## 🚢 Deployment

This Next.js application can be deployed to:

- **Vercel** (recommended, seamless Next.js integration)
- **Netlify** (with Next.js adapter)
- **Docker** (containerized deployment)
- **AWS**, **GCP**, **Azure** (with appropriate configurations)

### Quick Vercel Deployment

```bash
npm install -g vercel
vercel
```

## 📧 Contact

- **Email**: akashrao.creates@gmail.com
- **GitHub**: See project links for more work
- **LinkedIn**: Available in contact section

## 📄 License

This project is personal and proprietary. Unauthorized copying, modification, or distribution is not permitted without explicit written consent.

## 🤝 Contributing

This is a personal portfolio. For suggestions or improvements to the portfolio itself, feel free to open discussions, but code modifications require owner approval.

---

**Built with Next.js 15 & React 19** | Last Updated: April 2026
