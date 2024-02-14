import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HomeIconComponent } from '../home-icon/home-icon.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, AboutMeComponent, IconsComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input()showHome: boolean = true;
  public experiences = [
  {
    title: 'Software Developer',
    date: 'January 2020 - Present',
    description: 'Worked on various web development projects using Angular and TypeScript.'
  },
  {
    title: 'Intern, XYZ Company',
    date: 'May 2019 - August 2019',
    description: 'Assisted in developing and maintaining internal tools.'
  }]
}
