import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skill/skill.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { IconsComponent } from './icons/icons.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            HeaderComponent,
            FooterComponent,
            SkillComponent, 
            AboutMeComponent, 
            ContactComponent, 
            EducationComponent, 
            ExperienceComponent,
            ProjectsComponent, 
            HomeIconComponent,
            AboutMeComponent,
            RouterOutlet,  
            RouterLink,
            IconsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
