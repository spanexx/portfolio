import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule ],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.css'
})
export class SkillIconComponent {
  @Input() showIcon: boolean = true;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/skills']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
