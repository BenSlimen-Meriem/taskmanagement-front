import { Component } from '@angular/core';
import { TaskListService } from '../services/task-list.service';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { ListTask } from '../models/list-task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task-list',
  templateUrl: './create-task-list.component.html',
  styleUrls: ['./create-task-list.component.css']
})
export class CreateTaskListComponent {

  listName: string = '';
  taskDescription: string = '';
  listtasks: Task[] = [];
  task: Task = new Task();
  listtask: ListTask = new ListTask();

  constructor(private taskListService: TaskListService,
    private taskService: TaskService,
    private router: Router) {}

 
    ajouttask(): void {
  
      this.taskService.createTask(this.task)
          .subscribe({
            next: (res) => {
              console.log(this.task.description);
              this.listtasks.push(res)
              console.log(this.listtasks);
              this.task.description = '';
            },
          });
       
  }

  ajouterlist() {
    
  this.listtask.tasks=this.listtasks;
  this.taskListService.createTaskList(this.listtask)
          .subscribe({
            next: (res) => {
              console.log(this.listtask);
              alert('ID de la liste ' + res.name  + ' est ' + res.id)
              this.router.navigate(['/'])
            },
          });
        }
}
