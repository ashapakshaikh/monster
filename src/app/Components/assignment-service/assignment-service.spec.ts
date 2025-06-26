import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentService } from './assignment-service';

describe('AssignmentService', () => {
  let component: AssignmentService;
  let fixture: ComponentFixture<AssignmentService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
