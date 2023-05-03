import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  modern_webb,
  IMAGE_GENERATOR,
  youtube_clone,
  threejs,
  working,
  programming
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
    title: "Frontend Developer",
    icon: web,
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
    name: "React JS",
    icon: reactjs,
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
    title: "Web Development Education",
    company_name: "HelixLab Kft.",
    icon: programming,
    iconBg: "#383E56",
    date: "2020 - 2021",
    points: [
      "I learned basic proggraming and coding skills",
      "I recived my certificate",
    ],
  },
  {
    title: "Freelancer",
    company_name: "From home",
    icon: working,
    iconBg: "#E6DEDD",
    date: "2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Modern Webb App",
    description:
      "One of the most significant advancements in the modern web is the emergence of responsive web design, which allows websites to adapt to any screen size, whether it's a desktop computer, a tablet, or a mobile phone. This has become increasingly important as more and more people are accessing the web on their mobile devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: modern_webb,
    source_code_link: "https://frolicking-sawine-40a269.netlify.app/?fbclid=IwAR1CqQU3qqbhP1HAKs1UmctDZ5Ox_gsKqX9qQzhRRvML18qcR_Fpig_OrSU",
  },
  {
    name: "AI-Image-Generator",
    description:
      "AI image generators have been making waves in the art world in recent years, with many artists and designers using these powerful tools to create stunning works of art. These generators use advanced algorithms and machine learning techniques to generate images that are both beautiful and unique.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "open-ai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: IMAGE_GENERATOR,
    source_code_link: "https://ai-img-generator.com/",
  },
  {
    name: "Youtube Clone",
    description:
      "A YouTube clone project is a great way to learn web development and gain experience building a complex web application. YouTube is a popular video sharing platform that allows users to upload, view, and share videos. Building a YouTube clone requires a solid understanding of web development concepts such as HTML, CSS, JavaScript, and server-side programming.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youtube_clone,
    source_code_link: "https://thriving-pixie-b61296.netlify.app/?fbclid=IwAR2fRWNRl2yhV4mH8fXkHuisfiJVnd1MDXG9wfLjb9I2KffsdPU9cJ8Q3ag",
  },
];

export { services, technologies, experiences, projects };