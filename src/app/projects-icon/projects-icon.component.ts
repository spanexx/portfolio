import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-projects-icon',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule ],
  templateUrl: './projects-icon.component.html',
  styleUrl: './projects-icon.component.css'
})
export class ProjectsIconComponent {
  @Input() showIcon: boolean = true;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/projects']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
