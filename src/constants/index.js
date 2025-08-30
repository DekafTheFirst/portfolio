import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  oasis,
  developer,
  ttec,
  angular,
} from "../assets";

import deedis from '../assets/portfolio/deedi-tiles.jpg';
import soteriaApp from '../assets/portfolio/soteria-connect.jpg';
import lgaDateRange from '../assets/portfolio/lga-date-range.jpg';
import airs from '../assets/portfolio/airs.jpg';
import ivas from '../assets/portfolio/ivas.jpg';




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "User Experience Specialist",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "angular",
    icon: angular,
  },
  
  
 
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Oasis Management Company",
    icon: oasis,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Built and optimized frontend systems for high-impact public sector apps serving 300K+ users yearly.",
      "Improved onboarding flow for tax platforms, reducing abandonment and increasing activation — contributing to 500M+ NGN in processed taxes.",
      "Key Projects:",
      "Anambra State Internal Revenue Central System (link)",
      "Corporate Affairs Commission VAS API Integrated Service (link)",
      "Kogi State Hotel & Tourism Board",
      "Increased mobile responsiveness using CSS Grid and Flexbox.",
      "Reduced API request failures by 35% through Spring Boot and Strapi integration improvements."
    ]
  },
  {
    title: "Freelance Software Developer",
    company_name: "Dekaf Solutions",
    icon: developer,
    iconBg: "#383E56",
    date: "May 2023 - Oct 2024",
    points: [
      "Built comprehensive portals for organizations, including a full-stack, multi-client community app for a church in Maryland, USA, to manage members, events, and internal communications.",
      "Built and deployed an e-commerce platform using React and Strapi, supporting 5K+ monthly visitors.",
      "Created internal dashboards for clients, reducing manual reporting time by 40%.",
      "Improved performance of a legacy React app, cutting page load speed by 60%.",
      "Collaborated with designers and backend teams to deliver responsive, production-ready UIs."
    ]
  },
  {
    title: "IT Support, Intern",
    company_name: "TTEC, Cebu City, Philippines",
    icon: ttec,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "Provided technical support for hardware, software, and network issues across multiple end-users, ensuring minimal downtime.",
      "Diagnosed and resolved incidents via in-person, phone, and remote assistance tools.",
      "Installed, configured, and maintained operating systems, applications, and peripherals.",
      "Managed user accounts, permissions, and security settings in Active Directory and related systems.",
      "Performed system updates, backups, and preventive maintenance to improve reliability and performance.",
      "Escalated complex issues to higher-level support or vendors and followed through to resolution.",
      "Documented troubleshooting steps, solutions, and technical procedures for internal knowledge base.",
      "Assisted with onboarding and training of new staff on IT systems and best practices."
    ]
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IVAS - Integrated Vehicle Administration System",
    description:
      "Full-stack platform built with Angular and Spring Boot to streamline vehicle administration for both individual and corporate users. Features include vehicle registration and renewal, roadworthiness certification with instant e-certificates, automated licensing with digital copies, real-time law enforcement verification via QR codes, fleet management dashboards, and advanced analytics for performance monitoring and compliance tracking.",
    tags: [
      {
        name: "angular",
        color: "red-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: ivas, // replace with actual
    // source_code_link: "https://github.com/", // replace if applicable
    preview_link: "https://ivas.services.an.gov.ng/home?component="
  },
  {
    name: "Soteria Church Community App",
    description:
      "Developed a full-featured community platform with web and mobile clients for a Maryland-based church, powered by a Node.js (Strapi) backend, enabling seamless member management, event coordination, and real-time communications — with self-service content updates for church administrators and management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "strapi",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: soteriaApp,
    preview_link: 'https://soteriachurch.org/',
    source_code_link: "https://github.com/DekafTheFirst/soteria-web-client",
  },
  {
    name: "Deedis",
    description:
      "Full-stack e-commerce platform for a fashion brand featuring a React frontend, Node.js backend, and Strapi CMS. Implemented secure authentication, user management, stock validation, and inventory control, with Stripe payment integration to enable seamless online transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      
    ],
    image: deedis,
    source_code_link: "https://github.com/DekafTheFirst/deedi-clothings-main",
    preview_link: "https://deedis.com/",
  },
  
  {
    name: "Smart LGA",
    description:
      "Comprehensive government administration and revenue management platform for Anambra State LGAs, supporting tax IGR assessments, LGA identification, and issuance of birth and death certificates, featuring a flagship ticket generation system for markets and parking lots, plus dashboards to visualize performance metrics and revenue contributions from each LGA.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "dashboard",
        color: "green-text-gradient",
      },
    ],
    image: lgaDateRange,
    preview_link: 'https://smartlga.ng'
  },
  {
    name: "Anambra State Internal Revenue Central System",
    description:
      "Collaborated on the Anambra State Internal Revenue Central System — an enterprise-scale tax administration platform built with Angular and Spring Boot. The system enables ASIN (Anambra State Identity Number) registration, taxpayer profiling, automated assessments, and seamless payment processing, driving hundreds of millions of naira in annual revenue collection for the state.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "dashboard",
        color: "green-text-gradient",
      },
    ],
    image: airs,
    preview_link: 'https://tax.services.an.gov.ng/'
  },
  
  
  
];

export { services, technologies, experiences, testimonials, projects };
