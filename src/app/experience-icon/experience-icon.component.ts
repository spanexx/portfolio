import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-experience-icon',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule ],
  templateUrl: './experience-icon.component.html',
  styleUrl: './experience-icon.component.css'
})
export class ExperienceIconComponent {
  @Input() showIcon: boolean = true;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/experience']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
