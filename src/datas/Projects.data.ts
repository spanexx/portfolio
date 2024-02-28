// projects.data.ts
import { Project, Challenge, Result } from '../app/Models/Projects.model'; // Adjust the path accordingly

export const projectsData: Project[] = [
  {
    id: 1,
  title: 'Portfolio',
  description: 'A personal portfolio website built using Angular, showcasing various projects and skills.',
  tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  link: '/projects',
  image: './assets/project1.png',
  technologiesUsed: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  githubLink: 'https://github.com/spanexx/portfolio',
  demoLink: '', // Add a demo link if applicable
  problemStatement: 'Create an interactive and informative portfolio to showcase skills and projects.',
  goals: ['Improve user experience', 'Provide a comprehensive overview of skills and projects'],
  uniqueValueProposition: 'Personalized and visually appealing portfolio to stand out to potential employers or collaborators.',
  developmentStack: ['Angular', 'TypeScript'],
  challenges: [
    {
      description: 'Integrating Angular CLI for project generation',
      solution: 'Utilized Angular CLI for project scaffolding and development.',
    },
    {
      description: 'Routing for different sections',
      solution: 'Implemented Angular routing for seamless navigation between sections.',
    },
  ],
  results: [
    {
      metric: 'Increased self-presentation capabilities',
      description: 'Effectively showcase skills and projects to the audience.',
    },
    {
      metric: 'Enhanced personal branding',
      description: 'Established a professional online presence.',
    },
  ],
  keyLearnings: [
    'Angular CLI usage and project structure',
    'Effective use of Angular routing for SPA',
  ],
  futureVision: 'Continuously update and improve the portfolio with new projects and skills.',
},
  {
    id: 2,
  title: 'FoodKart',
  description: 'An Angular application for an online food ordering platform - FoodKart.',
  tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  link: '/foodkart',
  image: './assets/project2.png',
  technologiesUsed: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  githubLink: 'https://github.com/spanexx/foodkart',
  demoLink: '', // Add a demo link if applicable
  problemStatement: 'Create a user-friendly online food ordering platform with search functionality.',
  goals: ['List various food items', 'Implement search functionality', 'Create responsive UI'],
  uniqueValueProposition: 'Convenient online platform for users to explore and order food.',
  developmentStack: ['Angular', 'TypeScript'],
  challenges: [
    {
      description: 'Implementing search functionality',
      solution: 'Added a search feature and connected it to the backend for fetching relevant data.',
    },
    {
      description: 'Responsive UI design',
      solution: 'Utilized CSS and HTML for creating a responsive and visually appealing user interface.',
    },
  ],
  results: [
    {
      metric: 'Improved user engagement',
      description: 'Users can easily search for their desired food items, enhancing the overall experience.',
    },
    {
      metric: 'Bug fixing in progress',
      description: 'Ongoing efforts to resolve issues and enhance application stability.',
    },
  ],
  keyLearnings: [
    'Integration with backend services',
    'Enhanced skills in CSS for responsive design',
  ],
  futureVision: 'Complete bug fixing, connect to a backend server, and add additional features for a fully functional food ordering platform.',
},

  {
    id: 3,
  title: 'SpaneXxKart',
  description: 'An Angular e-commerce website specializing in selling various types of shoes from popular brands.',
  tags: ['Angular', 'HTML', 'TypeScript', 'CSS'],
  link: '/spanexxKart',
  image: './assets/project3.png', // Assuming you have an image file named spanexxKart.png
  technologiesUsed: ['Angular', 'HTML', 'TypeScript', 'CSS'],
  githubLink: 'https://github.com/spanexx/spanexxKart',
  demoLink: '', // Add a demo link if applicable
  problemStatement: 'Create a user-friendly online shoe store with categorized products and additional features.',
  goals: ['Display 52 products with detailed information', 'Categorize products by gender, type, and brand', 'Highlight best sellers with distinct colors'],
  uniqueValueProposition: 'A wide range of high-quality shoes from popular brands with a user-friendly interface.',
  developmentStack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  challenges: [
    {
      description: 'Implementing product categorization',
      solution: 'Utilized Angular features to categorize products based on gender, type, and brand.',
    },
    {
      description: 'Highlighting best sellers',
      solution: 'Implemented a visual distinction for best-selling products using three distinct colors.',
    },
  ],
  results: [
    {
      metric: 'Improved user engagement',
      description: 'Users can easily find and explore products, leading to increased engagement.',
    },
    {
      metric: 'Responsive design for various devices',
      description: 'Ensured a seamless experience across different screen sizes.',
    },
  ],
  keyLearnings: [
    'Effective use of Angular for building dynamic web applications',
    'Enhanced skills in HTML and CSS for creating visually appealing interfaces',
  ],
  futureVision: 'Continuously add new features, improve user experience, and expand the product range.',
},

  {
    id: 4,
  title: 'Interactive Icons',
  description: 'A project showcasing interactive icons with dropdown functionality.',
  tags: ['Angular', 'CSS', 'Animation'],
  link: '/projects/interactive-icons',
  image: './assets/project4.png',
  technologiesUsed: ['Angular', 'CSS'],
  githubLink: 'https://github.com/spanexx/portfolio/tree/master/src/app',
  demoLink: '',
  problemStatement: 'Enhance user experience with interactive icons and dropdowns.',
  goals: ['Implement smooth animations', 'Create reusable Angular components'],
  uniqueValueProposition: 'Engaging and visually appealing UI elements.',
  developmentStack: ['Angular', 'CSS'],
  challenges: [
    {
      description: 'Dropdown animation',
      solution: 'Utilized CSS animations for smooth slide-up and slide-down effects.',
    },
    {
      description: 'Angular components',
      solution: 'Created encapsulated components for each interactive icon.',
    },
  ],
  results: [
    {
      metric: 'User engagement',
      description: 'Increased user interaction through intuitive icons.',
    },
    {
      metric: 'Code maintainability',
      description: 'Reusable and modular Angular components for easy maintenance.',
    },
  ],
  keyLearnings: ['Advanced CSS animations', 'Angular component architecture'],
  futureVision: 'Expand the set of interactive icons and incorporate additional features.',
},

  {
    id: 5,
    title: 'ToDo Web Application',
    description: 'A task and project management app to help users stay organized and focused.',
    tags: ['Web Application', 'Task Management', 'Project Management'],
    link: '/projects/todo-web-app',
    image: './assets/project5.png',
    technologiesUsed: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/yourusername/todo-web-app',
    demoLink: 'https://demo.todo-web-app.com',
    problemStatement: 'Users struggle to stay organized and manage tasks effectively.',
    goals: ['Create an intuitive user interface', 'Implement project and task management features'],
    uniqueValueProposition: 'Seamless organization and management of tasks and projects.',
    developmentStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    challenges: [
      {
        description: 'User authentication',
        solution: 'Implemented user accounts for project creators while allowing guest usage.',
      },
      {
        description: 'Project invitations',
        solution: 'Enabled tagging users by email for collaboration without account creation.',
      },
    ],
    results: [
      {
        metric: 'User engagement',
        description: 'Increased user productivity and organization.',
      },
      {
        metric: 'Collaboration efficiency',
        description: 'Streamlined collaboration through project invitations.',
      },
    ],
    keyLearnings: ['User authentication strategies', 'Collaborative project management'],
    futureVision: 'Expand features, enhance user experience, and scale for more users.',
  }
];
