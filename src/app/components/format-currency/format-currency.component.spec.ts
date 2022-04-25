import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatCurrencyComponent } from './format-currency.component';

describe('FormatCurrencyComponent', () => {
  let component: FormatCurrencyComponent;
  let fixture: ComponentFixture<FormatCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
