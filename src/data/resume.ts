export const DATA = {
  name: "Cernobai Alexei",
  initials: "CA",
  url: "https://expert.github.io",
  location: "Chisinau, Moldova",
  description:
    "I'm a Senior Front-End Developer with a focus on creating immersive and interactive web applications. My core expertise lies in Vue.js for modern front-end development and Three.js/Babylon.js for crafting rich 3D experiences and advanced visualizations. I'm driven by a passion for blending cutting-edge technology to create visually engaging and high-performance user interfaces.",
  summary:
    `I specialize in Vue.js, Three.js, and Babylon.js to develop dynamic user interfaces and immersive 3D web applications. My goal is to deliver high-performance, visually stunning projects that drive engagement and create tangible value for clients.`,
  avatarUrl: "/assets/images/photo.jpg",
  skills: [
    "Vue.js", "Nuxt.js", "Pinia", "Vuex", "WebGL", "Three.js", "Babylon.js", "Typescript", "SOLID", "OOP", 
    "CSS", "HTML", "TailwindCSS", "Twitter Bootstrap", "UI/UX", "BEM", "Figma", "Vite", "Webpack", "Node.js", 
    "Postgres", "Docker", "MySQL", "Git", "Linux", "Nginx", "WordPress", "Agile"
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
          description:  "Experienced in JavaScript, particularly TypeScript and ECMAScript 2017. Highly proficient with Vue.js, Nuxt.js, Three.js, Babylon.js, and Node.js. Additionally, skilled in converting Figma designs into responsive web pages. I have hands-on experience with React.js, Koa.js, PHP, and databases like MySQL and MongoDB."
        },             
        {
          title: "Self-development",
          description: "I stay up-to-date with the rapid development of technology and incorporate new tools into my projects. Even if certain technologies aren't part of my current stack, I am always open to learning and applying them, such as React.js or other modern tools."
      
        },
        {
          title: "Communication",
          description: "I thrive in team settings, organizing workflow with Agile methodologies. Fluent in Russian and Romanian, with intermediate proficiency in English (writing and reading) and Ukrainian."
        
        },
        {
          title: "Best practices",
          description: "I adhere to high standards in my work, ensuring it aligns with company requirements. I apply OOP principles and follow SOLID guidelines. I also use code style checkers to maintain high-quality code."
        },
        {
          title: "Experience",
          description:  "With over 10 years of experience as a Frontend and Fullstack developer, I've built hundreds of websites and projects ranging from simple to highly complex. Additionally, I've developed software products used by over 5,000 users worldwide."
        },
      ],
    },
    education: {
      title: "Education",
      headline: "Math and Programming Degree",
      shortTitle: "Education"
    },
    work: {
      title: "Work Experience",
      headline: "10+ Years of Frontend and Fullstack Development",
      shortTitle: "Experience"
    },
    projects: {
      title: "My Projects",
      headline: "Check out My Latest Work",
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
        "Working on a game project using Babylon.js and Three.js. Built a custom OOP framework and integrated the Havok physics engine for realistic physics simulations. Also implemented rigging for 3D models exported from Blender."
      },
    {
      company: "TravelBusinessClass",
      href: "https://travelbusinessclass.com/",
      badges: ["Vue3, Nuxt3, Typescript, Tailwind CSS"].flatMap(v => v.split(',')),
      location: "Chisinau, MD",
      title: "Vue.js | Senior Frontend Developer",
      logoUrl: "/assets/images/tbc.jpg",
      start: "2022",
      end: "2023",
      description:
        "Developed a CRM system designed to streamline the management of leads and agents, providing efficient and scalable solutions."
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
        "Focused on front-end development, creating applications with Three.js and WebXR technologies for immersive experiences."
      },
    {
      company: "Codefactory47",
      href: "https://themeforest.net/user/codefactory47",
      badges: ["Team Leadership", "Agile Project Management"],
      location: "Chisinau, MD",
      title: "Co-Founder",
      logoUrl: "/assets/images/codefactory47-logo.jpg",
      start: "2016",
      end: "2020",
      description:
        "As a co-founder and author on the Themeforest Marketplace, I created highly customizable and contemporary themes. My role focused on design, development, and thorough testing of UX/UI components."
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
        "Developed UI components for a medical service application using Ext.js, working closely with international teams to ensure seamless integration."
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
        "Specialized in CSS/HTML/JS development for Real Estate websites. Converted PSD designs into HTML, integrated them with backend CMS like MODX and WordPress, and worked with frameworks like Kohana and Symfony."
      }
  ],
  education: [
    {
      school: "Academy of Economic Studies of Moldova",
      href: "https://ase.md/",
      degree: "IT Engineer and Specialist in Economic Cybernetics, Statistics, and Informatics",
      logoUrl: "/assets/images/logo-asem.png",
      start: "2007",
      end: "2011",
    },
    {
      school: "School S. Maximovca, Anenii Noi (MD)",
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
        "Developed an immersive 3D game using Babylon.js, incorporating a custom OOP framework and the Havok physics engine for realistic simulations. Implemented advanced AI behavior for bots and pathfinding algorithms to enhance gameplay dynamics.",
      technologies: [
        "Babylon.js",
        "Havok",
        "AI",
        "Pathfinding",
        "OOP",
        "SOLID",
        "Functional Programming",
        "Design Patterns"
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
      dates: "September 2019",
      active: true,
      description:
        "Designed and implemented a visually stunning theme with various component variations. Integrated multiple APIs and developed a custom user dashboard, ensuring a seamless user experience.",
      technologies: [
        "Vue.js",
        "WordPress",
        "Theme Development",
        "Themeforest",
        "TailwindCSS",
        "UI/UX",
        "Responsive Design"
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
        "Created a personal portfolio featuring cutting-edge design and 3D visualizations, showcasing skills in Three.js, WebGL, and advanced front-end technologies.",
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
        "Developed a WebXR application providing immersive 3D world experiences. The app was also shipped as an Web app, offering a stunning user experience.",
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
        "Developed an iOS app showcasing interactive web content with real-time dynamic visualizations using Three.js and Vue.js.",
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
        "Engineered a BackOffice CRM system for managing leads and agents, integrating real-time communication features using WebSocket and providing a seamless user experience.",
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
        "Led the full-stack development of a feature-rich membership site using Nuxt.js and Koa.js. Integrated PayPal and SMS payments, email notifications, and dynamic PDF invoice generation for users.",
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
        "Contributed to the development of a top-rated real estate WordPress theme, focusing on creating customizable front-end interfaces and seamless WordPress integration.",
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
