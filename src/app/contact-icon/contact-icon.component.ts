import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-contact-icon',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact-icon.component.html',
  styleUrl: './contact-icon.component.css'
})
export class ContactIconComponent {
  @Input() showIcon: boolean = true;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/contact']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
