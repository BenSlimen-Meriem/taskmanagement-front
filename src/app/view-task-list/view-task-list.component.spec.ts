import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskListComponent } from './view-task-list.component';

describe('ViewTaskListComponent', () => {
  let component: ViewTaskListComponent;
  let fixture: ComponentFixture<ViewTaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTaskListComponent]
    });
    fixture = TestBed.createComponent(ViewTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
