import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationIconComponent } from './education-icon.component';

describe('EducationIconComponent', () => {
  let component: EducationIconComponent;
  let fixture: ComponentFixture<EducationIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
