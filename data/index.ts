export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const myTechStack = [
  "JavaScript (ES7+)",
  "React",
  "Next.js",
  "TypeScript",
  "Storybook",
  "Performance Testing",
  "HTML",
  "CSS",
  "SQL",
  "TailwindCSS",
  "ShadCn/UI",
  "Framer",
  "Git",
  "CI/CD",
  "LangChain",
]

export const projects = [
  {
    id: 1,
    title: "🚀 AI Agent: Next-Gen Intelligent Assistant using GenerativeAI",
    description: "This AI-powered agent leverages LangChain, IBM Watsonx.ai, and Convex to orchestrate complex workflows, automate tasks, and deliver dynamic AI interactions. With real-time updates, secure authentication, and powerful AI tool integrations, it sets a new standard for intelligent assistants ✨ Using - LangChain for natural language processing - IBM Watsonx.ai for AI-powered workflows - Convex for secure authentication - Pinch of Prompt Engineering- Anthropic Claude for dynamic AI interactions - Shadcn/ui for a sleek UI - Vercel for seamless deployment",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "https://i.pinimg.com/originals/be/f4/1a/bef41a7d5a877841bbf7d8f9f0d42f14.gif",
    github: "https://github.com/govindrajgupta/nova-mind-ai-agent",
    link: "/",
    techs: [ "Next.js 15", "TypeScript", "LangChain", "Clerk", "Convex", "IBM Watsonx.ai", "Anthropic Claude", "Shadcn/ui", "Vercel"]
  },
  {
    id: 2,
    title: "🛍️ NexStore: Next-Gen E-Commerce Platform",
    description: "A lightning-fast e-commerce platform with real-time product updates, caching, and secure authentication. Built with Sanity for dynamic content and Clerk for seamless logins, ensuring a smooth shopping experience.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-start",
    img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
    github: "https://github.com/govindrajgupta/nexstore",
    link: "https://nexstore-silk.vercel.app/",
    techs: ["JavaScript", "React", "NodeJS", "AWS", "GitHub", "Jira"]
  },
  {
    id: 3,
    title: "🤖 PrimeCraft: AI-Powered Auto-Coding SaaS",
    description: "PrimeCraft is an AI-driven coding assistant that generates, optimizes, and auto-completes code in real-time. Built with LLMs and LangChain, it streamlines development with intelligent code suggestions, debugging, and automation.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-center",
    img: "https://i.pinimg.com/originals/54/b5/24/54b52468335fd6eb935e330eb3197b25.gif",
    github: "https://github.com/govindrajgupta/prime-craft",
    // link: "/",
    techs: ["TypeScript", "React", "NextJS", "CSS", "AWS", "GitHub"]
  },
  {
    id: 4,
    title: "NeuroSketch - AI-Powered Handwritten Math Calculator",
    description: " AI-powered handwritten math calculator inspired by iPad Math Notes/Calculator. It allows users to sketch mathematical expressions and get instant calculations using AI-powered recognition. The project integrates Google Gemini AI for advanced recognition and FastAPI for backend processing.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-start",
    img: "https://i.pinimg.com/736x/c7/de/01/c7de016c811fa5fae9d7120402f27645.jpg",
    github: "https://github.com/govindrajgupta/neuro-sketch._",
    // link: "/",
    techs: ["JavaScript", "NodeJS", "Express", "React", "Heroku", "GitHub"]
  },
  {
    id: 5,
    title: "CareVaultX - Patient Management System",
    description: "CareVaultX is an patient management system designed to streamline healthcare operations by automating patient record management, diagnosis assistance, and real-time monitoring. This project was showcased in the Microsoft Imagine Cup, highlighting its innovation in digital healthcare. Doctors & patients register securely using Clerk authentication , analyzes medical records & symptoms for diagnosis suggestions ,Doctors manage treatments & prescriptions via an intuitive dashboard ,Real-time monitoring ensures up-to-date patient history",
    className: "md:col-span-3 md:row-span-2",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "https://i.pinimg.com/736x/09/2e/25/092e252b5562c7e5eb576215c6d9db8d.jpg",
    github: "https://github.com/govindrajgupta/care-vault",
    link: "https://care-vault.vercel.app/",
    techs: ["JavaScript", "CSS", "React", "Tailwind", "GitHub", "AWS"]
  },
  {
    id: 6,
    title: "Heart Monitoring System IoT Project",
    description: "A real-time IoT solution for tracking heart rate and body temperature using Arduino Uno, Pulse Sensor, and ESP32. The system sends instant alerts via Twilio API when abnormal vitals are detected.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: "https://i.pinimg.com/originals/bf/c3/fb/bfc3fb764ff5f4d8d9ecb6da8544709c.gif",
    github: "https://github.com/govindrajgupta/iot-heart-monitoring-system",
    link: "https://projecthub.arduino.cc/projects/cbfabcdf-38bf-432b-bc8f-6a03b10638f3/preview",
    techs: ["JavaScript", "React", "NodeJS", "CSS", "NextJS", "GitHub"]
  }
];

export const workExperience = [
  {
    id: 1,
    company: "LumoTech",
    title: "UX/UI Sorcerer",
    desc: "Transformed the user dashboard with a sleek design that boosted engagement by 35%. Optimized the onboarding flow to make new users feel like wizards on their first try.",
    className: "md:col-span-2",
    location: "Los Angeles",
    period: "2022 - Present",
    skills: [
      "Figma",
      "Sketch",
      "Prototyping",
      "User Testing",
      "Illustrator",
      "Adobe XD"
    ]
  },
  {
    id: 2,
    company: "PixelMinds",
    title: "Product Design Genius",
    desc: "Revamped the interface with intuitive controls, increasing user retention by 28%. Pioneered AR features for interactive learning experiences—because education should be fun and engaging.",
    className: "md:col-span-2",
    location: "San Francisco",
    period: "2020 - 2022",
    skills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "CSS"
    ]
  },
  {
    id: 3,
    company: "DesignHub",
    title: "Design Systems Guru",
    desc: "Crafted design systems that were so organized they could be put in a museum. Pushed for consistent, user-friendly components that made developers’ lives easier.",
    className: "md:col-span-2",
    location: "Remote",
    period: "2016 - 2020",
    skills: [
      "Figma",
      "React",
      "Design Tokens",
      "Accessibility",
      "Storybook",
      "Collaboration"
    ]
  }
];


export const socialMedia = [
  {
    id: 1,
    img: "assets/git.svg",
    link: "https://github.com/govindrajgupta",
  },
  {
    id: 2,
    img: "assets/linkedin.svg",
    link: "https://www.linkedin.com/in/govind-raj-gupta/",
  },
  {
    id: 3,
    img: "assets/link.svg",
    link: "/",
  },
];

export const skills = [ "Next.js 15", "TypeScript", "LangChain", "Shadcn/ui", "Vercel", "Python"]
