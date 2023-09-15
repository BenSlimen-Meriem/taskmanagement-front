import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListTask } from '../models/list-task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private apiUrl = 'http://localhost:8080/api/v1/list';

  constructor(private http: HttpClient) {}

  /*createTaskList(taskList: any) {
    return this.http.post('this.apiUrl/create', taskList);
  }*/
  public createTaskList(listTask: ListTask): Observable<ListTask> {
    return this.http.post<ListTask>(`${this.apiUrl}/create`, listTask);
  }


  public findTaskListById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/findById/${id}`);
  }
}
