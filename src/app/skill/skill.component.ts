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
      description: 'A powerful framework for building dynamic web applications.',
      experience: '2+ years of experience in developing Angular applications.',
    },
    {
      name: 'TypeScript',
      description: 'A superset of JavaScript that adds optional static typing.',
      experience: 'Proficient in writing type-safe code using TypeScript.',
    },
    {
      name: 'HTML5',
      description: 'A superset of JavaScript that adds optional static typing.',
      experience: 'Proficient in writing type-safe code using TypeScript.',
    },
    {
      name: 'CSS',
      description: 'A superset of JavaScript that adds optional static typing.',
      experience: 'Proficient in writing type-safe code using TypeScript.',
    },
    {
      name: 'Angular',
      description: 'A powerful framework for building dynamic web applications.',
      experience: '2+ years of experience in developing Angular applications.',
    },
    {
      name: 'TypeScript',
      description: 'A superset of JavaScript that adds optional static typing.',
      experience: 'Proficient in writing type-safe code using TypeScript.',
    },
];


}
