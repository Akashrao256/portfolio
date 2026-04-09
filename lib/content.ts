export const person = {
  name: "J Akash Rao",
  role: "Backend-Focused Full Stack Developer",
  headline: "Backend-Focused Full Stack Developer (MERN + Spring Boot)",
  tagline:
    "Building scalable backend systems with API design, authentication, and AI-assisted workflows",
  email: "akashrao.creates@gmail.com",
};

export const heroActions = [
  { label: "View Projects", href: "#projects", variant: "primary" as const },
  { label: "Get In Touch", href: "#contact", variant: "secondary" as const },
];

export const projects = [
  {
    title: "Civix",
    subtitle: "Digital Civic Engagement Platform",
    meta: "Infosys Springboard Internship Project",
    role: "Backend Developer (MERN Stack)",
    bullets: [
      "Developed REST APIs using Node.js and Express",
      "Integrated MongoDB Atlas for cloud-hosted data storage",
      "Implemented JWT authentication and request validation",
      "Worked on backend logic and API integration",
    ],
    problem:
      "Civic engagement workflows are often fragmented, making it hard for users to participate through a reliable digital platform.",
    approach:
      "Designed the backend around structured API contracts, secure authentication flows, and clean data access patterns in the MERN stack.",
    solution:
      "Built backend services that support user authentication, data persistence, and API-driven platform interactions with Node.js, Express, and MongoDB Atlas.",
    outcome:
      "Created a stable backend foundation for a civic engagement product while strengthening production-style API and authentication practices.",
  },
  {
    title: "Data Visualization & Insights Platform",
    subtitle: "Analytics and Reporting Workspace",
    meta: "Backend + Data Processing Project",
    role: "Full Stack Developer",
    bullets: [
      "Upload CSV and JSON datasets",
      "Built REST APIs for ingestion and processing",
      "Supported interactive charts and visual reporting",
      "Enabled filtering and aggregation workflows",
    ],
    problem:
      "Raw datasets are difficult to explore without a structured way to process, filter, and present insights visually.",
    approach:
      "Focused on API-first ingestion and transformation flows so datasets could move cleanly from upload to analysis-ready views.",
    solution:
      "Developed a platform that accepts CSV and JSON uploads, processes records through REST endpoints, and exposes structured data for charting, filtering, and aggregation.",
    outcome:
      "Improved dataset usability by turning raw files into interactive insight workflows that support faster analysis and reporting.",
  },
  {
    title: "Cloud-Based Fraud Detection System",
    subtitle: "Rule-Driven Transaction Monitoring",
    meta: "Java + Spring Boot Project",
    role: "Backend Developer",
    bullets: [
      "Built the backend using Java and Spring Boot",
      "Implemented rule-based fraud detection logic",
      "Integrated a SQL database for persistence",
      "Structured the service for backend extensibility",
    ],
    problem:
      "Fraud detection systems need dependable backend workflows that can flag suspicious activity consistently and explainably.",
    approach:
      "Used a rules-first backend design to keep detection logic explicit, maintainable, and easy to evolve over time.",
    solution:
      "Developed a Spring Boot backend backed by a SQL database to process events and evaluate transactions against fraud detection rules.",
    outcome:
      "Delivered a practical backend prototype for fraud monitoring while reinforcing Java service design and database integration skills.",
  },
];

export const skillGroups = [
  {
    title: "MERN Stack",
    items: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Java Stack",
    items: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Other",
    items: [
      "REST APIs",
      "JWT Authentication",
      "Spring Security (Basics)",
      "Data Structures & Algorithms",
    ],
  },
];

export const experiences = [
  {
    company: "Infosys Springboard",
    role: "Backend Developer",
    period: "Internship Experience",
    points: [
      "Built APIs for the Civix platform",
      "Worked with MongoDB Atlas for cloud data storage",
      "Implemented JWT authentication flows",
    ],
  },
  {
    company: "KodNest",
    role: "Java Full Stack Intern",
    period: "Internship Experience",
    points: [
      "Worked with Java and MySQL in full stack training and project work",
      "Built and debugged backend logic",
      "Strengthened problem solving through implementation and debugging tasks",
    ],
  },
];

export const certifications = [
  { title: "Certification Title 01", href: "#" },
  { title: "Certification Title 02", href: "#" },
  { title: "Certification Title 03", href: "#" },
];

export const workflowItems = [
  "Using Codex and Cursor to accelerate development workflows",
  "Writing structured prompts for implementation, debugging, and iteration",
  "Using AI to support debugging and refactoring tasks",
  "Validating AI-generated code before integrating it into projects",
];

export const currentlyBuilding = [
  "Improving the Civix platform with stronger backend capabilities",
  "Building backend systems with better API structure and reliability",
  "Learning system design to scale real-world applications more effectively",
];

export const contactLinks = [
  { label: "Email", value: person.email, href: `mailto:${person.email}` },
  { label: "GitHub", value: "#", href: "#" },
  { label: "LinkedIn", value: "#", href: "#" },
];
