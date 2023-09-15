import { Component } from '@angular/core';
import { TaskListService } from '../services/task-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task-list',
  templateUrl: './view-task-list.component.html',
  styleUrls: ['./view-task-list.component.css']
})
export class ViewTaskListComponent {

  listId!: number;
  taskList: any;

  constructor (private taskListService: TaskListService) {}

  findTaskListById() {
    this.taskListService.findTaskListById(this.listId).subscribe((response: any) => {
      console.log('response = ', response)
      if(response !== null){
        this.taskList = response;
      } else {
        alert('Pas de liste trouvée avec ID ' + this.listId)
      }
      
    });
  }
}
