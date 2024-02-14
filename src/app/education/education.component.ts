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
      title: 'Bachelor of Science in Computer Science',
      institution: 'University XYZ',
      type: 'Traditional',
      duration: '2016 - 2020'
    },
    {
      title: 'Web Development Bootcamp',
      institution: 'Udemy',
      type: 'Online',
      duration: '2021 - Present'
    },
    {
      title: 'Bachelor of Science in Computer Science',
      institution: 'University XYZ',
      type: 'Traditional',
      duration: '2016 - 2020'
    },
    {
      title: 'Web Development Bootcamp',
      institution: 'Udemy',
      type: 'Online',
      duration: '2021 - Present'
    },
    // Add more education items as needed
  ];
}
