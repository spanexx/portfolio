import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-education-icon',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, RouterOutlet],
  templateUrl: './education-icon.component.html',
  styleUrl: './education-icon.component.css'
})
export class EducationIconComponent {
  @Input() showIcon: boolean = true;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/education']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
