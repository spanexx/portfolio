import { Component, Input } from '@angular/core';
import { Project } from '../Models/Projects.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../service/project.service';
import { projectsData } from '../../datas/Projects.data';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  project: Project | undefined;
  showAdditionalInfo = false;

  constructor(private activateRoute: ActivatedRoute, private projectService: ProjectService) {
    activateRoute.params.subscribe(params => {
      if (params['id']) {
        const projectId: string = params['id'];
        const foundProject = projectService.getProjectById(projectId);

        if (foundProject) {
          this.project = foundProject;
        } else {
          // Handle case where project is not found, e.g., redirect to a 404 page or display a message.
          console.error(`Project with ID ${projectId} not found.`);
        }
      }
    });
  }

  toggleAdditionalInfo() {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }
}
