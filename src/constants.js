import designShowroom from "../src/assets/design_shoroom01.png";
import pinkDiamond from "../src/assets/pink_diamond01.png";
import moveFlex from "../src/assets/movie_flex01.png";
import ytClone from "../src/assets/yt-clone01.png";
import solidSync from "../src/assets/solid-sinc01.png";
import simpleTest from "../src/assets/simple-test01.png";
import Estate from "../src/assets/E-state-dotserviz.png";
import Estate_crm from "../src/assets/estate-crm.png";

export const personalInfo = {
  name: "Shah Bux",
  title: "Full Stack Developer",
  description: "Crafting beautiful, scalable web applications with modern technologies. Passionate about clean code and exceptional user experiences.",
  email: "pitafishahbux@gmail.com",
  phone: "+923323654756",
  location: "Block 13 D Gulshan e Iqbal Karachi pakistan",
  cvUrl: "https://drive.google.com/uc?export=download&id=1Be21-6WOTYDHc9JnXDg12jQc1tpvFiq3",
};

export const socialLinks = {
  github: "https://github.com/ShahBux",
  linkedin: "https://www.linkedin.com/in/shah-bux/",
  teams: "https://teams.live.com/l/invite/FEAonb4JG_EZ1-DvgE?v=g1",
  instagram: "https://www.instagram.com/shah_bux_pitafi?igsh=YWYydm5obDJsZWJr",
  faceboook: "https://www.facebook.com/shahbux.pitafi.1",
  phone: "+923323654756",
  twitter: "https://x.com/Engr_ShahBux",



};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const aboutFeatures = [
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and design patterns.",
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    title: "Performance",
    description: "Building fast, optimized applications that deliver exceptional user experiences.",
  },
];

export const aboutDescription = `I'm a Full Stack Developer from Karachi with hands-on experience building real-world web apps. 
I've worked across the stack — from crafting pixel-perfect React UIs to building backend APIs with Node.js and Express. 
Over the past couple of years, I've shipped 80+ client websites, contributed to full-stack projects, and even taught 
web development at Aptech. I enjoy turning complex problems into clean, working solutions — and I'm always picking up 
something new along the way.`;

export const skills = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "Material UI", "Framer Motion","HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express",  "MongoDB",  "REST APIs", "Microservices",],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "PhotoShop", "Figma", "CI/CD", "Testing"],
  },
];

export const projects = [
    {
    title: "E-state",
  description: "A modern real estate platform developed at DotServiz using Next.js and JavaScript. Built with a scalable architecture, optimized performance, and fully responsive UI. Integrated dynamic components, reusable design system using Core Css for a seamless user experience across devices.",

    tech: ["Next Js ", "JavaScript", "Css ", "Redux"],
    image: Estate,
    github: "#",
    live: "https://ben-estate.netlify.app/",
  },
      {
    title: "E-state Crm",
  description: "A feature-rich real estate CRM application built using React.js and Material UI. Designed to manage property listings, client data, and sales workflows efficiently. Implemented global state management with Context API to ensure scalable and maintainable architecture, along with a responsive and user-friendly dashboard interface.",
    tech: [" React Js ", "JavaScript", "Material UI", "Context API", "Axios"],
    image: Estate_crm,
    github: "#",
    live: "https://estate-crm.dotserviz.co/",
  },
  {
    title: "Design Showroom",
    description: "Modern design showroom built for practice using React, TypeScript, and responsive layout.",
    tech: ["React Js ", "TypeScript", "shadcn ", "gsap"],
    image: designShowroom,
    github: "https://github.com/ShahBux/design-showroom",
    live: "https://design-showroom.vercel.app/",
  },
  {
    title: "Pink Diamond",
    description: "Responsive e-commerce platform built for practice using React, TypeScript, and clean UI.",
    tech: ["React Js ", "TypeScript", "shadcn "],
    image: pinkDiamond,
    github: "https://github.com/ShahBux/pink-diamond",
    live: "https://pink-diamond.vercel.app/",
  },
  {
    title: "Movie Flex",
    description: "Practice project with Netflix clone interface using React, TypeScript, and responsive components.",
    tech: ["React Js ", "TypeScript", "shadcn "],
    image: moveFlex,
    github: "https://github.com/ShahBux/Movieflex",
    live: "https://movieflex-six.vercel.app/",
  },
    {
    title: "Prime tub",
    description: "Responsive React and TypeScript YouTube clone with searchable video listings, clean UI, and practical component architecture.",
   tech: ["React Js ", "TypeScript", "shadcn "],
    image: ytClone,
    github: "https://github.com/ShahBux/youtube-clonev2",
    live: "https://youtube-clonev2-ten.vercel.app/",
  },
  {
    title: "Solid Sync",
    description: "Real estate platform developed for practice using React, TypeScript, and responsive components with property browsing and clear interface.",
   tech: ["React Js ", "TypeScript", "shadcn "],
    image: solidSync,
    github: "https://github.com/ShahBux/Solid-Sync",
    live: "https://solid-sync.vercel.app/",
  },
];

export const experiences = [
  {
    title: "React Developer",
    company: "DotServiz LLC",
    period: "Sep 2025 - Present",
    description: "Building fast, responsive, and scalable web applications using React.js and Next.js with smooth frontend and backend integration. Responsibilities include API integration, performance optimization, server-side rendering with Next.js, and collaboration with cross-functional teams to deliver modern, user-friendly solutions.",
  },
  {
    title: "Frontend Developer",
    company: "Probyte Pvt Ltd",
    period: "June 2024 - Sep 2025",
    description: "Converted Figma and PSD designs into pixel-perfect, functional React.js, HTML, and CSS code. Created adaptive and fully responsive layouts for optimal viewing across all devices and screen sizes. Integrated UI with back-end APIs using Axios, Fetch, and RTK Query for dynamic data handling.",
  },
  {
    title: "Full Stack Developer",
    company: "ByteBlaze Innovation",
    period: "July 2024 - June 2025",
    description: "Developed and delivered 30+ complete full stack web applications, handling everything from database design and REST API development with Node.js and Express.js to building responsive React.js front-ends. Contributed backend functionalities for 10+ websites while also delivering front-end development for 80+ live client projects.",
  },
  {
    title: "Backend Developer",
    company: "Skysoft tech",
    period: "April 2024 - June 2024",
    description: "Developed and maintained core backend services and APIs to support front-end functionality and data management. Gained hands-on experience in server-side logic, database interactions, and ensuring smooth data flow for web applications.",
  },
  {
    title: "Software Engineer Trainer",
    company: "Aptech Garden Karachi",
    period: "Feb 2024 - May 2024",
    description: "Taught Node.js, Express.js, and other frontend technologies to students, providing hands-on expertise in full stack development concepts and real-world application building.",
  },
];

export const contactInfo = [
  { label: "Email", value: "pitafishahbux@gmail.com" },
  { label: "Phone", value: "+923323654756" },
  { label: "Location", value: "Block 13 D Gulshan e Iqbal Karachi pakistan" },
];

