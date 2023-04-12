import { Component } from "@angular/core";
import { Inject } from "@angular/core";
import { TasksService } from "src/app/services/tasks/tasks.service";
import { type Task } from "src/app/tasks.model";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(
    @Inject(TasksService) private readonly tasksService: TasksService
  ) {}

  getTasks() {
    return this.tasksService.getTasks().subscribe({
      next: (allTasks) => {
        this.tasks = allTasks;
      },
    });
  }

  ngOnInit() {
    this.getTasks();
  }
}
