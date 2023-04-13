import { Component } from "@angular/core";
import { Inject } from "@angular/core";
import { TasksService } from "src/app/services/tasks/tasks.service";
import { type Task } from "src/app/tasks.model";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
  providers: [TasksService],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(
    @Inject(TasksService) private readonly tasksService: TasksService
  ) {}

  getTasks() {
    this.tasksService.getTasks().subscribe({
      next: (allTasks) => {
        this.tasks = allTasks;
      },
    });
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTasksById(task).subscribe({
      next: (allTasks) => {
        this.tasks = allTasks;
      },
    });
  }

  ngOnInit() {
    this.getTasks();
  }
}
