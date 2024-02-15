// projects.data.ts
import { Project, Challenge, Result } from '../app/Models/Projects.model'; // Adjust the path accordingly

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Project A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    link: '/projects',
    image: './assets/project1.png',
    technologiesUsed: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/yourusername/project-a',
    demoLink: 'https://demo.project-a.com',
    problemStatement: 'Solving a complex problem in the industry.',
    goals: ['Improve user experience', 'Optimize performance'],
    uniqueValueProposition:
      'Revolutionary solution that simplifies daily tasks.',
    developmentStack: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
    challenges: [
      {
        description: 'Integration with third-party API',
        solution: 'Implemented custom middleware',
      },
      {
        description: 'UI/UX improvements',
        solution: 'Conducted user feedback sessions',
      },
    ],
    results: [
      {
        metric: 'Increased user engagement by 20%',
        description: 'Implemented gamification features',
      },
      {
        metric: 'Reduced load time by 15%',
        description: 'Optimized server-side rendering',
      },
    ],
    keyLearnings: [
      'Adaptability to new technologies',
      'Effective collaboration in a remote team',
    ],
    futureVision: 'Continuously evolve and expand functionality.',
  },
  {
    id: 2,
    title: 'Project B',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['React', 'JavaScript', 'CSS', 'API'],
    link: '/projects',
    image: './assets/project2.jpg',
    technologiesUsed: ['React', 'JavaScript', 'CSS', 'API'],
    githubLink: 'https://github.com/yourusername/project-b',
    demoLink: 'https://demo.project-b.com',
    problemStatement: 'Addressing a market gap with innovative features.',
    goals: [
      'Achieve seamless data synchronization',
      'Improve real-time collaboration',
    ],
    uniqueValueProposition: 'Transforming the way users interact with data.',
    developmentStack: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    challenges: [
      {
        description: 'Optimize API responses',
        solution: 'Implemented caching mechanism',
      },
      {
        description: 'Real-time collaboration',
        solution: 'Utilized WebSocket technology',
      },
    ],
    results: [
      {
        metric: 'Increased user satisfaction by 25%',
        description: 'Implemented user-friendly features',
      },
      {
        metric: 'Enhanced data security',
        description: 'Implemented end-to-end encryption',
      },
    ],
    keyLearnings: [
      'Agile development practices',
      'Effective communication within the team',
    ],
    futureVision: 'Innovate and adapt to changing user needs.',
  },

  {
    id: 3,
    title: 'Project C',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tags: ['Vue.js', 'JavaScript', 'SCSS', 'Firebase'],
    link: '/projects',
    image: './assets/project3.png',
    technologiesUsed: ['Vue.js', 'JavaScript', 'SCSS', 'Firebase'],
    githubLink: 'https://github.com/yourusername/project-c',
    demoLink: 'https://demo.project-c.com',
    problemStatement: 'Enhancing user collaboration and data visualization.',
    goals: ['Implement real-time data updates', 'Enhance user interface'],
    uniqueValueProposition: 'Revolutionizing data-driven decision-making.',
    developmentStack: ['Vue.js', 'JavaScript', 'Node.js', 'Firebase'],
    challenges: [
      {
        description: 'Real-time data synchronization',
        solution: 'Utilized Firebase real-time database',
      },
      {
        description: 'Complex data visualization',
        solution: 'Implemented interactive charts',
      },
    ],
    results: [
      {
        metric: 'Improved data accuracy',
        description: 'Implemented data validation checks',
      },
      {
        metric: 'Enhanced user interactivity',
        description: 'Implemented drag-and-drop features',
      },
    ],
    keyLearnings: [
      'Vue.js best practices',
      'Effective use of Firebase services',
    ],
    futureVision: 'Expand features for advanced data analysis.',
  },

  {
    id: 4,
    title: 'Project D',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['Express.js', 'MongoDB', 'GraphQL', 'React'],
    link: '/projects',
    image: './assets/project4.jpg',
    technologiesUsed: ['Express.js', 'MongoDB', 'GraphQL', 'React'],
    githubLink: 'https://github.com/yourusername/project-d',
    demoLink: 'https://demo.project-d.com',
    problemStatement: 'Building a scalable and efficient e-commerce platform.',
    goals: ['Optimize database performance', 'Improve user authentication'],
    uniqueValueProposition: 'Providing a seamless online shopping experience.',
    developmentStack: ['Express.js', 'MongoDB', 'GraphQL', 'React'],
    challenges: [
      {
        description: 'Scalability',
        solution: 'Implemented load balancing and caching',
      },
      {
        description: 'User authentication',
        solution: 'Utilized JWT for secure authentication',
      },
    ],
    results: [
      {
        metric: 'Reduced page load times',
        description: 'Implemented server-side rendering',
      },
      {
        metric: 'Enhanced security measures',
        description: 'Implemented HTTPS and secure APIs',
      },
    ],
    keyLearnings: [
      'Scalable architecture design',
      'Advanced GraphQL implementations',
    ],
    futureVision: 'Expand product offerings and user base.',
  },

  {
    id: 5,
    title: 'Project E',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['Django', 'Python', 'Bootstrap', 'PostgreSQL'],
    link: '/projects',
    image: './assets/project5.png',
    technologiesUsed: ['Django', 'Python', 'Bootstrap', 'PostgreSQL'],
    githubLink: 'https://github.com/yourusername/project-e',
    demoLink: 'https://demo.project-e.com',
    problemStatement: 'Streamlining content creation and collaboration.',
    goals: [
      'Implement content versioning',
      'Enhance content editing capabilities',
    ],
    uniqueValueProposition:
      'Empowering users with a feature-rich content management system.',
    developmentStack: ['Django', 'Python', 'Bootstrap', 'PostgreSQL'],
    challenges: [
      {
        description: 'Content versioning',
        solution: 'Implemented Git-like version control for content',
      },
      {
        description: 'User-friendly content editor',
        solution: 'Utilized a WYSIWYG editor',
      },
    ],
    results: [
      {
        metric: 'Increased content creation efficiency',
        description: 'Implemented collaborative editing',
      },
      {
        metric: 'Streamlined content approval process',
        description: 'Implemented workflow automation',
      },
    ],
    keyLearnings: [
      'Advanced Django concepts',
      'Effective content management strategies',
    ],
    futureVision:
      'Expand features for seamless integration with external services.',
  },
];
