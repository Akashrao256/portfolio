export const person = {
  name: "J Akash Rao",
  role: "Backend-Focused Full Stack Developer",
  headline: "Designing and building scalable backend systems across MERN and Spring Boot ecosystems",
  tagline:
    "Building secure backend services and full-stack applications with strong API design, authentication, and maintainable system architecture",
  email: "akashrao.creates@gmail.com",
};

export const heroActions = [
  { label: "View Projects", href: "#projects", variant: "primary" as const },
  { label: "Get In Touch", href: "#contact", variant: "secondary" as const },
];

export const projects = [
  {
    title: "Civix - Digital Civic Engagement Platform",
    github: "https://github.com/Chamu-sist-27/team_a",
    //demo: "https://civix-demo.vercel.app", 
    summary: "Built secure REST APIs and backend workflows for an internship civic engagement platform.",
    type: "Internship Project (Infosys Springboard)",
    role: "Backend Developer (MERN Stack)",
    stack: ["Node.js", "Express", "MongoDB Atlas", "JWT"],
    highlights: [
      "Developed REST APIs using Node.js and Express",
      "MongoDB Atlas integration",
      "Implemented JWT authentication and validation",
      "Contributed to backend system design",
    ],
    problem:
      "The internship team needed a dependable backend layer for civic participation workflows, with secure authentication and stable APIs supporting the broader Civix product.",
    approach:
      "Structured the backend around clear REST endpoints, validation, JWT-based access control, and cloud-hosted MongoDB data handling within the existing MERN architecture.",
    solution:
      "Built Express APIs, integrated MongoDB Atlas, and implemented JWT authentication with validation to support secure and consistent request handling.",
    outcome:
      "Strengthened the internship product with cleaner API flows, secure access control, and a more reliable backend foundation for civic engagement features.",
  },
  {
    title: "Data Visualization & Insights Platform",
    github: "https://github.com/Akashrao256/DV_PLATFORM",
    //demo: "https://civix-demo.vercel.app", 
    summary: "Built ingestion and reporting workflows that turn raw files into usable data views.",
    type: "Full Stack Project",
    role: "Full Stack Developer",
    stack: ["React.js", "Node.js", "Express", "Charts"],
    highlights: [
      "CSV and JSON dataset upload workflows",
      "REST APIs for ingestion and processing",
      "Interactive charts and reporting views",
      "Filtering and aggregation support",
    ],
    problem:
      "Raw datasets are hard to analyze when upload, transformation, and querying are handled manually or inconsistently.",
    approach:
      "Used an API-first design that separated file ingestion, data transformation, and query-ready outputs for the frontend reporting layer.",
    solution:
      "Built backend ingestion and processing APIs that convert CSV and JSON uploads into structured records for charting, filtering, and aggregation.",
    outcome:
      "Converted static files into a usable reporting workflow, making insight generation faster and more structured.",
  },
  {
    title: "Cloud-Based Fraud Detection System",
    github: "https://github.com/Akashrao256/Cloud-Based-Fraud-Detection-System",
    //demo: "https://civix-demo.vercel.app", 
    summary: "Developed a backend prototype for rule-based fraud detection and transaction evaluation.",
    type: "Backend Project",
    role: "Backend Developer",
    stack: ["Java", "Spring Boot", "SQL"],
    highlights: [
      "Java and Spring Boot backend services",
      "Rule-based fraud detection logic",
      "SQL database integration",
      "Backend design for extensibility",
    ],
    problem:
      "Fraud detection requires backend services that can evaluate transactions consistently while keeping rules explicit and maintainable.",
    approach:
      "Applied a rules-first backend design so transaction checks remained understandable, testable, and easier to evolve over time.",
    solution:
      "Developed Spring Boot services with SQL persistence to process transactions and evaluate them against fraud detection rules.",
    outcome:
      "Produced a backend prototype that demonstrates structured Java service design, persistence integration, and maintainable fraud logic.",
  },
];

export const skillGroups = [
  {
    title: "MERN Stack",
    description: "API design, service integration, and production-style backend delivery in JavaScript ecosystems.",
    items: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Java Stack",
    description: "Structured backend services, business logic, and database-driven application development.",
    items: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Core Backend Skills",
    description: "Backend fundamentals that support secure, maintainable, and scalable system design.",
    items: [
      "REST APIs",
      "JWT Authentication",
      "Spring Security (Basics)",
      "Data Structures & Algorithms",
    ],
  },
];

export const engineeringPrinciples = [
  {
    title: "Start with contracts",
    description: "Define API behavior, request boundaries, and data flow before implementation.",
  },
  {
    title: "Design for trust",
    description: "Build authentication, validation, and predictable backend behavior into the foundation.",
  },
  {
    title: "Keep logic maintainable",
    description: "Structure services so features can grow without turning core backend logic fragile.",
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
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    href: "https://drive.google.com/file/d/16WQdBwsDzIsLnYozQip8mwFiurYwyzMA/view",
  },
  {
    title: "Oracle Data Platform & Cloud Database",
    issuer: "Oracle",
    date: "Sep 2025",
    href: "https://drive.google.com/file/d/1KSnAyLk-iyMiJJhrVHConeLKoHUwDVaz/view",
  },
  {
    title: "Java Programming",
    issuer: "CodSoft",
    date: "Apr 2024",
    href: "https://drive.google.com/file/d/1dx1SP4VSlt7A6oj_WQofBBJx20ypg8st/view",
  },
  {
    title: "SQL Development",
    issuer: "Great Learning",
    date: "Oct 2024",
    href: "https://drive.google.com/file/d/1jM8ttVzFTQeAdGYLuFe-tKaIV8MUBF36/view",
  },
  {
    title: "Python Programming",
    issuer: "Spoken Tutorial",
    date: "Jun 2025",
    href: "https://drive.google.com/file/d/14CvC5zyHkpIiAkq_3M4Vb8SX1fU_3b_t/view",
  },
  {
    title: "JavaScript",
    issuer: "OpenWeaver",
    date: "Nov 2023",
    href: "https://drive.google.com/file/d/1vhrAwuKnRbqrpcafsDMRtgm4BIfhvjDl/view",
  },
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
