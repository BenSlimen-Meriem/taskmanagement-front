import { TestBed } from '@angular/core/testing';

import { TaskListService } from './task-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskListService', () => {
  let service: TaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
