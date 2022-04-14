import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievementManageComponent } from './archievement-manage.component';

describe('ArchievementManageComponent', () => {
  let component: ArchievementManageComponent;
  let fixture: ComponentFixture<ArchievementManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchievementManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchievementManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
