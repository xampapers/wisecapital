import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyLendingComponent } from './money-lending.component';

describe('MoneyLendingComponent', () => {
  let component: MoneyLendingComponent;
  let fixture: ComponentFixture<MoneyLendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyLendingComponent]
    });
    fixture = TestBed.createComponent(MoneyLendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
