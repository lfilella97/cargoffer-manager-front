/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from "@angular/core";
import { type Task } from "src/app/tasks.model";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent {
  @Input() task: Task = {
    title: "",
    category: "",
    description: "",
    due_date: "",
    _id: "",
  };

  @Input()
  index!: number;
}
