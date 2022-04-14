import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillManageComponent } from './skill-manage.component';

describe('SkillManageComponent', () => {
  let component: SkillManageComponent;
  let fixture: ComponentFixture<SkillManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
