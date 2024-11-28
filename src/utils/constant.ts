import { images } from "assets/img";

export const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#PortFolio", label: "Portfolio" },
  { href: "#resume", label: "Resume" },
  { href: "#client", label: "Client" },
  { href: "#price", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export const NAME = "Gopal Vasani";
export const DESCRIPTION = `I am a skilled full-stack developer with expertise in front-end and back-end technologies, passionate about innovation and problem-solving. I thrive in collaborative environments, valuing teamwork and effective communication to deliver successful projects.`;
export const SOCIAL_MEDIA_LINK = {
  LINKEDIN: "https://www.linkedin.com/in/kishan-vasani-3083961a5/",
  TWITTER: "https://twitter.com/mrvasani48",
  INSTAGRAM: "https://www.instagram.com/er.entwickler_48/",
};

export const WHAT_I_DO = {
  title: "FEATURES",
  description: "WHAT I DO",
  CONTENT: [
    {
      TITLE: "Full-Stack Development",
      DESCRIPTION:
        "Building seamless and scalable web applications with expertise in both frontend and backend technologies.",
      ICON: "mdi:application-outline",
      LINK: "material-symbols:arrow-right-alt",
    },
    {
      TITLE: "Frontend Development",
      DESCRIPTION:
        "Creating engaging, responsive, and user-friendly interfaces using modern JavaScript frameworks.",
      ICON: "carbon:application-web",
      LINK: "material-symbols:arrow-right-alt",
    },
    {
      TITLE: "Backend Development",
      DESCRIPTION:
        "Designing and implementing robust server-side logic to support dynamic applications.",
      ICON: "mdi:server-outline",
      LINK: "material-symbols:arrow-right-alt",
    },
    {
      TITLE: "API Development & Integration",
      DESCRIPTION:
        "Developing RESTful APIs and integrating third-party services to enhance application capabilities.",
      ICON: "tabler:api",
      LINK: "material-symbols:arrow-right-alt",
    },
    {
      TITLE: "Database Management",
      DESCRIPTION:
        "Ensuring data integrity and performance through effective database design and maintenance.",
      ICON: "mdi:database-outline",
      LINK: "material-symbols:arrow-right-alt",
    },
    {
      TITLE: "DevOps & Deployment",
      DESCRIPTION:
        "Setting up CI/CD pipelines and deploying applications to cloud platforms for high availability.",
      ICON: "mdi:cloud-outline",
      LINK: "material-symbols:arrow-right-alt",
    },
  ],
};

// export const PORTFOLIO_DATA = {
//   title: "My Portfolio",
//   description:
//     "Explore my extensive work across various projects and feel free to provide feedback.",
//   portfolio_content: [
//     {
//       IMAGE: "portfolio1",
//       CATEGORY: "Full Stack Development",
//       LIKES: 1020,
//       DESCRIPTION:
//         "Employee Management System: A centralized portal for accessing key resources, boosting productivity, and streamlining internal processes.",
//     },
//     {
//       IMAGE: "portfolio2",
//       CATEGORY: "Web Application",
//       LIKES: 850,
//       DESCRIPTION:
//         "Campaign Management System: Multifaceted platform for admins, campaign owners, and users to create, manage, and engage in campaigns.",
//     },
//     {
//       IMAGE: "portfolio3",
//       CATEGORY: "Job Portal",
//       LIKES: 920,
//       DESCRIPTION:
//         "Adifect: Online platform for businesses to post job openings, share on social media, and attract a wider audience.",
//     },
//     {
//       IMAGE: "portfolio4",
//       CATEGORY: "Childcare Platform",
//       LIKES: 1180,
//       DESCRIPTION:
//         "Babysitter Booking System: Advanced platform for hiring sitters with tailored functionalities for admins, employees, and sitters.",
//     },
//     {
//       IMAGE: "portfolio5",
//       CATEGORY: "Web3 NFT",
//       LIKES: 1450,
//       DESCRIPTION:
//         "Web3 NFT Project: NFT platform on Solana Blockchain focusing on quality, unique design, and steady returns for holders...",
//     },
//   ],
// };

export const PROFESSIONAL_SKILLS = {
  leftColumn: [
    { name: "HTML/HTML5", percentage: 90 },
    { name: "CSS3", percentage: 85 },
    { name: "JavaScript (ES5/ES6)", percentage: 87 },
    { name: "TypeScript", percentage: 80 },
    { name: "ReactJS", percentage: 88 },
  ],
  rightColumn: [
    { name: "NodeJS", percentage: 85 },
    { name: "MongoDB", percentage: 82 },
    { name: "ExpressJS", percentage: 80 },
    { name: "Mongoose", percentage: 75 },
    { name: "CI/CD", percentage: 70 },
  ],
  toolsAndLibraries: [
    {
      category: "Development Tools",
      items: [
        "Visual Studio",
        "Figma",
        "Postman",
        "Bitbucket",
        "Zira",
        "Git",
        "GitHub",
        "GitLab",
        "MongoDB Compass",
      ],
    },
    {
      category: "Libraries/API",
      items: [
        "Redux",
        "React Router",
        "RTK Query",
        "Mantine UI",
        "Axios",
        "RTK Query",
        "React Icons",
      ],
    },
  ],
};

export const educationData = [
  {
    category: "Bachelor's Education",
    items: [
      {
        year: "2018 - 2022",
        title: "Bachelor of Technology (Computer Engineering)",
        institution: "Gujarat Technological University",
        details: "Completed with a CGPA of 8.59.",
      },
    ],
  },
  {
    category: "Secondary Education",
    items: [
      {
        year: "2016 - 2018",
        title: "HSC",
        institution: "Gujarat Higher Secondary Education Board",
        details: "Achieved 80% in the final examination.",
      },
      {
        year: "2014 - 2016",
        title: "SSC",
        institution: "Gujarat Secondary Education Board",
        details: "Secured 68% in the final examination.",
      },
    ],
  },
];
export const experienceData = [
  {
    category: "Work Experience",
    items: [
      {
        year: "july 2022 - Present",
        title: "Full Stack Developer",
        company: "Inexture Solutions LLP",
        location: "Ahmedabad, Gujarat (IN)",
        role: "Associate Consultant",
        details:
          "Developing full-stack applications using React, Node.js, and MongoDB. Leading projects and optimizing web application performance.",
      },
    ],
  },
  {
    category: "Internship Experience",
    items: [
      {
        year: "jan 2022 - july 2022",
        title: "Full Stack Developer - Trainee",
        company: "Inexture Solutions LLP",
        location: "Ahmedabad, Gujarat (IN)",
        role: "Trainee",
        details:
          "Worked on full-stack web development, assisting in building and maintaining web applications, with focus on front-end development.",
      },
    ],
  },
];

export const contactData = {
  pageTitle: "Let's Work Together!",
  pageDescription: "Contact With Me",
  name: "Kishan Vasani",
  role: "Full stack developer",
  description:
    "I am available for freelance work. Connect with me via and call in to my account.",
  phone: "+91 9265171523",
  email: "vasanikishan48@gmail.com",
  socialLinks: {
    LINKEDIN: "https://www.linkedin.com/in/kishan-vasani-3083961a5/",
    TWITTER: "https://twitter.com/mrvasani48",
    INSTAGRAM: "https://www.instagram.com/er.entwickler_48/",
  },
};

export const TESTIMONIALS = {
  title: "Testimonial",
  description: "What client say",
  testimonial_content: [
    {
      image: "portfolio1",
      name: "Davei Luace",
      role: "Chief Operating Manager",
      category: "Development",
      project: "Android App Development",
      date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
      rating: 5,
      feedback:
        "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris.",
    },
    {
      image: "portfolio2",
      name: "Sarah Johnson",
      role: "Product Manager",
      category: "Design",
      project: "UI/UX Development",
      date: "via Freelance - Jan 12, 2019 - Nov 25, 2022",
      rating: 4,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    {
      image: "portfolio3",
      name: "Michael Smith",
      role: "CTO",
      category: "Testing",
      project: "Software Quality Assurance",
      date: "via Agency - Feb 8, 2017 - Jul 15, 2020",
      rating: 5,
      feedback:
        "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
    },
  ],
};

export const BLOG_DATA = {
  title: "My Blog",
  description: "Visit my blog and keep your feedback",
  blogContent: [
    {
      id: 1,
      category: "Frontend Development",
      readTime: "3 hour read",
      title: "Building Intuitive User Interfaces",
      description:
        "Learn how to create engaging and accessible interfaces using modern frontend technologies.",
      image: images.blog1,
      altText: "Frontend development",
      content: [
        // First paragraph
        "Understanding the role of frameworks like React.js and Vue.js in modern UI development. These tools make building complex user interfaces much easier and more efficient. By using components and a virtual DOM, React.js improves performance and scalability.",
        "Creating responsive designs using CSS frameworks like Tailwind CSS and Bootstrap. These frameworks help streamline the process of building adaptable and fluid layouts that work across various screen sizes and devices.",

        // Second paragraph
        "Focusing on accessibility best practices to ensure your UI is usable by everyone. Accessibility ensures that users with disabilities can interact with your application effectively, making it more inclusive.",
        "Optimizing frontend performance by leveraging lazy loading and code splitting. These techniques reduce the initial load time and improve the overall user experience by only loading necessary resources on demand.",

        // Third paragraph
        "Managing state efficiently using hooks and context in React. This enables you to keep track of the UI's state in a clean and maintainable way, avoiding prop drilling and improving performance.",
        "Using animations and transitions to improve user experience and feedback. Animations provide users with clear visual cues for interactions, making the application feel more dynamic and responsive.",
        "Implementing dark mode and theming for personalized and user-friendly interfaces. Dark mode helps reduce eye strain and allows users to customize the look and feel of your application.",
      ],
    },
    {
      id: 2,
      category: "Backend Development",
      readTime: "4 hour read",
      title: "Building Robust APIs and Server Architectures",
      description:
        "Explore the backend technologies that power scalable and efficient applications.",
      image: images.blog2,
      altText: "Backend development",
      content: [
        // First paragraph
        "Setting up RESTful APIs using Node.js and Express for efficient routing. REST APIs allow for seamless communication between the frontend and backend, making it easy to handle different HTTP methods like GET, POST, PUT, and DELETE.",
        "Optimizing database queries using indexing and relational database best practices. Indexing improves query performance, while following database normalization ensures efficient storage and retrieval of data.",

        // Second paragraph
        "Using ORMs like Sequelize and Mongoose to simplify database interactions. These tools abstract away raw SQL queries, making it easier to interact with databases using JavaScript.",
        "Securing APIs using JWT authentication and role-based access control. JWT tokens help in securely transmitting information between the client and server, while role-based access ensures that only authorized users can access certain resources.",

        // Third paragraph
        "Implementing logging and error handling mechanisms to debug and maintain backend systems. A solid logging system helps track and resolve issues quickly, while proper error handling ensures that users experience minimal downtime.",
        "Using caching strategies with Redis to improve response times and scalability. Caching frequently accessed data reduces load on the database and speeds up response times.",
        "Deploying backend applications on cloud platforms like AWS and GCP for greater flexibility. Cloud platforms provide scalable infrastructure and managed services to handle varying levels of traffic.",
      ],
    },
    {
      id: 3,
      category: "Full-Stack Development",
      readTime: "5 hour read",
      title: "Mastering Full-Stack Development",
      description:
        "Dive into the integration of frontend and backend to build complete applications.",
      image: images.blog3,
      altText: "Full-stack development",
      content: [
        // First paragraph
        "Understanding the architecture of full-stack applications and how frontend and backend work together. A full-stack app combines both the user interface and the server-side logic, making it possible to deliver complete functionality within one application.",
        "Leveraging Next.js for server-side rendering, static site generation, and routing. Next.js enables the building of highly optimized React applications with fast load times and better SEO by rendering content on the server.",

        // Second paragraph
        "Implementing user authentication with OAuth2 and integrating with third-party services. OAuth2 allows users to authenticate securely using popular identity providers like Google or Facebook, reducing the need for custom authentication systems.",
        "Using GraphQL to streamline API development and allow clients to query only the data they need. This provides more efficient data fetching, reducing the amount of unnecessary data transferred over the network.",

        // Third paragraph
        "Handling real-time data updates using WebSockets or Firebase. WebSockets enable two-way communication between the client and server, allowing for live updates and real-time collaboration features.",
        "Deploying full-stack applications using CI/CD pipelines for automated testing and deployment. CI/CD ensures that code changes are tested, integrated, and deployed automatically, improving development speed and consistency.",
        "Monitoring application performance and using tools like Lighthouse to optimize speed and usability. Performance monitoring helps identify bottlenecks and provides insights for improving load times and user experience.",
      ],
    },
  ],
};

export const PORTFOLIO_DATA = {
  title: "My Portfolio",
  description:
    "Explore my extensive work across various projects and feel free to provide feedback.",
  portfolio_content: [
    {
      id: 1,
      image: images.ems, // You can replace this with an actual image URL
      altText: "Employee Management System",
      title: "Employee Management System",
      category: "Full Stack Development",
      likes: 1020,
      description:
        "A centralized portal for accessing key resources, boosting productivity, and streamlining internal processes.",
      content: [
        "Designed a dashboard for employees and admins to track work progress and key metrics.",
        "Developed user authentication using JWT for secure login and role-based access.",
        "Implemented real-time notifications for task assignments and updates.",
        "Created reporting tools for admins to generate daily, weekly, and monthly reports.",
        "Integrated a task management system for employees to manage and complete assignments.",
        "Developed a backend API using Node.js and Express to handle user requests and data operations.",
        "Used MongoDB to store user and task data, ensuring fast retrieval and easy scalability.",
      ],
    },
    {
      id: 2,
      image: images.cms, // Replace with actual image URL
      altText: "Campaign Management System",
      title: "Campaign Management System",
      category: "Web Application",
      likes: 850,
      description:
        "Multifaceted platform for admins, campaign owners, and users to create, manage, and engage in campaigns.",
      content: [
        "Designed an intuitive dashboard for campaign owners to create and track campaign performance.",
        "Integrated payment gateways to allow users to fund campaigns.",
        "Implemented advanced filtering options for campaigns to allow users to find specific ones.",
        "Developed a user rating and feedback system for transparency and credibility.",
        "Created a notification system to keep users informed about campaign updates and milestones.",
        "Optimized the backend API for handling large-scale user data and campaign analytics.",
        "Ensured data security through encryption of sensitive user data and secure payment transactions.",
      ],
    },
    {
      id: 3,
      image: images.jobs, // Replace with actual image URL
      altText: "Adifect Job Portal",
      title: "Adifect: Job Portal",
      category: "Job Portal",
      likes: 920,
      description:
        "An online platform for businesses to post job openings, share on social media, and attract a wider audience.",
      content: [
        "Developed a job posting system for employers to create and manage job listings.",
        "Created a search and filter feature to allow candidates to find job listings by category, location, and salary.",
        "Integrated job alerts via email for candidates when new job postings match their interests.",
        "Built a messaging system for employers and candidates to communicate directly through the platform.",
        "Implemented a review and rating system for candidates to evaluate employers and vice versa.",
        "Optimized job listing pages for fast load times and a smooth user experience.",
        "Used PostgreSQL as the database to ensure fast querying and transaction integrity.",
      ],
    },
    {
      id: 4,
      image: images.bay, // Replace with actual image URL
      altText: "Babysitter Booking System",
      title: "Babysitter Booking System",
      category: "Childcare Platform",
      likes: 1180,
      description:
        "Advanced platform for hiring sitters with tailored functionalities for admins, employees, and sitters.",
      content: [
        "Designed a user-friendly interface for both sitters and parents to manage bookings.",
        "Implemented a scheduling system to allow sitters to set their availability.",
        "Developed a review system for users to rate sitters and provide feedback.",
        "Integrated a payment gateway for secure transactions between parents and sitters.",
        "Developed a real-time chat feature for parents and sitters to communicate easily.",
        "Built a recommendation engine that suggests sitters based on previous bookings and ratings.",
        "Optimized the platform for mobile users to ensure accessibility on all devices.",
      ],
    },
    {
      id: 5,
      image: images.portfolio5, // Replace with actual image URL
      altText: "Web3 NFT Project",
      title: "Web3 NFT Project",
      category: "Web3 NFT",
      likes: 1450,
      description:
        "NFT platform on Solana Blockchain focusing on quality, unique design, and steady returns for holders.",
      content: [
        "Built a decentralized NFT marketplace where users can buy, sell, and mint NFTs.",
        "Integrated Solana blockchain for fast, low-cost transactions and secure ownership.",
        "Designed a staking system that rewards users who hold certain NFTs for long periods.",
        "Created a real-time auction system for bidding on rare and limited-edition NFTs.",
        "Implemented a multi-signature wallet for enhanced security and transaction validation.",
        "Developed an analytics dashboard to track the value and trends of NFTs in the marketplace.",
        "Optimized the platform's backend for handling large volumes of blockchain transactions.",
      ],
    },
  ],
};
