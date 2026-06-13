import designShowroom from "../src/assets/design_shoroom01.png";
import pinkDiamond from "../src/assets/pink_diamond01.png";
import moveFlex from "../src/assets/movie_flex01.png";
import ytClone from "../src/assets/yt-clone01.png";
import solidSync from "../src/assets/solid-sinc01.png";
import simpleTest from "../src/assets/simple-test01.png";
import Estate from "../src/assets/E-state-dotserviz.png";
import Estate_crm from "../src/assets/estate-crm.png";
import Workparrots from "../src/assets/Workparrots.png";
import Quantix from "../src/assets/Quantix.png";
import Wellness from "../src/assets/Wellness.png";

export const personalInfo = {
  name: "Shah Bux",
  title: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React & Next.js — turning complex problems into clean, scalable web experiences. From pixel-perfect UIs to robust API integrations, I build products that perform.",
  email: "pitafishahbux@gmail.com",
  phone: "+923323654756",
  location: "Block 13 D Gulshan e Iqbal Karachi pakistan",
  cvUrl:
    "https://drive.google.com/file/d/1XBfl_3KhQJUAloFQh8GiLBqm_MAiOhwn/view?usp=sharing",
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
    description:
      "Writing maintainable, scalable code following best practices and proven design patterns.",
  },
  {
    title: "UI/UX Design",
    description:
      "Converting Figma & PSD designs into pixel-perfect, intuitive interfaces users love.",
  },
  {
    title: "Performance",
    description:
      "Optimizing apps with code splitting, lazy loading & caching for lightning-fast experiences.",
  },
  {
    title: "API Integration",
    description:
      "Seamlessly connecting frontends to backends via REST APIs using Axios, Fetch & RTK Query.",
  },
  {
    title: "Responsive Design",
    description:
      "Building adaptive layouts that look and feel perfect on every device and screen size.",
  },
  {
    title: "Full Stack",
    description:
      "Delivering end-to-end solutions with React, Next.js, Node.js, Express & MongoDB.",
  },
];

export const aboutDescription = `I'm a Full Stack Developer from Karachi with 2.5+ years of hands-on experience building production-grade web applications for real clients. I specialize in React.js and Next.js on the frontend, with solid backend experience in Node.js, Express, and MongoDB. I've delivered 80+ live client websites, built complete full-stack solutions end-to-end, and trained the next generation of developers at Aptech. Whether it's converting a Figma design into a pixel-perfect UI or integrating complex APIs, I bring clean code and a problem-solving mindset to every project.`;

export const skills = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux / RTK Query",
      "Material UI",
      "Bootstrap 5",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase"],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git & GitHub",
      "Figma",
      "Photoshop",
      "Shopify",
      "WordPress",
      "Axios / Fetch",
      "Vercel / Netlify",
    ],
  },
];

export const projects = [
  {
    title: "E-state",
    description:
      "Production-grade real estate platform built at Dot Serviz LLC using Next.js and JavaScript. Features SSR-optimized performance, dynamic property listings, and a scalable component architecture with a reusable CSS design system for seamless cross-device experience.",
    tech: ["Next.js", "JavaScript", "CSS3", "Redux"],
    image: Estate,
    github: "#",
    live: "https://ben-estate.netlify.app/",
  },
  {
    title: "E-state CRM",
    description:
      "Real estate CRM dashboard built with React.js and Material UI for managing property listings, client data, and sales workflows. Integrated REST APIs via Axios for live data rendering and used Context API for scalable global state management across all dashboard modules.",
    tech: ["React.js", "JavaScript", "Material UI", "Context API", "Axios"],
    image: Estate_crm,
    github: "#",
    live: "https://estate-crm.dotserviz.co/",
  },
  {
    title: "Quantix Compliance",
    description:
      "Business compliance management platform built with React.js, featuring secure account management, dynamic routing, and API-driven data handling for regulatory workflow automation. Delivered pixel-perfect responsive UI from Figma designs with clean component architecture.",
    tech: ["React.js", "JavaScript", "Material UI", "Context API", "Axios"],
    image: Quantix,
    github: "#",
    live: "https://web.quantixcompliance.com/",
  },
  {
    title: "Wellness CRM",
    description:
      "CRM dashboard built for wellness and health business management using React.js and Material UI. Features client management, appointment tracking, and data-driven dashboards with REST API integration and a clean, responsive interface optimized for daily operational workflows.",
    tech: ["React.js", "JavaScript", "Material UI", "Context API", "Axios"],
    image: Wellness,
    github: "#",
    live: "https://wellnesscrm.dotserviz.co/",
  },
  {
    title: "Workparrots",
    description:
      "Modern business productivity platform built with React.js, featuring a responsive UI, dynamic data management, and seamless API integration. Developed at Dot Serviz LLC with focus on performance, clean architecture, and intuitive user experience across all screen sizes.",
    tech: ["React.js", "JavaScript", "CSS3", "Axios"],
    image: Wellness,
    github: "#",
    live: "https://workparrots.com/",
  },
  {
    title: "Design Showroom",
    description:
      "Interactive design showcase built with React.js, TypeScript, and GSAP scroll animations. Demonstrates advanced UI composition, smooth motion design, and component-driven architecture using shadcn/ui.",
    tech: ["React.js", "TypeScript", "shadcn/ui", "GSAP"],
    image: designShowroom,
    github: "https://github.com/ShahBux/design-showroom",
    live: "https://design-showroom.vercel.app/",
  },
  {
    title: "Pink Diamond",
    description:
      "Fully responsive e-commerce platform with clean product browsing UI, built using React.js and TypeScript. Focuses on intuitive UX, modular component structure, and mobile-first design principles.",
    tech: ["React.js", "TypeScript", "shadcn/ui"],
    image: pinkDiamond,
    github: "https://github.com/ShahBux/pink-diamond",
    live: "https://pink-diamond.vercel.app/",
  },
  {
    title: "Movie Flex",
    description:
      "Netflix-inspired streaming UI clone built with React.js and TypeScript. Features responsive movie listings, clean card-based layout, and reusable component architecture mimicking real OTT platform design.",
    tech: ["React.js", "TypeScript", "shadcn/ui"],
    image: moveFlex,
    github: "https://github.com/ShahBux/Movieflex",
    live: "https://movieflex-six.vercel.app/",
  },
  {
    title: "Prime Tub",
    description:
      "YouTube clone built with React.js and TypeScript featuring searchable video listings, channel browsing, and a clean responsive UI. Demonstrates API integration patterns and scalable frontend architecture.",
    tech: ["React.js", "TypeScript", "shadcn/ui"],
    image: ytClone,
    github: "https://github.com/ShahBux/youtube-clonev2",
    live: "https://youtube-clonev2-ten.vercel.app/",
  },
  {
    title: "Solid Sync",
    description:
      "Real estate property browsing platform built with React.js and TypeScript. Features filterable property listings, a clean responsive interface, and modular component design for scalable UI development.",
    tech: ["React.js", "TypeScript", "shadcn/ui"],
    image: solidSync,
    github: "https://github.com/ShahBux/Solid-Sync",
    live: "https://solid-sync.vercel.app/",
  },
];

export const experiences = [
  {
    title: "Senior React JS Developer",
    company: "Dot Serviz LLC",
    period: "Sep 2025 - Present",
    description:
      "Building fast, scalable web applications using React.js and Next.js with server-side rendering and seamless frontend-backend integration. Responsibilities include REST API integration, performance optimization, and cross-functional team collaboration to deliver modern, production-ready solutions.",
  },
  {
    title: "React JS Developer",
    company: "Probyte Pvt Ltd",
    period: "Jun 2024 - Sep 2025",
    description:
      "Converted 80+ Figma and PSD designs into pixel-perfect, fully responsive React.js, HTML, and CSS implementations. Built adaptive layouts for all screen sizes and integrated dynamic data handling via Axios, Fetch, and RTK Query for seamless frontend-backend communication.",
  },
  {
    title: "Junior Backend Developer",
    company: "Sky Soft Tech",
    period: "Jan 2024 - Jun 2024",
    description:
      "Developed and maintained core backend services and REST APIs using Node.js and Express.js to support frontend functionality and data management. Gained hands-on experience in server-side logic, MongoDB database interactions, and ensuring smooth data flow across web applications.",
  },
  {
    title: "Web Developer Trainer",
    company: "Aptech Garden Karachi",
    period: "Feb 2024 - May 2024",
    description:
      "Trained students in Node.js, Express.js, and frontend web technologies, delivering hands-on full stack development curriculum with real-world project focus. Strengthened own expertise in both frontend and backend development through structured, practical teaching.",
  },
  {
    title: "Cloud Architecture Intern",
    company: "Hazza Institute Tech",
    period: "Jun 2023 - Sep 2023",
    description:
      "Completed cloud architecture internship in collaboration between Quest University Nawabshah and Hazza Institute Technology Islamabad. Gained hands-on exposure to cloud infrastructure, deployment concepts, and system architecture fundamentals.",
  },
];

export const contactInfo = [
  { label: "Email", value: "pitafishahbux@gmail.com" },
  { label: "Phone", value: "+923323654756" },
  { label: "Location", value: "Block 13 D Gulshan e Iqbal Karachi pakistan" },
];
