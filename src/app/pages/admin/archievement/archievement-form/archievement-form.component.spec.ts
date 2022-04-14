import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievementFormComponent } from './archievement-form.component';

describe('ArchievementFormComponent', () => {
  let component: ArchievementFormComponent;
  let fixture: ComponentFixture<ArchievementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchievementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchievementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
