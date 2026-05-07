// src/data/portfolioData.js

export const personalInfo = {
  name: "Amrish Kumar Tiwary",
  taglines: [
    "Software Engineer",
    "AI/ML Developer",
    "Full Stack Developer",
    "GEN AI Developer",
    "Competitive Programmer",
  ],
  bio: `I'm a passionate software engineer currently pursuing B.Tech in Information Technology at Narula Institute of Technology, Kolkata. I specialize in building AI-driven, real-time platforms — from RAG-based disease detection systems to scalable oceanographic intelligence tools. I love turning complex problems into elegant, high-performance solutions.`,
  location: "Kolkata, West Bengal, India",
  email: "tiwariambrish81@gmail.com",
  phone: "+91 6206678489",
  github: "https://github.com/Coderamrish",
  linkedin: "https://linkedin.com/in/amrish-kumar-tiwary",
  instagram: "https://instagram.com/amrish_tiwary_",
  resumePdf: "/assets/Amrish_Resume.pdf",
};

export const education = [
  {
    institution: "Narula Institute of Technology",
    degree: "Bachelor of Technology – Information Technology",
    duration: "Jul 2023 – May 2027",
    location: "Kolkata, West Bengal",
    gpa: "7.7 / 10",
    icon: "🎓",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Fish Disease Detection",
    subtitle: "Meenasetu",
    description:
      "RAG pipeline with ChromaDB vector embeddings and transformer-based LLMs reducing hallucinations by 45%. CNN-based fish disease detection achieving 94% accuracy with OpenCV, GIS integration, and real-time WebSocket alerts.",
    highlights: [
      "45% reduction in hallucinations via prompt engineering",
      "Handles 10K+ concurrent users with <200ms response",
      "94% CNN accuracy for disease detection",
      "40% faster farmer response via WebSocket alerts",
    ],
    tech: ["Python", "RAG", "ChromaDB", "TensorFlow", "OpenCV", "Redis", "WebSocket", "GIS"],
    github: "https://github.com/Coderamrish",
    live: "#",
    color: "#00e5ff",
  },
  {
    id: 2,
    title: "Oceanographic Data Intelligence Platform",
    subtitle: "NeptuneAI",
    description:
      "Real-time AI platform processing 500K+ oceanographic data points. RAG with transformer models for context-aware NLP, safest maritime route finding, and FastAPI + PostgreSQL backend delivering sub-second 3D visualizations.",
    highlights: [
      "500K+ oceanographic data points processed",
      "60% improvement in maritime query accuracy",
      "Real-time safest route with hazard & weather data",
      "Sub-second retrieval for interactive 3D charts",
    ],
    tech: ["FastAPI", "PostgreSQL", "RAG", "MCP", "Python", "NLP", "3D Viz"],
    github: "https://github.com/Coderamrish",
    live: "#",
    color: "#7c4dff",
  },
  {
    id: 3,
    title: "Smart Ambulance Booking System",
    subtitle: "Emergency Platform",
    description:
      "Real-time ambulance booking platform with driver onboarding, multiple payment integrations, and geospatial routing. RESTful APIs with JWT auth optimizing MongoDB queries for 80% faster booking processing.",
    highlights: [
      "5K+ monthly active users",
      "80% faster booking via optimized MongoDB queries",
      "Google Maps & Geolocation integration",
      "Mobile-first responsive UI with geospatial routing",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "Google Maps API"],
    github: "https://github.com/Coderamrish",
    live: "#",
    color: "#ff6d00",
  },
];

export const skills = {
  "Programming Languages": ["C", "C++", "Python", "JavaScript", "HTML/CSS"],
  "Frameworks & Libraries": ["React", "Node.js", "Express", "FastAPI", "LangChain", "TensorFlow", "Scikit-learn", "WebSocket"],
  "AI / ML": ["RAG", "LLMs", "ChromaDB", "Prompt Engineering", "CNN", "NLP", "MCP"],
  "Databases & Caching": ["MongoDB", "PostgreSQL", "Redis", "ChromaDB"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Postman", "VS Code", "Jupyter", "RESTful APIs", "JWT"],
  "CS Fundamentals": ["OOP", "DSA", "OS", "DBMS", "Computer Networks"],
};

export const achievements = [
  {
    title: "LeetCode Weekly Contest 448",
    detail: "Global Rank 466",
    icon: "🏆",
  },
  {
    title: "Hackstorm Winner",
    detail: "Rank 6 among 500+ teams – BPPIMT",
    icon: "🥇",
  },
  {
    title: "CodeWar Pune Winner",
    detail: "Top 50 among 1000+ – Newton School of Technology",
    icon: "🎯",
  },
  {
    title: "IIT Guwahati Strategy Storm 2025",
    detail: "Round 2 Qualified – Top 15% of participants",
    icon: "⚡",
  },
  {
    title: "Competitive Programming",
    detail: "800+ problems solved – LeetCode Knight",
    icon: "⚔️",
  },
  {
    title: "TCS Codevita Season 13",
    detail: "Global Rank 280",
    icon: "🌐",
  },
];

export const blogs = [
  {
    title: "Building RAG Pipelines That Actually Work",
    summary: "Deep dive into prompt engineering and retrieval optimization to reduce hallucinations in production LLM systems.",
    date: "Coming Soon",
    tags: ["AI", "RAG", "LangChain"],
    link: "#",
  },
  {
    title: "Real-Time Systems with WebSocket and Redis",
    summary: "How I scaled a real-time disease alert system to handle 10K concurrent users with sub-200ms latency.",
    date: "Coming Soon",
    tags: ["Redis", "WebSocket", "Backend"],
    link: "#",
  },
  {
    title: "MCP: The Protocol Changing AI Tooling",
    summary: "An exploration of Model Context Protocol and how it's enabling complex multi-source AI query handling.",
    date: "Coming Soon",
    tags: ["MCP", "AI", "Architecture"],
    link: "#",
  },
];