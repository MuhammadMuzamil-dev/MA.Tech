export const portfolioData = {
  profile: {
    name: "Muhammad Muzamil Ali",
    title: "React Developer | BSCS Student",
    roles: [
      "React Developer",
      "Full Stack Developer",
      "Problem Solver",
      "CS Student",
    ],
    bio: "Crafting clean interfaces by day, building full-stack dreams by night. A CS student, frontend developer, and digital marketer who turns ideas into real, working products.",
    longBio:
      "I'm Muhammad Muzamil Ali - a Computer Science student, frontend developer, and creative problem-solver based in Lahore, Pakistan. Currently in my 5th semester of BSCS, I'm leveling up fast - actively building with React.js, diving deep into the MERN Stack (MongoDB, Express, React, Node.js), and shipping real projects along the way. But I'm not just a developer. I bring a rare combination of technical skill and marketing instinct - with hands-on experience in Digital Media Marketing, I understand not just how to build products, but how to position and grow them. I've also built functional mobile apps using Kodular.ai - proving that great builders use every tool available, not just the most complex ones. I believe in writing code that is clean, purposeful, and built to last - and I bring that same discipline to everything I do.",
    location: "Lahore, Pakistan",
    email: "muhammadmuzamilali369@gmail.com",
    github: "https://github.com/MuhammadMuzamil-dev",
    linkedin: "https://linkedin.com/in/muzamil",
    status: "Available for opportunities",
    stats: [
      { label: "Projects", value: "5+" },
      { label: "Certifications", value: "3" },
      { label: "Years Coding", value: "2" },
      { label: "Education", value: "Semester 5 BSCS" },
    ],
  },
  skills: {
    frontend: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Figma"],
    topSkills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js", level: 75 },
      { name: "Git", level: 80 },
      { name: "Kodular.ai", level: 60 },
    ],
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A full-featured analytics dashboard for e-commerce stores, tracking sales, user metrics, and inventory in real-time.",
      tech: ["React", "Chart.js", "Tailwind"],
      category: "Full Stack",
      featured: true,
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "AI Chat Interface",
      description:
        "A modern, responsive chat UI integrating with OpenAI API, featuring markdown support and history management.",
      tech: ["React", "OpenAI API", "Framer Motion"],
      category: "Frontend",
      featured: false,
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Task Master App",
      description:
        "Productivity application with drag-and-drop Kanban boards, local storage persistence, and team collaboration features.",
      tech: ["React", "Redux", "Firebase"],
      category: "Full Stack",
      featured: false,
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Portfolio v1",
      description:
        "My previous portfolio site, built with raw HTML/CSS to master fundamentals before moving to component frameworks.",
      tech: ["HTML", "SASS", "JS"],
      category: "Frontend",
      featured: false,
      github: "#",
      live: "#",
    },
  ],
  experience: [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "Tech Solutions Lahore",
      period: "June 2023 - Aug 2023",
      description: [
        "Assisted in building responsive UI components using React.",
        "Optimized website performance resulting in 20% faster load times.",
        "Collaborated with the design team to implement pixel-perfect interfaces.",
      ],
    },
    {
      id: 2,
      role: "Digital Media Marketer",
      company: "Creative Agency",
      period: "Jan 2022 - May 2023",
      description: [
        "Managed social media campaigns for 5+ clients.",
        "Analyzed user engagement data to improve content strategy.",
        "Designed graphics and ad copies using Figma.",
      ],
    },
    {
      id: 3,
      role: "BSCS Student",
      company: "University of Lahore",
      period: "2022 - Present",
      description: [
        "Currently pursuing a Bachelor's in Computer Science.",
        "Relevant coursework: Data Structures, Algorithms, Web Engineering.",
      ],
    },
  ],
};
