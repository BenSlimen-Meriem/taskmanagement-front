import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/v1/task';
  constructor(private http: HttpClient) { }

  /*createTask(task: any) {
    return this.http.post(this.apiUrl, task);
  }*/

  public createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/create`, task);
  }

}
