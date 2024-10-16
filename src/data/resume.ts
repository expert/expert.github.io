export const DATA = {
  name: "Cernobai Alexei",
  initials: "CA",
  url: "https://expert.github.io",
  location: "Chisinau, Moldova",
  description:
    "I'm a Senior Front-End Developer specializing in building interactive and immersive web applications. My main focus is on Vue.js for front-end development, as well as Three.js and Babylon.js for creating 3D experiences and advanced visualizations on the web. I’m passionate about combining cutting-edge technologies to bring dynamic user interfaces and rich graphics to life.",
  summary:
    `I specialize in Vue.js, Three.js and Babylon.js to create dynamic user interfaces and immersive 3D web experiences. <br> My focus is on delivering high-performance, visually stunning applications that drive user engagement and bring real value to clients.`,
  
  avatarUrl: "/assets/images/photo.jpg",
  skills: [
    "Vue.js",
    "Nuxt.js",
    "Pinia",
    "Vuex",
    "WebGL",
    "Three.js",
    "Babylon.js",
    "Typescript",
    "SOLID",
    "OOP",
    "Css",
    "Html",
    "TailwindCSS",
    "Figma",
    "Node.js",
    "Postgres",
    "Docker",
    "Mysql",
    "WordPress",
    "UI/UX"
  ],
  contact: {
    email: "alexei.cernobai@gmail.com",
    tel: "+(373) 79226130",
    social: {
      email: {
        name: "Send Email",
        url: "mailto:alexei.cernobai@gmail.com",
        // icon: Icons.email,

        navbar: false,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://expert.github.io/",
        // icon: Icons.github,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/expert/",
        // icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexei-cernobai-2601a443/",
        // icon: Icons.linkedin,

        navbar: true,
      },
      upwork: {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~01e0744dacdd205429",
      }
    },
  },
  section: {
    about: {
      title: "About",
      headline: "Hi, I'm Cernobai Alexei",
      shortTitle: "About",
      content: [
        {
          title: "Programming",
          description: "Experience in programming languages JS, specifically Typescript, ECMA2017. Very good at frameworks Vue.js, Nuxt.js, Three.js, Babylon.js, Node.js. Also experienced Figma to html coder. Soft skills such as React.js, Koa.js, PHP, Mysql, MongoDB, CMS WordPress."
        },
        {
          title: "Self-development",
          description: "During a rapid development of technologies I’m staying tuned with the latest stack, and implementing them in my pet projects or production. This means if the tools are not required to my current dev stack, I\'m open to learn and use them nowadays. Like React.js or any other tools."
        },
        {
          title: "Communication",
          description: "Ability to work alongside other people, organize time and team. Planning current workflow with Agile software development. I\'m fluently spoke on Russian and Romanian My level writing and reading of English(Intermidiate), Ukranian"
        },
        {
          title: "Best practices",
          description: "Ability to do my job at a high level standard and company requirements. OOP aproach and stayed with SOLID principles, Use tools to check my code style."
        },
        {
          title: "Experience",
          description: "10+ years as Frontend and Fullstack developer. Built websites from simple to high level of complexity. The count of them is hundreds. Also I built Product software from scratch, which uses +5k users around the world."
        },
      ],
    },
    education: {
      title: "Education",
      headline: "I'm have math degree",
      shortTitle: "Education"
    },
    work: {
      title: "Work Experience",
      headline: "10+ years as Frontend and Fullstack developer",
      shortTitle: "Experience"
    },
    projects: {
      title: "My Projects",
      headline: "Check out my latest work",
      shortTitle: "Projects"
    },
    contact: {
      title: "Contact",
      headline: "Get in Touch",
      shortTitle: "Contact"
    }
  },

  work: [
    {
      company: "Creative Developer",
      badges: ["Three.js, Babylon.js, Blender"].flatMap(v => v.split(',')),
      href: "https://papaya-daffodil-3351d0.netlify.app/",
      location: "Remote",
      title: "Babylon.js | Three.js | WebGL Developer",
      logoUrl: "",
      start: "2023",
      end: "2024",
      description:
        "I\'m working on a game using Babylon.js and Three.js. I built a custom OOP framework to manage its structure and integrated the Havok physics engine for realistic simulations. I also implemented rigging for 3D models from Blender.",
    },
    {
      company: "TravelBusinessClass",
      href: "https://travelbusinessclass.com/",
      badges: ["Vue3, Nuxt3, Typescript, Tailwind CSS, Faker"].flatMap(v => v.split(',')),
      location: "Chisinau, MD",
      title: "Vue.js | Sr. Frontend Developer",
      logoUrl: "/assets/images/tbc.jpg",
      start: "2022",
      end: "2023",
      description:
        "Developed a CRM system specifically designed to streamline the management of leads and agents.",
    },
    {
      company: "Bullyentertainment",
      href: "https://bullyentertainment.com/",
      badges: ["WebXR, THREE.js, Aframe.io, WebXR , Blender"].flatMap(v => v.split(',')),
      location: "Chisinau, MD",
      title: "Three.js Creative Developer",
      logoUrl: "/assets/images/bully-logo.svg",
      start: "2020",
      end: "2022",
      description:
        "I specialize as a front-end developer, focusing on building applications with Three.js and WebXR technologies.",
    },
    {
      company: "Codefactory47",
      href: "https://themeforest.net/user/codefactory47",
      badges: ["Team Leadership", "Vue.js", "Agile Project Management", "Scrum"],
      location: "Chisinau, MD",
      title: "Co-Founder",
      logoUrl: "/assets/images/codefactory47-logo.jpg",
      start: "2016",
      end: "2020",
      description:
        "As a co-founder and author on the Themeforest Marketplace, I held the position of creating highly customizable, flexible, and contemporary templates and themes for a global user base. My primary focus encompassed the design, development, and meticulous testing of UX/UI components.",
    },
    {
      company: "Est Computers",
      href: "https://estcomputer.com/",
      badges: ["Ext.js, Java, Spring Framework"].flatMap(v => v.split(',')),
      location: "Chisinau, Md",
      title: "Ext.js Javascript Developer",
      logoUrl: "/assets/images/estcomputers.png",
      start: "2015",
      end: "2016",
      description:
        "Developed UI components for an extensive application using Ext.js, customized for a Medical Health service. Collaborated with global teams.",
    },
    {
      company: "Think Software (Hugsandi Menn)",
      href: "https://thinksoftware.co.uk/",
      badges: [],
      location: "Chisinau/Iceland",
      title: "Jr. Frontend Developer",
      logoUrl: "/assets/images/think-software-logo-black.svg",
      start: "2010",
      end: "2015",
      description:
        "As a CSS/HTML/JS developer, I specialize in creating dynamic websites tailored for Real Estate agencies. I proficiently translate PSD designs into HTML and seamlessly integrate them into backend CMS and frameworks. My expertise extends to working with CMS platforms like MODX and WordPress, as well as frameworks including Kohana, Zend, and Symfony. I am also well-versed in template languages like Twig and Smarty.",
    }
  ],
  education: [
    {
      school: "Academy of Economic Studies of Moldova",
      href: "https://ase.md/",
      degree: "IT Inginer and Specialist of Economic Cybernetics, Statistics and Informatics",
      logoUrl: "/assets/images/logo-asem.png",
      start: "2007",
      end: "2011",
    },
    {
      school: "School s.Maximovca, r. Anenii Noi (MD),",
      degree: "Grades 1 - 11",
      logoUrl: "",
      start: "1996",
      end: "2007",
      href: ""
    }
  ],
  projects: [
    {
      title: "Tank Firefight 3D",
      href: "https://papaya-daffodil-3351d0.netlify.app/",
      dates: "2023 - 2024",
      active: true,
      description:
        "I created a game using Babylon.js and built a custom OOP. I also integrated the Havok physics engine to handle realistic physics simulations. Implemented AI behavior for bots, and path finding algorithms",
      technologies: [
        "Babylon.js",
        "Havok",
        "AI",
        "Path finding",
        "OOP",
        "SOLID",
        "Functional Programming",
        "Design Paterns"
      ],
      links: [
        {
          type: "Play Game",
          href: "https://papaya-daffodil-3351d0.netlify.app/",
          // icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Video Demo",
          href: "https://www.youtube.com/watch?v=nplhJVc8nC4",
          // icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/assets/videos/Tank Firefight 3D Online Game.mp4",
    },
    {
      title: "Wealty.co",
      href: "https://wealty.co/",
      dates: "September 2022",
      active: true,
      description:
        "Wealty is a powerful Real Estate WordPress theme that adapts to your needs. With a stunning design and easy-to-use features, you can quickly take your business to the next level without any coding knowledge.",
      technologies: [
        "Vue.js",
        "WordPress",
        "Theme Developement",
        "Themeforest",
        "TailwindCSS",
        "UI/UX",
        "Responsinves"
      ],
      links: [
        {
          type: "Website",
          href: "https://wealty.co/",
          // icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/assets/videos/wealty.mp4",
    },
    {
      title: "Personal Portfolio",
      href: "https://expert.github.io/",
      dates: "September 2024",
      active: true,
      description:
        "Designed, developed personal portfolio.",
      technologies: [
        "Three.js",
        "WebGL",
        "Vue.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://expert.github.io/",
          // icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/expert/expert.github.io",
          // icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/assets/videos/portfolio.mp4",
    },
    {
      title: "Creative Factory",
      href: "https://bullyentertainment.8thwall.app/creativefactory/",
      dates: "2022",
      active: true,
      description:
        "Crafted a WebXR application featuring immersive 3D world experiences.",
      technologies: [
        "Three.js",
        "Aframe.io",
        "WebXR",
        "Blender"
      ],
      links: [
        {
          type: "Website",
          href: "https://bullyentertainment.8thwall.app/creativefactory/",
          // icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/assets/videos/creative.mp4",
    },
    {
      title: "Emerging Markets",
      href: "https://www.youtube.com/watch?v=cJoFPKdfNKQ",
      dates: "2020",
      active: true,
      description:
        "Developed an application that showcases interactive web content on iOS.",
      technologies: [
        "Three.js",
        "Vue.js",
        "Typescript",
        "WKWebView"
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=cJoFPKdfNKQ",
          // icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/assets/videos/EMarkets video.mp4",
    },
    {
      title: "Travellbusinessclass.com",
      href: "https://travelbusinessclass.com/",
      dates: "September 2023",
      active: true,
      description:
        "Engineered a BackOffice CRM system tailored to facilitate the management of leads and agents.",
      technologies: [
        "Vue3",
        "Nuxt3",
        "Websocket",
        "Typescript",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://travelbusinessclass.com/",
          // icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/assets/videos/Travelbusinessclass.mp4",
    },
    {
      title: "Ferienchecker.at - Events Portal",
      href: "https://ferienchecker.at/",
      dates: "2022",
      active: true,
      description:
        "Engaged in full stack development of an application utilizing NUXT.js and Node.js, with the Koa framework as the backbone. Encompassing a comprehensive suite of features, the application included membership user capabilities for listing publication, seamless integration of PayPal and SMS payments, email notifications, and the generation of PDF invoices.",
      technologies: [
        "TypeScript, ECMA2017, Nuxt.js, Vue.js, Vue Routers, Eslint, Prettier, Element.ui, SSR, Nodejs, Koa.js, TypeORM, Mysql, Paypal API, CRON, PDF builder, Emails, SMS payment, Facebook Auth, JSON Web Token, REST APIs, E2E testing, PM2, NGINX"
      ].flatMap(v => v.split(',')),
      links: [
        {
          type: "Website",
          href: "https://ferienchecker.at/",
          // icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/assets/videos/ferienchecker.mp4",
    },
    {
      title: "Realtyspace - Real estate WordPress Theme",
      href: "https://realtyspace.codefactory47.com/",
      dates: "2020",
      active: true,
      description:
        "I have contributed to creating a top-rated and best-selling Real Estate WordPress theme, earning accolades within its category. My role encompassed crafting all front-end interfaces, emphasizing extensive customization options and diverse variations. I undertook CSS/HTML/JS coding and seamless integration within the WordPress environment.",
      technologies: [
        "BEM, Sass, Gulp, Twitter Bootstrap, Responsive Web Design, PixelPerfect, Google API\'s, Smarty, Trellis, Ansible, VagrantUp, Theme Development, PSD to Wordpress"
      ].flatMap(v => v.split(',')),
      links: [
        {
          type: "Demo",
          href: "https://realtyspace.codefactory47.com/",
          // icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/assets/videos/realtyspace.mp4",
    },
  ]
} as const;
