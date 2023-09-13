import { Component } from '@angular/core';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-create-task-list',
  templateUrl: './create-task-list.component.html',
  styleUrls: ['./create-task-list.component.css']
})
export class CreateTaskListComponent {

  listName: string = '';
  taskDescription: string = '';
  tasks: string[] = [];

  constructor(private taskListService: TaskListService) {}

  addTask() {
    if (this.taskDescription) {
      this.tasks.push(this.taskDescription);
      this.taskDescription = '';
    }
  }

  saveTaskList() {
    const taskList = {
      name: this.listName,
      tasks: this.tasks
    };
    this.taskListService.createTaskList(taskList).subscribe((response: any) => {
      const uniqueId = response.id;
      // Rediriger vers la page d'accueil ou afficher un message de succès.
    });
  }

}
