import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTwo } from './directive-two';

describe('DirectiveTwo', () => {
  let component: DirectiveTwo;
  let fixture: ComponentFixture<DirectiveTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
