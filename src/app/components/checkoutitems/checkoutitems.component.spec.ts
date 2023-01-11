import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutitemsComponent } from './checkoutitems.component';

describe('CheckoutitemsComponent', () => {
  let component: CheckoutitemsComponent;
  let fixture: ComponentFixture<CheckoutitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
