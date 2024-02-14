import { Component, Input } from '@angular/core';
import { HomeIconComponent } from '../home-icon/home-icon.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HomeIconComponent, IconsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input()showHome: boolean = true;
}
