import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HomeIconComponent } from '../home-icon/home-icon.component';
import { SwiperModule } from 'swiper/types/shared';
import Swiper from 'swiper';
import { IconsComponent } from '../icons/icons.component';
import { RouterLink, Router } from '@angular/router';
import { projectsData } from '../../datas/Projects.data';
import { Project } from '../Models/Projects.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule, AboutMeComponent, IconsComponent,RouterLink,],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{
  
  public projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projects = this.projectService.getAllProjects();
  }

  navigateToProjectDetails(project: Project) {
    this.router.navigate(['/projects', project.id]);
    // Adjust the route accordingly based on your actual route structure
  }
  }
