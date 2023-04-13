import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { type Task } from "src/app/tasks.model";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  private get tasksUrl() {
    return environment.apiUrl;
  }

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>(`${this.tasksUrl}/tasks`);
  }

  createTask(task: Task) {
    const response = this.http.post<any>(`${this.tasksUrl}/tasks/create`, task);
    return response;
  }
}
