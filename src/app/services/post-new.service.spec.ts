import { TestBed } from '@angular/core/testing';

import { PostNewService } from './post-new.service';

describe('PostNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostNewService = TestBed.get(PostNewService);
    expect(service).toBeTruthy();
  });
});
