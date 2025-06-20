import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfProduct } from './mdf-product';

describe('MdfProduct', () => {
  let component: MdfProduct;
  let fixture: ComponentFixture<MdfProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdfProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdfProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
