import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillComponent } from '../skill/skill.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
            FormsModule,
            RouterLink, 
            RouterOutlet,
            AboutMeComponent, 
            SkillComponent, 
            ExperienceComponent, 
            ProjectsComponent, 
            ContactComponent, 
            EducationComponent,
        ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  isMenu: boolean = false;
  constructor(private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addTypingEffect();
    }
  }

  addTypingEffect(): void {
    // Get the logo element
    const logo = document.getElementById("typedLogo");
    if (!logo) {return;}

    // Get the text content of the logo
    const logoText = logo.innerText;

    // Clear the original text content
    logo.innerText = "";

    // Create a span for each character in the original text
    for (const char of logoText) {
      const span = document.createElement("span");
      span.textContent = char;
      logo.appendChild(span);
    }

    // Add typing animation class to the logo
    logo.classList.add("typing-effect");
  }
  navigateToAboutMe(): void {
    // Use Angular Router to navigate programmatically
    this.router.navigate(['/about-me']);
  }

  toggleMenu(): void {
    this.isMenu = !this.isMenu;
  }
}
