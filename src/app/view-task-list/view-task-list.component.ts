import { Component } from '@angular/core';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-view-task-list',
  templateUrl: './view-task-list.component.html',
  styleUrls: ['./view-task-list.component.css']
})
export class ViewTaskListComponent {

  listId: number = 0;
  taskList: any;

  constructor (private taskListService: TaskListService) {}

  getTaskListById() {
    this.taskListService.getTaskListById(this.listId).subscribe((response: any) => {
      this.taskList = response;
    });
  }
}
