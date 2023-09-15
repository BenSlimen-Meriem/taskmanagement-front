import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskListComponent } from './view-task-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TaskListService } from '../services/task-list.service';

describe('ViewTaskListComponent', () => {
  let component: ViewTaskListComponent;
  let fixture: ComponentFixture<ViewTaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTaskListComponent],
      imports: [ FormsModule],
      providers: [
        { provide: TaskListService, useValue: TaskListService }
      ]
    });
    fixture = TestBed.createComponent(ViewTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
