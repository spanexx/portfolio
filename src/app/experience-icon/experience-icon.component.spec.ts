import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceIconComponent } from './experience-icon.component';

describe('ExperienceIconComponent', () => {
  let component: ExperienceIconComponent;
  let fixture: ComponentFixture<ExperienceIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
