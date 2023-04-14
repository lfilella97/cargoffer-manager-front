import { Component, Inject } from "@angular/core";
import { FormBuilder, type FormGroup, Validators } from "@angular/forms";
import { TasksService } from "../../services/tasks/tasks.service";
import { type Task } from "src/app/tasks.model";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.scss"],
})
export class CreateTaskComponent {
  taskForm: FormGroup = this.formBuilder.group({
    category: ["", [Validators.required]],
    description: ["", [Validators.required]],
    dueDate: ["", [Validators.required]],
    title: ["", [Validators.required]],
  });

  constructor(
    @Inject(FormBuilder) private readonly formBuilder: FormBuilder,
    @Inject(TasksService) private readonly tasksService: TasksService,
    @Inject(Router) private readonly router: Router
  ) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required],
      dueDate: ["", Validators.required],
    });
  }

  onSubmit(event: Event) {
    this.tasksService.createTask(this.taskForm.value as Task).subscribe({
      next: async () => this.router.navigate([`/`]),
    });
  }
}
