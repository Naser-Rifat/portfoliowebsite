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
  tecnobz,
  nexis,
  shopify,
  carrent,
  jobit,
  tripguide,
  bookingDashboard,
  tencobzWebsite,
  shobcombd,
  trackBooking,
  hmsDashboard
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tecno BZ",
    icon: tecnobz,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Led a frontend team at the ecommerce platform Shob.com.bd, with a focus on enhancing both user experience and product quality.",
      "Integrated a Duplicate feature that reduces time, enhancing Challan and Order Tracking functionality of BookingMS.",
      "Optimized State Management to streamline Booking processes, resulting in an increase in booking efficiency.",
      "Developed KM Inventory System, reducing errors and boosting inventory turnover.",
      "Technologies used: React, Next.js, TypeScript, Redux, React Query, Material UI, Ant Design, Tailwind, Qz Tray, Firebase."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nexis Ltd",
    icon: nexis,
    iconBg: "#E6DEDD",
    date: "May 2022 - May 2023",
    points: [
      "Leveraged GraphQL for HRManagement System, reducing data query time and increasing flexibility.",
      "Developed a School Management System, resulting in a reduction in administrative tasks and an increase in data accuracy.",
      "Created a digital menu system as a SaaS product, improving order processing efficiency and customer satisfaction.",
      "Collaborated with the UI/UX team to develop HRManagement and Digital Menu systems, leading to faster development time and increase in user engagement.",
      "Technologies used: React, Next.js, TypeScript, React Query, GraphQL, Material UI, Tailwind."
    ],
  },
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
    name: "Shob.com.bd",
    description:
      "B2B & B2C ecommerce platform that offers customers the ability to purchase products from Dubai, China, Malaysia, and Bangladesh in a single order.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
    ],
    image: shobcombd,
    source_code_link: "https://github.com/",
  },

  
  ,
  {
    name: "KM Booking",
    description:
      "A multinational booking service managing bookings from Malaysia, Bangladesh, Dubai, and China, allowing customers to send products from one country to another.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "qztray",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: bookingDashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ultimate HRMS",
    description:
      "HR management system offering employee information, attendance tracking, request handling, reporting, real-time location, profiles, payroll generation, roster management, user permissions, and policy notices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
      {
        name: "graphql",
        color: "yellow-text-gradient",
      },
    ],
    image: hmsDashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Track Booking",
    description:
      "A real-time tracking system allowing customers to stay informed about their parcel delivery status every step of the way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: trackBooking,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tecno BZ ",
    description:
      "Official website for Tecno BZ, showcasing the company's products and services.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tencobzWebsite,
    source_code_link: "https://github.com/",
  },

 
];

export { services, technologies, experiences, testimonials, projects };
