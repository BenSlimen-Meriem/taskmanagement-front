import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTaskListComponent } from './create-task-list.component';

import { TaskListService } from '../services/task-list.service';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ListTask } from '../models/list-task';
import { Task } from '../models/task';

describe('CreateTaskListComponent', () => {
  let component: CreateTaskListComponent;
  let fixture: ComponentFixture<CreateTaskListComponent>;
  let taskListService: jasmine.SpyObj<TaskListService>;
  let taskService: jasmine.SpyObj<TaskService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {

    taskListService = jasmine.createSpyObj('TaskListService', ['createTaskList']);
    taskService = jasmine.createSpyObj('TaskService', ['createTask']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [CreateTaskListComponent],
      imports: [ FormsModule],
      providers: [
        { provide: TaskListService, useValue: taskListService },
        { provide: TaskService, useValue: taskService },
        { provide: Router, useValue: router },
      ],

    });
    fixture = TestBed.createComponent(CreateTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', async() => {
 
    const task = new Task();
    task.description = 'Sample Task';
    taskService.createTask.and.returnValue(of(task));

  
    component.task.description = 'Sample Task';
    
    component.ajouttask();
  
    const result = await (component.listtasks.length)
    expect(result).toBe(1);
  });

  it('should create a task list', async() => {
    
    const taskList = new ListTask();
    taskList.name = 'Sample List';
    taskList.id = 1;
    taskList.tasks = [new Task()];
    taskListService.createTaskList.and.returnValue(of(taskList));

 
    component.listtask.name = 'Sample List';
    component.listtasks = [new Task()];
    component.ajouterlist();

    const result=(router.navigate);
    expect(result).toHaveBeenCalledWith(['/']);
  });
});

 