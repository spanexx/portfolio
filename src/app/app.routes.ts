import { Routes } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


export const routes: Routes = [
{ path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },

  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  

]
