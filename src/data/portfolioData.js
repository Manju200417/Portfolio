export const personalInfo = {
  name: "Manjunath Alagawadi",
  shortName: "Manjunath",
  initials: "MA",
  tagline: "Full-Stack Developer, AI & IoT Enthusiast",
  subTagline: "BCA Graduate (7.59 CGPA) Building AI-Powered Web Applications & IoT Systems",
  cgpa: "7.59",
  location: "Dharwad, Karnataka, India",
  relocationText: "Open to Relocate Anywhere in India & Remote",
  email: "manjuguru814@gmail.com",
  phone: "+91-7795588287",
  whatsappUrl: "https://wa.me/917795588287?text=Hi%20Manjunath,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
  github: "https://github.com/Manju200417",
  githubHandle: "Manju200417",
  linkedin: "https://linkedin.com/in/manju-alagawadi",
  linkedinHandle: "manju-alagawadi",
  resumePdfUrl: "/Manjunath_Alagawadi_Resume.pdf",
  resumeFileName: "Manjunath_Alagawadi_Resume.pdf",
  philosophyQuote: "Architecting clean Python backends, designing normalized SQL databases, and bridging artificial intelligence with physical IoT hardware.",
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "DR DG Shetty College, Dharwad",
    university: "Affiliated to Karnatak University Dharwad",
    period: "2023 – 2026",
    status: "Graduated (CGPA: 7.59 / 10.0)",
    cgpaText: "7.59 / 10.0 CGPA",
    keySubjects: [
      { name: "Database Management Systems (DBMS / SQL)", grade: "A Grade (Core Focus)" },
      { name: "Data Structures & Algorithms", grade: "A Grade" },
      { name: "Object-Oriented Programming (Python / Java)", grade: "Core Specialty" },
      { name: "Web Technologies & REST APIs", grade: "Practical Excellence" },
      { name: "Computer Networks & IoT Hardware", grade: "Applied Interest" },
    ]
  },
  bioSummary: "BCA Graduate (7.59 CGPA) with hands-on experience in Python, Flask, REST APIs, SQL, JavaScript, and IoT. Built AI-powered web apps, RAG study systems, and computer-vision IoT setups. Seeking Software Engineer or Full-Stack roles. Open to relocate anywhere in India or work remotely.",
  availability: "Open to Software Engineer, IoT & Other Developer Roles (Relocate Anywhere in India)",
  currentlyLearning: ["Docker Containerization", "FastAPI Framework", "Advanced RAG & IoT Protocols"],
};

export const stats = [
  { label: "BCA CGPA", value: "7.59", icon: "Award" },
  { label: "Projects", value: "5+", icon: "Code2" },
  { label: "Certifications", value: "7", icon: "ShieldCheck" },
  { label: "Hackathons", value: "2+", icon: "Trophy" },
];

export const techMarquee = [
  { name: "Python", category: "Language" },
  { name: "Flask", category: "Backend" },
  { name: "IoT & ESP32", category: "Hardware" },
  { name: "Hardware-Software Integration", category: "IoT" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Groq API & RAG", category: "AI & ML" },
  { name: "MySQL", category: "Database" },
  { name: "SQLite", category: "Database" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git & GitHub", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Arduino & GPIO", category: "IoT" },
  { name: "OpenCV", category: "Vision" },
  { name: "OpenAI API", category: "AI & ML" },
  { name: "HTML5 / CSS3", category: "Frontend" },
];

export const projects = [
  {
    id: "notesapp",
    title: "NotesApp — AI-Powered Full-Stack Notes Management System",
    period: "Jan 2025 – Present",
    category: "AI & Full-Stack",
    isFeatured: true,
    repoMetrics: "Python 3.11 · Flask 3.0 · REST API v1",
    description: "Full-stack notes platform with multi-category uploads, metadata filtering, dual-database architecture, and Groq-API-powered AI chatbot with RAG for interactive study guidance.",
    shortDescription: "AI-powered notes management with RAG chatbot and dual-database architecture.",
    bullets: [
      "Dual-database architecture (SQLite metadata + MySQL LONGBLOB storage).",
      "Groq API with RAG for contextual Q&A on uploaded notes.",
      "Role-based auth, session management, and category-wise search."
    ],
    schemaNotes: "Dual DB: SQLite (Metadata/Auth Schema) + MySQL (LONGBLOB Storage). RAG Pipeline vectorizes uploaded PDF/text note chunks.",
    apiEndpoints: [
      "POST /api/v1/auth/login — User Authentication",
      "POST /api/v1/notes/upload — File & Metadata Processing",
      "POST /api/v1/ai/rag-chat — Contextual Groq LLM Query",
      "GET /api/v1/notes/filter?cat={category} — Categorized Lookup"
    ],
    tags: ["Python", "Flask", "REST API", "SQLite", "MySQL", "JavaScript", "Jinja2", "Groq API", "RAG"],
    githubUrl: "https://github.com/Manju200417/NotesApp",
    liveUrl: null,
    todoNotice: null
  },
  {
    id: "servo-hand-detection",
    title: "Control_Servo_By_Hand__ESP32 (IoT & CV)",
    period: "2024",
    category: "Hardware & IoT",
    isFeatured: true,
    badgeText: "IoT & Hardware Highlight",
    repoMetrics: "Python 3.10 · OpenCV 4.8 · ESP32 / Arduino C++",
    pinoutDiagram: "ESP32 Pinout: GPIO 18 (PWM Output) → Servo Signal Pin | VCC (5V) & GND | OpenCV MediaPipe Joint Angle Mapping",
    description: "Computer-vision & embedded IoT system using OpenCV hand gesture tracking to actuate servo motors in real-time via ESP32/Arduino microcontrollers and GPIO signal control.",
    shortDescription: "OpenCV hand gesture tracking to control servo motors via ESP32 microcontrollers.",
    bullets: [
      "OpenCV + MediaPipe to track hand landmarks and calculate joint angles in real time.",
      "Serial control signals over GPIO pins to ESP32 / Arduino microcontrollers.",
      "Demonstrates competency in physical computing, robotics, and hardware-software bridging."
    ],
    schemaNotes: "Serial Communication Protocol (115200 baud). Python MediaPipe landmark coordinates mapped to 0°-180° Servo Duty Cycle.",
    apiEndpoints: [
      "Serial UART Interface: Transmits angle packets 'A:120\\n' at 30 FPS",
      "GPIO 18 PWM Generator: 50Hz Servo Actuation Duty Pulse"
    ],
    tags: ["OpenCV", "Python", "ESP32/Arduino", "GPIO", "Servo Control", "Computer Vision", "IoT"],
    githubUrl: "https://github.com/Manju200417/Control_Servo_By_Hand__ESP32",
    liveUrl: null,
    todoNotice: null
  },
  {
    id: "student-management",
    title: "Student-Management-System-V2",
    period: "Oct 2024 – Dec 2024",
    category: "Web Apps",
    isFeatured: true,
    isLive: true,
    repoMetrics: "Python 3.10 · Flask 2.3 · SQLite 3",
    description: "Production-deployed student records management web system featuring full CRUD operations, secure authentication, and an administrative dashboard.",
    shortDescription: "Production-deployed student records system with CRUD operations and admin dashboard.",
    bullets: [
      "Normalized SQLite relational schema for student demographics, attendance, and performance.",
      "Secure session authentication and role-based access for faculty vs student views.",
      "Deployed to production on PythonAnywhere with zero downtime."
    ],
    schemaNotes: "Normalized 3NF relational schema (Students, Faculty, Courses, Attendance, Marks tables with Foreign Keys).",
    apiEndpoints: [
      "POST /student/create — Add Record",
      "GET /student/list — Paginated Records View",
      "PUT /student/update/{id} — Update Academic Data",
      "DELETE /student/delete/{id} — Delete Record"
    ],
    tags: ["Python", "Flask", "SQLite", "HTML", "CSS", "PythonAnywhere"],
    githubUrl: "https://github.com/Manju200417/Student-Management-System-V2",
    liveUrl: "https://manju200417.pythonanywhere.com/",
    todoNotice: null
  },
  {
    id: "eventhub",
    title: "EventHub — AI Event Management App",
    period: "Nov 2025 (BrainHacks 2025)",
    category: "Hackathons",
    isFeatured: true,
    isLive: true,
    badgeText: "BrainHacks 2025 @ KLE BCA College",
    repoMetrics: "Python 3.11 · Flask REST · JS ES6",
    description: "AI-driven event coordination and discovery platform created under hackathon time constraints.",
    shortDescription: "AI-driven event coordination platform built during BrainHacks 2025 hackathon.",
    bullets: [
      "Core backend business logic, event schedule generation, and Flask REST endpoints.",
      "Frontend JavaScript components connected to REST APIs for event booking and search.",
      "Recognized for backend clean architecture during BrainHacks 2025 presentation."
    ],
    schemaNotes: "Event Schedules & Attendee Reservations Schema with RESTful JSON payloads.",
    apiEndpoints: [
      "GET /api/events — Search & Filter Events",
      "POST /api/events/book — Register Attendee Seat"
    ],
    tags: ["Python", "Flask", "JavaScript", "REST API", "AI Integration"],
    githubUrl: "https://github.com/Manju200417/EventHub",
    liveUrl: "https://manju200417.github.io/EventHub/",
    todoNotice: null
  },
  {
    id: "playful-learning",
    title: "playful-learning-ai",
    period: "Nov 2025 (CodeBharat)",
    category: "Hackathons",
    isFeatured: true,
    badgeText: "CodeBharat @ IIIT Dharwad",
    repoMetrics: "Python 3.11 · AI Prompt Engine · Tailwind",
    description: "AI-powered play-based interactive learning platform designed to enhance student engagement through adaptive educational workflows.",
    shortDescription: "AI-powered interactive learning platform with gamified progression tracking.",
    bullets: [
      "Built at CodeBharat, a national-level hackathon at IIIT Dharwad.",
      "Responsive student UI views with AI model response handlers.",
      "Gamified progression tracking and backend state sync."
    ],
    schemaNotes: "Gamified Quiz State Engine & Dynamic AI Question Generator.",
    apiEndpoints: [
      "POST /api/ai/quiz-generate — Generates Adaptive Question Sets"
    ],
    tags: ["Python", "Flask", "AI Integration", "Educational AI", "Tailwind CSS"],
    githubUrl: "https://github.com/Manju200417/playful-learning-ai",
    liveUrl: null,
    todoNotice: null
  },
  {
    id: "bank-management",
    title: "Bank Management System",
    period: "2024",
    category: "Web Apps",
    isFeatured: false,
    repoMetrics: "Python 3.10 · SQL ACID · Transactions",
    description: "Robust terminal & database CRUD-based application for managing financial accounts, transaction logging, and ledger validation.",
    shortDescription: "Terminal-based financial account management with ACID transaction support.",
    bullets: [
      "Implemented strict database ACID transactions for deposit, withdrawal, and transfer workflows.",
      "Designed clean SQL schema with foreign keys and index optimization for record lookup."
    ],
    schemaNotes: "Accounts, Ledger, and Transaction Audit Logs with Transaction Rollback handling.",
    apiEndpoints: [
      "POST /bank/transfer — Atomic Account Transfer with Ledger Commit"
    ],
    tags: ["Python", "SQL", "CRUD", "Data Integrity"],
    githubUrl: "https://github.com/Manju200417",
    liveUrl: null,
    todoNotice: null
  }
];

export const miniProjects = [
  {
    title: "Flask-Weather-App",
    description: "Real-time weather dashboard fetching live meteorological data via REST APIs.",
    shortDescription: "Real-time weather dashboard with live API data.",
    tags: ["Python", "Flask", "REST API", "Render", "Async/Await"],
    githubUrl: "https://github.com/Manju200417/Flask-Weather-App",
    liveUrl: "https://flask-weather-app-gzgf.onrender.com/",
    todoNotice: null
  },
  {
    title: "Calc-Server--REST-API",
    description: "Lightweight Flask REST service serving calculated mathematical endpoints with input sanitization.",
    shortDescription: "Flask REST API for mathematical calculations.",
    tags: ["Python", "Flask", "REST API", "Render", "JSON"],
    githubUrl: "https://github.com/Manju200417/Calc-Server--REST-API",
    liveUrl: "https://calc-server-rest-api.onrender.com/",
    todoNotice: null
  }
];

export const approachSteps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Problem & Hardware Scope",
    description: "Deconstruct requirements, evaluate constraints, and choose the right stack (Python, Flask, C/C++, ESP32, SQL) before coding."
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Architecture & Protocols",
    description: "Architect schemas, design REST APIs, map GPIO pinouts/sensors, and sketch responsive UI states."
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Clean Code & Testing",
    description: "Write structured backend logic, implement frontend/IoT protocols, and perform iterative testing."
  },
  {
    number: "04",
    title: "Ship & Document",
    subtitle: "Deployment & Docs",
    description: "Deploy to PythonAnywhere/Render, flash microcontrollers, write documentation, and reflect on improvements."
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", isPrimary: true, level: "Core Specialty" },
      { name: "Java", isPrimary: false, level: "Proficient" },
      { name: "C / Embedded C", isPrimary: false, level: "Working Knowledge" },
      { name: "JavaScript (ES6+)", isPrimary: false, level: "Proficient" },
      { name: "SQL", isPrimary: false, level: "Core Specialty" },
      { name: "HTML5", isPrimary: false, level: "Proficient" },
      { name: "CSS3", isPrimary: false, level: "Proficient" },
    ]
  },
  {
    category: "Web & Backend Development",
    icon: "Globe",
    skills: [
      { name: "Flask", isPrimary: true, level: "Core Specialty" },
      { name: "REST API Development", isPrimary: true, level: "Core Specialty" },
      { name: "FastAPI", isLearning: false, note: "Basic–Intermediate", level: "Working Knowledge" },
      { name: "React", isLearning: false, note: "Basic–Intermediate", level: "Working Knowledge" },
      { name: "Jinja2 Templating", isPrimary: false, level: "Proficient" },
      { name: "Responsive UI Design", isPrimary: false, level: "Proficient" },
      { name: "Session & Auth Security", isPrimary: false, level: "Proficient" },
    ]
  },
  {
    category: "IoT, Microcontrollers & Vision",
    icon: "HardDrive",
    skills: [
      { name: "Hardware-Software Integration", isPrimary: true, level: "Core Focus" },
      { name: "ESP32 Development", isPrimary: true, level: "Core Specialty" },
      { name: "Arduino Microcontrollers", isPrimary: true, level: "Core Specialty" },
      { name: "OpenCV Hand/Gesture Tracking", isPrimary: false, level: "Proficient" },
      { name: "GPIO & Sensor Programming", isPrimary: false, level: "Proficient" },
      { name: "Servo Motor Actuation", isPrimary: false, level: "Proficient" },
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "SQLite", isPrimary: true, level: "Core Specialty" },
      { name: "MySQL", isPrimary: true, level: "Core Specialty" },
      { name: "PostgreSQL", note: "Basic", level: "Working Knowledge" },
      { name: "Database Schema Normalization", isPrimary: false, level: "Proficient" },
      { name: "BLOB Storage Handling", isPrimary: false, level: "Proficient" },
    ]
  },
  {
    category: "AI & Data Science",
    icon: "Cpu",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", isPrimary: true, level: "Core Specialization" },
      { name: "AI API Integration (Groq, OpenAI)", isPrimary: true, level: "Core Specialty" },
      { name: "NumPy", isPrimary: false, level: "Proficient" },
      { name: "Pandas", isPrimary: false, level: "Proficient" },
      { name: "OCR Integration (Tesseract)", isPrimary: false, level: "Proficient" },
      { name: "Ollama (Local LLMs)", isPrimary: false, level: "Working Knowledge" },
    ]
  },
  {
    category: "Tools & DevOps Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", isPrimary: true, level: "Core Specialty" },
      { name: "VS Code", isPrimary: false, level: "Proficient" },
      { name: "PythonAnywhere", isPrimary: false, level: "Proficient" },
      { name: "Render", isPrimary: false, level: "Proficient" },
      { name: "Docker", isLearning: true, note: "Currently Learning", level: "Learning" },
      { name: "Linux/macOS Terminal", isPrimary: false, level: "Proficient" },
    ]
  }
];

export const certifications = [
  {
    id: "swe-intern-hackerrank",
    title: "Software Engineer Intern Certification",
    issuer: "HackerRank",
    techLogoName: "python",
    category: "Software Development",
    badge: "Verified Skill",
    credentialId: "b0eabc35dd5c",
    issueDate: "06 Feb 2026",
    skillsValidated: ["Software Engineering Principles", "Problem Solving", "Core Algorithms", "System Execution"],
    description: "Verified competence in software engineering principles, algorithm design, data structures, and problem-solving.",
    verifyUrl: "https://www.hackerrank.com/certificates/b0eabc35dd5c"
  },
  {
    id: "java-basic-hackerrank",
    title: "Java (Basic) Skill Certification",
    issuer: "HackerRank",
    techLogoName: "java",
    category: "Software Development",
    badge: "Java Verified",
    credentialId: "4e883ca68aa8",
    issueDate: "21 Feb 2025",
    skillsValidated: ["Java Language Fundamentals", "Object-Oriented Programming (OOP)", "Control Structures", "Collections"],
    description: "Verified foundational competence in Java syntax, OOP concepts, loops, array handling, and data processing.",
    verifyUrl: "https://www.hackerrank.com/certificates/4e883ca68aa8"
  },
  {
    id: "python-oneroadmap",
    title: "Python – Skill Certification",
    issuer: "OneRoadmap (DPIIT-recognized & MSME-registered)",
    techLogoName: "python",
    category: "Programming & Backend",
    badge: "Python Certified",
    credentialId: "CERT-D1EFC414",
    issueDate: "25 Sep 2025",
    skillsValidated: ["Python Core Syntax", "Functions & Modules", "File Handling & Automation", "Backend Logic"],
    description: "Comprehensive Python certification by DPIIT-recognized OneRoadmap validating core Python programming, data structures, modules, and backend logic.",
    verifyUrl: "https://www.oneroadmap.io/skills/python/certificate/CERT-D1EFC414"
  },
  {
    id: "sql-oneroadmap",
    title: "SQL – Skill Certification",
    issuer: "OneRoadmap (DPIIT-recognized & MSME-registered)",
    techLogoName: "sql",
    category: "Database & Data Architecture",
    badge: "SQL Certified",
    credentialId: "CERT-61129485",
    issueDate: "25 Sep 2025",
    skillsValidated: ["SQL Query Optimization", "Relational Joins & Aggregations", "Database Schema Design", "CRUD Operations"],
    description: "Validation of relational database modeling, complex SQL queries, JOINs, indexing, normalization, and ACID transactions.",
    verifyUrl: "https://www.oneroadmap.io/skills/sql/certificate/CERT-61129485"
  },
  {
    id: "fs-oneroadmap",
    title: "Full Stack Developer – Skill Certification",
    issuer: "OneRoadmap (DPIIT-recognized & MSME-registered)",
    techLogoName: "react",
    category: "Software Development",
    badge: "Full-Stack Certified",
    credentialId: "CERT-B21AE3D2",
    issueDate: "25 Sep 2025",
    skillsValidated: ["Full-Stack Architecture", "REST API Development", "Database Integration", "Frontend & Backend"],
    description: "Full-Stack Developer certification validating web application architecture, database connectivity, API design, and client-server integration.",
    verifyUrl: "https://www.oneroadmap.io/skills/fs/certificate/CERT-B21AE3D2"
  },
  {
    id: "google-agentic-ai",
    title: "Google Agentic AI & Generative AI",
    issuer: "Google / Hack2Skill",
    techLogoName: "google",
    category: "AI & Machine Learning",
    badge: "AI Specialization",
    credentialId: null,
    issueDate: "2025",
    skillsValidated: ["Agentic AI Workflows", "Generative AI APIs", "Prompt Engineering", "RAG & LLM Integration"],
    description: "Training on building autonomous AI agents, Google GenAI APIs, RAG, and multi-turn conversational models.",
    verifyUrl: null
  },
  {
    id: "deloitte-simulation",
    title: "Technology Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    techLogoName: "deloitte",
    category: "Industry & Enterprise Simulation",
    badge: "Industry Certified",
    credentialId: null,
    issueDate: "2025",
    skillsValidated: ["Enterprise Software Architecture", "Cybersecurity Basics", "Cloud Systems", "Agile Development"],
    description: "Industry simulation executing enterprise software tasks, code reviews, security assessment, and technical solution proposals.",
    verifyUrl: null
  }
];

export const recruiterFaqs = [
  {
    question: "Are you open to full-time roles or internships?",
    answer: "Yes! As a BCA graduate (7.59 CGPA), I'm immediately available for full-time Software Engineer, Full-Stack/Backend Developer, IoT Engineer, Intern, or other technical roles."
  },
  {
    question: "What is your current availability and notice period?",
    answer: "I'm a graduate with no notice period and am immediately available to join full-time positions or internships."
  },
  {
    question: "What are your core technical strengths & domain interests?",
    answer: "My strongest area is Python backend development (Flask, REST APIs, SQL, AI/RAG) with a focus on IoT (ESP32, Arduino, OpenCV, GPIO). I enjoy building software that connects to physical hardware and web applications."
  },
  {
    question: "Are you open to relocation anywhere in India or remote work?",
    answer: "Yes! I'm fully open to relocate anywhere in India and am fully set up for remote software engineering roles."
  },
  {
    question: "Can I review your complete resume and code repositories?",
    answer: "Yes! Click 'Download Resume' to view my ATS-formatted PDF resume. All project repositories are publicly accessible at github.com/Manju200417."
  }
];
