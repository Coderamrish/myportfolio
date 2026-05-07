export const portfolioData = {
  name: "Amrish Kumar Tiwary",
  role: "Full Stack Developer | AI/ML & GenAI Engineer | Backend Developer",
  location: "Kolkata, India",
  phone: "+91 6206678489",
  email: "tiwariambrish81@gmail.com",
  summary: "Full-stack engineer and AI/ML specialist focused on building high-performance distributed systems and generative AI platforms. Expert in Python, C++, and Node.js with deep knowledge of RAG architectures, Model Context Protocol (MCP), and large-scale backend engineering.",
  
  socials: {
    github: "https://github.com/Coderamrish",
    linkedin: "https://www.linkedin.com/in/amrishtiwary/",
    leetcode: "https://leetcode.com/u/coderamrish/",
    gfg: "https://www.geeksforgeeks.org/profile/tiwariamuswm",
    resume: "https://drive.google.com/file/d/1eUQSewy_vw8XsiPp5yJR_UkYFPeO7yN7/view?usp=sharing"
  },

  skills: {
    languages: ["Python", "C++", "JavaScript", "SQL", "C", "HTML/CSS"],
    backend: [
      "Distributed Systems", 
      "Database Internals", 
      "Concurrency & Parallelism", 
      "Postgres Optimization", 
      "Redis Internals", 
      "Node.js / Express", 
      "FastAPI / Flask", 
      "Microservices (gRPC)", 
      "WebSockets / WebRTC"
    ],
    systemDesign: [
      "High Availability", 
      "Load Balancing", 
      "Database Sharding", 
      "Consistent Hashing", 
      "Scalability Patterns", 
      "Caching Strategies"
    ],
    ai_ml: [
      "Generative AI (LLMs)", 
      "RAG Pipelines", 
      "ChromaDB / Pinecone", 
      "MCP (Model Context Protocol)", 
      "LangChain", 
      "PyTorch / TensorFlow", 
      "Computer Vision"
    ],
    databases: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "SQLite", "Prisma ORM"],
    devops: ["Docker", "Kubernetes", "CI/CD", "AWS / Terraform", "Prometheus"],
    fundamentals: ["Advanced DSA", "Operating Systems", "DBMS Internals", "Computer Networks", "Low-Level Design"]
  },

  education: {
    institution: "Narula Institute of Technology",
    degree: "Bachelor of Technology, Information Technology",
    duration: "Jul 2023 - May 2027",
    gpa: "7.8/10",
    location: "Kolkata, West Bengal"
  },

  projects: [
    {
      title: "Meenasetu",
      subtitle: "AI-Powered Fish Disease Detection",
      description: "Engineered a RAG pipeline with ChromaDB vector embeddings and transformer-based LLMs, reducing hallucinations by 45%. Scaling system to handle 10K+ concurrent users with <200ms response times.",
      tags: ["GenAI", "RAG", "ChromaDB", "FastAPI"],
      link: "https://github.com/Coderamrish/Meenasetu",
      image: "/images/meenasetu.png"
    },
    {
      title: "NeptuneAI",
      subtitle: "Maritime Intelligence Platform",
      description: "Real-time, scalable AI platform processing 500K+ oceanographic data points with multi-source query handling via Model Context Protocol (MCP).",
      tags: ["AI/ML", "MCP", "RAG", "Python"],
      link: "https://github.com/Coderamrish/NeptuneAI",
      image: "/images/neptune.png"
    },
    {
      title: "AMBULANCE-KARO",
      subtitle: "Smart Booking System",
      description: "Real-time ambulance booking platform with driver onboarding & multiple payment integrations, serving 5K+ monthly users.",
      tags: ["Full Stack", "MongoDB", "Node.js"],
      link: "https://github.com/Coderamrish/AMBULANCE-KARO",
      image: "https://images.unsplash.com/photo-1587748891482-291120ae99d3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sports Club",
      subtitle: "Management Portal",
      description: "End-to-end solution for sports organizations with role-based access control and automated workflows.",
      tags: ["React", "Firebase", "Node.js"],
      link: "https://github.com/Coderamrish/sports_club",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800"
    }
  ],

  achievements: [
    {
      title: "TCS CodeVita",
      value: "Global Rank 280",
      description: "Season 13 participant achieving a top-tier global ranking.",
      icon: "Award"
    },
    {
      title: "Codewar Pune",
      value: "Hackathon Winner",
      description: "Emerged as a winner in the prestigious Codewar hackathon held in Pune.",
      icon: "Trophy"
    },
    {
      title: "Hackstorm",
      value: "Winner (Rank 6)",
      description: "Rank 6 among 500+ teams in the Hackstorm hackathon by BPPIMT.",
      icon: "Star"
    },
    {
      title: "Hackathon Record",
      value: "Won 5+ Hackathons",
      description: "Consistent winner in various regional and national level hackathons.",
      icon: "Zap"
    },
    {
      title: "LeetCode",
      value: "Knight Badge (2006)",
      description: "Peak rating of 2006, Global Rank 466.",
      icon: "Code"
    },
    {
      title: "CP Stats",
      value: "800+ Solved",
      description: "Extensive problem solving across LeetCode, GFG, and CodeChef.",
      icon: "Target"
    }
  ],

  research: [
    {
      title: "Real-time Maritime Intelligence using Model Context Protocol (NeptuneAI)",
      type: "Journal Paper",
      status: "Published",
      link: "https://drive.google.com/file/d/1__DgqbWfdEzTQQmIbiiQULB9a9zJ3vKa/view?usp=sharing",
      description: "Published research on integrating MCP for heterogeneous maritime data sources."
    },
    {
      title: "Advanced RAG Pipelines for Aquatic Disease Diagnosis (Meenasetu)",
      type: "Conference Paper",
      status: "Published",
      link: "https://docs.google.com/document/d/1VnxFL3WOHt8l5AglgwQfDNRK5Tk0uJ1b/edit?usp=sharing&ouid=105462409615536847622&rtpof=true&sd=true",
      description: "Research on optimizing retrieval mechanisms in aquaculture using transformer models."
    }
  ]
};