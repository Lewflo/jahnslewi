export const portfolioData = {
  personal: {
    name: "Jahns Lewi",
    role: "Software Engineer & Full-Stack Developer",
    tagline: "Crafting clean, accessible, and high-performance digital products.",
    bio: "I specialize in building scalable web and mobile applications from concept to deployment. Passionate about clean code architectures, modern JavaScript ecosystems, and delightful user experiences.",
    location: "Jakarta, Indonesia",
    availability: "Available for new opportunities & collaborations",
    email: "jahns.lewi@example.com",
    github: "https://github.com/jahnslewi",
    linkedin: "https://linkedin.com/in/jahnslewi",
    twitter: "https://twitter.com/jahnslewi",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Projects Completed", value: "18+" },
      { label: "Code Satisfaction", value: "99%" },
      { label: "Tech Stack", value: "Full Stack" },
    ],
  },

  about: {
    heading: "About Me",
    subheading: "Engineer, problem solver, and continuous learner.",
    paragraphs: [
      "Hello! I am Jahns Lewi, a software developer with a strong foundation in modern web technologies, responsive interface design, and backend engineering.",
      "My journey revolves around turning complex engineering challenges into intuitive, lightning-fast digital solutions. Whether designing modular component libraries or architecting robust RESTful APIs, I prioritize maintainability, performance, and clean aesthetics.",
      "When I am not coding, you can find me exploring emerging developer tooling, dissecting UI/UX trends, or contributing to technical discussions."
    ],
    principles: [
      {
        title: "Clean Architecture",
        description: "Maintainable, scalable, and self-documenting code with rigorous separation of concerns."
      },
      {
        title: "User-Centric Design",
        description: "Interfaces built with accessibility, snappy micro-interactions, and visual harmony in mind."
      },
      {
        title: "Speed & Performance",
        description: "Optimized bundle sizes, server-side caching, and sub-second load times across all devices."
      }
    ]
  },

  education: [
    {
      institution: "Bina Nusantara (BINUS) University",
      degree: "Bachelor of Computer Science (B.Comp.Sc.)",
      period: "2021 — 2025",
      description: "Focused on Software Engineering, Database Systems, Algorithm Design, and Web Architectures.",
      badge: "Degree"
    }
  ],

  experience: [
    {
      role: "Full-Stack Software Developer",
      company: "Tech Innovation Labs",
      location: "Jakarta, Indonesia",
      period: "2024 — Present",
      description: "Leading frontend architecture and backend API integrations for enterprise-grade web applications. Mentored junior developers and improved site performance metrics by 40%.",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"]
    },
    {
      role: "Frontend Developer",
      company: "Digital Studio & Solutions",
      location: "Jakarta, Indonesia",
      period: "2023 — 2024",
      description: "Developed responsive, pixel-perfect user interfaces for client web portals and dashboards. Integrated payment gateways and optimized Lighthouse audit scores.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"]
    },
    {
      role: "Software Engineering Intern",
      company: "Ureeka Tech",
      location: "Jakarta, Indonesia",
      period: "2022 — 2023",
      description: "Assisted in building reusable UI component libraries, creating unit test suites, and collaborating with UI/UX designers using Figma.",
      technologies: ["JavaScript", "React", "CSS Modules", "Git"]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "Ureeka Platform",
      category: "Full Stack",
      description: "An intuitive collaborative platform featuring real-time state sync, workspace management, and responsive dashboard analytics.",
      technologies: ["React", "Node.js", "Tailwind CSS", "WebSockets", "PostgreSQL"],
      liveUrl: "https://example.com/ureeka",
      githubUrl: "https://github.com/jahnslewi/ureeka-platform",
      featured: true,
      metrics: "500+ active users",
    },
    {
      id: "project-2",
      title: "Pulse Analytics Dashboard",
      category: "Frontend",
      description: "Modern analytics portal featuring interactive charting, transaction monitoring, and exportable report generation.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://example.com/pulse-analytics",
      githubUrl: "https://github.com/jahnslewi/pulse-dashboard",
      featured: true,
      metrics: "<1s average page load",
    },
    {
      id: "project-3",
      title: "HyperCommerce Storefront",
      category: "Full Stack",
      description: "Headless e-commerce solution with dynamic product catalog, cart persistence, and Stripe checkout integration.",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "Stripe API"],
      liveUrl: "https://example.com/hypercommerce",
      githubUrl: "https://github.com/jahnslewi/hypercommerce",
      featured: true,
      metrics: "99+ Lighthouse performance score",
    },
    {
      id: "project-4",
      title: "TaskFlow Kanban App",
      category: "Frontend",
      description: "Drag-and-drop workflow organizer with multi-board support, tags, filters, and local data synchronization.",
      technologies: ["React", "Vite", "Tailwind CSS", "Lucide React"],
      liveUrl: "https://example.com/taskflow",
      githubUrl: "https://github.com/jahnslewi/taskflow",
      featured: false,
      metrics: "100% offline-ready",
    },
    {
      id: "project-5",
      title: "DevMetrics API Service",
      category: "Backend",
      description: "Microservice tracking GitHub repository statistics, commit velocities, and developer activity streams.",
      technologies: ["Node.js", "Express", "Redis", "Docker"],
      liveUrl: "https://example.com/devmetrics",
      githubUrl: "https://github.com/jahnslewi/devmetrics-api",
      featured: false,
      metrics: "99.9% uptime SLA",
    },
    {
      id: "project-6",
      title: "Smart Budget Tracker",
      category: "Mobile & Web",
      description: "Personal finance app that categorizes expenditures, forecasts monthly budgets, and generates visual spending breakdowns.",
      technologies: ["React", "Tailwind CSS", "IndexedDB", "PWA"],
      liveUrl: "https://example.com/smart-budget",
      githubUrl: "https://github.com/jahnslewi/smart-budget",
      featured: false,
      metrics: "PWA installable",
    }
  ],

  skills: {
    categories: [
      {
        name: "Frontend Development",
        items: [
          { name: "React.js", level: "Advanced" },
          { name: "Next.js", level: "Advanced" },
          { name: "TypeScript", level: "Proficient" },
          { name: "JavaScript (ES6+)", level: "Advanced" },
          { name: "Tailwind CSS", level: "Advanced" },
          { name: "HTML5 / CSS3", level: "Advanced" },
          { name: "Redux / Zustand", level: "Proficient" },
        ]
      },
      {
        name: "Backend & Cloud",
        items: [
          { name: "Node.js", level: "Advanced" },
          { name: "Express.js", level: "Advanced" },
          { name: "RESTful APIs", level: "Advanced" },
          { name: "PostgreSQL", level: "Proficient" },
          { name: "MongoDB", level: "Proficient" },
          { name: "Supabase & Firebase", level: "Proficient" },
        ]
      },
      {
        name: "Tools & Methodologies",
        items: [
          { name: "Git & GitHub", level: "Advanced" },
          { name: "Docker", level: "Intermediate" },
          { name: "Vite / Webpack", level: "Advanced" },
          { name: "Postman", level: "Advanced" },
          { name: "Figma (UI/UX)", level: "Proficient" },
          { name: "Agile / Scrum", level: "Proficient" },
        ]
      }
    ]
  }
};
