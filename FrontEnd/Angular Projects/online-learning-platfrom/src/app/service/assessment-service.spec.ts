import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AssessmentService } from './assessment-service';

describe('AssessmentService', () => {
  let service: AssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AssessmentService]
    });
    service = TestBed.inject(AssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
