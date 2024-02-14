import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { HomeIconComponent } from '../home-icon/home-icon.component';
import { IconsComponent } from '../icons/icons.component';



@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, 
            RouterLink, FormsModule, CommonModule, 
            SkillComponent, ContactComponent, ProjectsComponent,
          EducationComponent, ExperienceComponent, HomeIconComponent, IconsComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  @Input() shouldShowIcon: boolean  = true;
  public profileImage: string = 'assets/victor.jpg'; // Update the path accordingly
  public name: string = 'Victor Chidera Ani';
  public skills: string[] = [
    'Angular', 'TypeScript', 'Bartending', 'HTML', 'CSS', 'MySQL'
    // Add more experiences as needed
  ];
}