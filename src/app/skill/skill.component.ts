import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HomeIconComponent } from '../home-icon/home-icon.component';
import { IconsComponent } from '../icons/icons.component';

interface Skill {
  name: string;
  description: string;
  experience: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, AboutMeComponent, IconsComponent],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input()showHome: boolean = true;
  
  public skills: Skill[] = [
    {
      name: 'Angular',
      description: 'Skilled in using Angular for web development. Developed dynamic applications during my ERASMUS+ program at Varna University of Management.',
      experience: '2+ years of hands-on experience in Angular development.',
    },
    {
      name: 'TypeScript',
      description: 'Proficient in writing type-safe code using TypeScript. Applied TypeScript extensively while working as a web developer at Techo Craft ICT Solutions.',
      experience: 'Experience gained through teaching beginner-level courses for web development and digital marketing.',
    },
    {
      name: 'HTML5',
      description: 'Expertise in writing semantic and accessible HTML code. Applied HTML skills in various roles, including web development and creative direction for event coverage.',
      experience: 'Utilized HTML in creating and managing web content during the ERASMUS+ program and in remote web development roles.',
    },
    {
      name: 'CSS',
      description: 'Proficient in crafting responsive and visually appealing designs using CSS. Developed styling skills while working as a web developer and creative director for event coverage.',
      experience: 'Experience includes creating and managing styles for websites, including the use of frameworks like Bootstrap.',
    },
    {
      name: 'JavaScript (Node.js, Express.js)',
      description: 'Experience in server-side JavaScript using Node.js and Express.js. Applied JavaScript skills in web development roles, including teaching and remote work.',
      experience: 'Hands-on experience in using JavaScript for server-side development.',
    },
    {
      name: 'GitHub',
      description: 'Proficient in using GitHub for version control. Applied version control practices during web development projects.',
      experience: 'Utilized GitHub for collaborative coding and managing project repositories.',
    },
    {
      name: 'Adobe (Photoshop, InDesign, Dreamweaver)',
      description: 'Skilled in using Adobe tools for graphic design and web development. Taught beginner-level graphic design courses at Techo Craft ICT Solutions.',
      experience: 'Applied Adobe tools for creative direction in event coverage and taught graphic design as part of web development courses.',
    },
    {
      name: 'Microsoft PowerPoint',
      description: 'Proficient in using Microsoft PowerPoint for presentations. Applied presentation skills in various roles, including restaurant management.',
      experience: 'Utilized Microsoft PowerPoint for creating presentations related to restaurant management and other professional activities.',
    },
    {
      name: 'Bartending',
      description: 'Professional bartending skills gained during employment at Sunrise Pearl, a 5-star hotel in Protaras, Cyprus. Proficient in making cocktails, coffee, coaching new staff, and providing room services.',
      experience: 'Worked as a bartender at Sunrise Pearl from June 2021 to November 2023.',
    },
  ];
  


}
