import { Component, Inject } from "@angular/core";
import { TasksService } from "src/app/services/tasks/tasks.service";
import { type Task } from "src/app/tasks.model";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
  providers: [TasksService],
})
export class TasksComponent {
  category = "";

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

  fiterTasksBy(category: string) {
    this.tasksService.getTasks(category).subscribe({
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
