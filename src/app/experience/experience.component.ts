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
      title: 'Bartending',
      date: 'June 2021 - Nov. 2023',
      description: 'Professional Bartending at Sunrise Pearl, a 5-star Hotel in Protaras, Cyprus. Responsibilities included making cocktails, coffee, coaching new staff, and providing room services.'
    },
    {
      title: 'Customer Service and Marketing',
      date: 'Jan 2013 - Jan 2014',
      description: 'Engaged in customer service and marketing roles at Diamond Bank, Enugu, Nigeria. Marketed new banking platforms and insurance to customers. Also worked in the IT department, responsible for daily transaction backups.'
    },
    {
      title: 'Web Developer (Remote)',
      date: 'Jan 2020 - Feb 2021',
      description: 'Worked as a remote Web Developer at Techo Craft ICT Solutions, teaching beginner-level graphic design and web development courses. Conducted courses on digital marketing.'
    },
    {
      title: 'Creative Director for Event Coverage',
      date: 'Oct 2015 - July 2019',
      description: 'Established the broad artistic direction and ideas for event coverage at X-EL Images, Enugu, Nigeria. Collaborated with the event planning team to understand and achieve the event\'s intended outcomes.'
    },
    {
      title: 'IT Manager',
      date: 'May 2014 - June 2015',
      description: 'Managed the IT department at Potech Electrical Engineering Limited, Enugu, Nigeria. Ensured the company\'s reputation and smooth daily operations of the IT department, including record-keeping of tools and customer communication.'
    },
    {
      title: 'Marketer',
      date: 'Feb 2013 - Jan 2014',
      description: 'Market new bank platforms and insurance to customers at Coal Camp Microfinance Bank, Enugu, Nigeria. Additionally worked in the IT department, responsible for daily transaction backups.'
    }
  ];
  
}
