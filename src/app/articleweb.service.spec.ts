import { TestBed } from '@angular/core/testing';

import { ArticlewebService } from './articleweb.service';

describe('ArticlewebService', () => {
  let service: ArticlewebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlewebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
