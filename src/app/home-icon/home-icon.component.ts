import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet], 
  templateUrl: './home-icon.component.html',
  styleUrl: './home-icon.component.css'
})
export class HomeIconComponent {
  constructor(private router: Router) {}
  @Input() showIcon: boolean = true;
  navigateToAboutMe() {
    this.router.navigate(['/about-me']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
