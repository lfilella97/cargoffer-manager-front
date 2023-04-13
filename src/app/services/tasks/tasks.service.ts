import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { type Task } from "src/app/tasks.model";
import { Store } from "@ngrx/store";
import { deleteTasks, loadTasks } from "src/app/store/actions/tasks.actions";
import { selectTasksState } from "../../store/reducers/tasks.reducer";
import { type Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class TasksService {
  private get tasksUrl() {
    return environment.apiUrl;
  }

  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
    @Inject(Store) private readonly store: Store
  ) {}

  getTasks(): Observable<Task[]> {
    const response = this.http.get<Task[]>(`${this.tasksUrl}/tasks`);
    response.subscribe({
      next: (tasks) => {
        this.store.dispatch(loadTasks({ tasks }));
      },
    });
    return this.store.select(selectTasksState);
  }

  createTask(task: Task) {
    return this.http.post(`${this.tasksUrl}/tasks/create`, task);
  }

  deleteTasksById(task: Task) {
    const response = this.http.delete(`${this.tasksUrl}/tasks/${task._id!}`);
    response.subscribe({
      next: (data) => {
        this.store.dispatch(deleteTasks({ idTask: task._id! }));
      },
    });
    return this.store.select(selectTasksState);
  }
}
