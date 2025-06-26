import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductFromDB } from './all-product-from-db';

describe('AllProductFromDB', () => {
  let component: AllProductFromDB;
  let fixture: ComponentFixture<AllProductFromDB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProductFromDB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductFromDB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
