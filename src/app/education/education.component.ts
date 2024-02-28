import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeIconComponent } from '../home-icon/home-icon.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeIconComponent,  IconsComponent,],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  public education: any[] = [
    {
      title: 'Diploma in Computer Science',
      institution: 'Institute of Management and Technology',
      type: 'Traditional',
      duration: '2010 - 2012'
    },
    {
      title: 'ERASMUS+ Program',
      institution: 'Varna University of Management',
      type: 'International Exchange',
      duration: '2022 - 2023'
    },
    {
      title: 'Figma',
      institution: 'Udemy',
      type: 'Online',
      duration: '2021 - Present'
    },
    {
      title: 'Bachelor of Arts in Hospitality Management',
      institution: 'Internapa College/University',
      type: 'Traditional',
      duration: '2019 - 2024'
    },
    {
      title: 'Angular',
      institution: 'Self-Taught',
      type: 'Online',
      duration: '2021 - Present'
    },
    // Add more education items as needed
  ];
  
}
