import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HomeIconComponent } from '../home-icon/home-icon.component';
import { ExperienceIconComponent } from '../experience-icon/experience-icon.component';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { ProjectsIconComponent } from '../projects-icon/projects-icon.component';
import { ContactIconComponent } from '../contact-icon/contact-icon.component';
import { EducationIconComponent } from '../education-icon/education-icon.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [HomeIconComponent, ExperienceIconComponent, SkillIconComponent, 
            ProjectsIconComponent, ContactIconComponent, EducationIconComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']  
})
export class IconsComponent implements OnInit, AfterViewInit {

  @Input() homeIcon: boolean = true;
  @Input() contactIcon: boolean = true;
  @Input() educationIcon: boolean = true;
  @Input() experienceIcon: boolean = true;
  @Input() projectIcon: boolean = true;
  @Input() skillIcon: boolean = true;

  @ViewChild('arrowDown', { static: true }) arrowDown!: ElementRef;

  isExpanded = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.arrowDown) {
      this.renderer.listen(this.arrowDown.nativeElement, 'click', this.toggleIcons.bind(this));
    }

    this.renderer.listen('document', 'click', this.documentClickHandler.bind(this));
  }

  toggleIcons(event?: Event) {
    this.isExpanded = !this.isExpanded;
    // Prevent the click event from propagating to the document
    if (event) {
      event.stopPropagation();
    }
  }

  documentClickHandler() {
    // Hide the dropdown content when clicking anywhere on the document
    this.isExpanded = false;
  }
}