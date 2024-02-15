import { Injectable } from '@angular/core';
import { Project } from '../Models/Projects.model';
import { projectsData } from '../../datas/Projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

constructor(){}

  getAllProjects(): Project[] {
    return projectsData;
  }

  getProjectById(id: string): Project | undefined {
    return this.getAllProjects().find(project => project.id === +id) ?? new Project();
  }
  
  

  addProject(project: Project): void {
    this.projects.push(project);
  }

  updateProject(project: Project): void {
    const index = this.projects.findIndex(p => p.id === project.id);

    if (index !== -1) {
      this.projects[index] = project;
    }
  }

  deleteProject(id: string): void {
  this.projects = this.projects.filter(project => project.id !== +id);
}

}
