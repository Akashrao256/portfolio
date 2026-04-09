export const person = {
  name: "J Akash Rao",
  role: "Backend-Focused Full Stack Developer",
  headline: "Building scalable API systems using MERN and Spring Boot",
  tagline: "Focused on authentication, backend architecture, and real-world systems",
  email: "akashrao.creates@gmail.com",
};

export const heroActions = [
  { label: "View Projects", href: "#projects", variant: "primary" as const },
  { label: "Get In Touch", href: "#contact", variant: "secondary" as const },
];

export const projects = [
  {
    title: "Civix - Digital Civic Engagement Platform",
    type: "Internship Project (Infosys Springboard)",
    role: "Backend Developer (MERN Stack)",
    highlights: [
      "Developed REST APIs using Node.js and Express",
      "MongoDB Atlas integration",
      "Implemented JWT authentication and validation",
      "Contributed to backend system design",
    ],
    problem:
      "The Civix platform needed a secure backend foundation for civic participation workflows, with reliable APIs and authentication supporting a broader internship-built product rather than an individual side project.",
    approach:
      "Focused on backend API design, authentication flows, request validation, and MongoDB-backed data handling inside the existing MERN application architecture.",
    solution:
      "Built and integrated REST APIs using Node.js and Express, connected the platform to MongoDB Atlas, and implemented JWT-based authentication and validation for secure request handling.",
    outcome:
      "Delivered backend functionality that strengthened the internship team project with cleaner API flows, secure authentication, and a more dependable system foundation for civic engagement use cases.",
  },
  {
    title: "Data Visualization & Insights Platform",
    type: "Full Stack Project",
    role: "Full Stack Developer",
    highlights: [
      "CSV and JSON dataset upload workflows",
      "REST APIs for ingestion and processing",
      "Interactive charts and reporting views",
      "Filtering and aggregation support",
    ],
    problem:
      "Raw CSV and JSON files are difficult to explore without a backend system that can process uploaded data and expose clean interfaces for analysis.",
    approach:
      "Took an API-first approach that separated upload handling, dataset processing, and queryable results so the platform could support interactive visual analysis.",
    solution:
      "Built dataset ingestion and processing APIs that transform uploaded files into structured records ready for charting, filtering, and aggregation.",
    outcome:
      "Turned static datasets into an analysis workflow that supports clearer insight generation and more usable reporting interfaces.",
  },
  {
    title: "Cloud-Based Fraud Detection System",
    type: "Backend Project",
    role: "Backend Developer",
    highlights: [
      "Java and Spring Boot backend services",
      "Rule-based fraud detection logic",
      "SQL database integration",
      "Backend design for extensibility",
    ],
    problem:
      "Fraud monitoring requires backend workflows that can evaluate transactions consistently, store results reliably, and keep detection logic maintainable.",
    approach:
      "Used a rules-first service design so fraud checks remained explicit, testable, and easier to extend as detection requirements evolve.",
    solution:
      "Developed a Spring Boot backend with SQL persistence to process transaction data and evaluate events against fraud detection rules.",
    outcome:
      "Produced a backend-oriented fraud detection prototype that demonstrates Java service design, persistence integration, and structured business logic.",
  },
];

export const skillGroups = [
  {
    title: "MERN Stack",
    description: "For API development, integrations, and full stack delivery in JavaScript ecosystems.",
    items: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Java Stack",
    description: "For structured backend services, business logic, and database-driven applications.",
    items: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Core Backend Skills",
    description: "Supporting capabilities that strengthen backend engineering and system implementation.",
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
    role: "Backend Developer (Internship)",
    period: "Internship Experience",
    points: [
      "Built APIs for the Civix platform",
      "Implemented JWT authentication",
      "Worked with MongoDB Atlas",
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
  "Use AI tools such as Codex and Cursor for structured code generation and implementation support",
  "Apply a problem-first prompting approach before generating code",
  "Validate and refine all AI-generated code before integration",
  "Focus on production-ready architecture, maintainability, and code quality",
];

export const currentlyBuilding = [
  "Improving the Civix platform with stronger backend capabilities",
  "Building backend systems with better API structure and reliability",
  "Learning system design to scale real-world applications more effectively",
];

export const contactLinks = [
  { label: "Email", value: person.email, href: `mailto:${person.email}` },

  { 
    label: "GitHub", 
    value: "github.com/Akashrao256", 
    href: "https://github.com/Akashrao256" 
  },

  { 
    label: "LinkedIn", 
    value: "linkedin.com/in/j-akash-rao", 
    href: "https://www.linkedin.com/in/j-akash-rao-926844305/" 
  },
];
