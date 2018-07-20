import { inject, TestBed } from '@angular/core/testing';

import { QuestionResolver } from './question-resolver.service';

describe('QuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [QuestionResolver]
    });
  });

    it('should be created', inject([QuestionResolver], (service: QuestionResolver) => {
    expect(service).toBeTruthy();
  }));
});
