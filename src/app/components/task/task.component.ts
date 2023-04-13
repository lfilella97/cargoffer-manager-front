import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { TasksService } from "src/app/services/tasks/tasks.service";
import { type Task } from "src/app/tasks.model";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
  providers: [TasksService],
})
export class TaskComponent {
  @Input() task: Task = {
    title: "",
    category: "",
    description: "",
    dueDate: "",
    _id: "",
  };

  @Input()
  index!: number;

  @Output() deleteTasksById = new EventEmitter<Task>();

  constructor(@Inject(Store) private readonly store: Store) {}

  onDelete(task: Task) {
    this.deleteTasksById.emit(task);
  }
}
