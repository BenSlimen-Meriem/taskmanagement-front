import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private apiUrl = 'http://localhost:8080/api/task-lists';

  constructor(private http: HttpClient) {}

  createTaskList(taskList: any) {
    return this.http.post(this.apiUrl, taskList);
  }

  getTaskListById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  
}
