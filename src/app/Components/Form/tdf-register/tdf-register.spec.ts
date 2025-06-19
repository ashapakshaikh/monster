import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFRegister } from './tdf-register';

describe('TDFRegister', () => {
  let component: TDFRegister;
  let fixture: ComponentFixture<TDFRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TDFRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDFRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
