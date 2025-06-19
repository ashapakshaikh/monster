import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDFLogin } from './mdf-login';

describe('MDFLogin', () => {
  let component: MDFLogin;
  let fixture: ComponentFixture<MDFLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDFLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDFLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
