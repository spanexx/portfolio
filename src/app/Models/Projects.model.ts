// Projects.model.ts

export class Project {

     id!: number;
       title!: string;
       description!: string;
       tags!: string[];
       link!: string;
       image!: string;
       technologiesUsed!: string[];
       githubLink?: string;
       demoLink?: string;

       problemStatement?: string;
       goals?: string[];
       uniqueValueProposition?: string;
       developmentStack?: string[];
       challenges?: Challenge[]; // Custom object type for challenges
       results?: Result[]; // Custom object type for results
       keyLearnings?: string[];
       futureVision?: string;
    }
  
  
  // Optional helper objects:
  export class Challenge {
    description!: string;
    solution!: string;
  }
  
  export interface Result {
    metric: string; // e.g., "Increased user engagement by 20%"
    description: string;
  }
  
  
  // Optional helper objects:
  export interface Challenge {
    description: string;
    solution: string;
  }
  
  export interface Result {
    metric: string; // e.g., "Increased user engagement by 20%"
    description: string;
  }
  