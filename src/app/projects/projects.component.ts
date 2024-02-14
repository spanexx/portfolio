import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HomeIconComponent } from '../home-icon/home-icon.component';
import { SwiperModule } from 'swiper/types/shared';
import Swiper from 'swiper';
import { IconsComponent } from '../icons/icons.component';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule, AboutMeComponent, IconsComponent,RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{
  
  public projects = [
    {
      title: 'Project A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      link: '/projects', // Update the route accordingly
      image: './assets/project1.png' // Update the path accordingly
    },
    {
      title: 'Project B',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['React', 'JavaScript', 'CSS', 'API'],
      link: '/projects', // Update the route accordingly
      image: './assets/project2.jpg' // Update the path accordingly
    },
    {
      title: 'Project C',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['React', 'JavaScript', 'CSS', 'API'],
      link: '/projects', // Update the route accordingly
      image: './assets/project3.jpg' // Update the path accordingly
    },
    {
      title: 'Project D',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['React', 'JavaScript', 'CSS', 'API'],
      link: '/projects', // Update the route accordingly
      image: './assets/project4.png' // Update the path accordingly
    },
    // Add more projects as needed
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToAboutMe() {
    this.router.navigate(['/projects']);
  }
}