import { Component, Inject } from "@angular/core";
import { FormBuilder, type FormGroup, Validators } from "@angular/forms";
import { TasksService } from "../../services/tasks/tasks.service";
import { type Task } from "src/app/tasks.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-update-task",
  templateUrl: "../create-task/create-task.component.html",
  styleUrls: ["../create-task/create-task.component.scss"],
})
export class UpdateTaskComponent {
  url = "";

  taskForm: FormGroup = this.formBuilder.group({
    category: ["", [Validators.required]],
    description: ["", [Validators.required]],
    dueDate: ["", [Validators.required]],
    title: ["", [Validators.required]],
  });

  constructor(
    @Inject(FormBuilder) private readonly formBuilder: FormBuilder,
    @Inject(TasksService) private readonly tasksService: TasksService,
    @Inject(ActivatedRoute) private readonly route: ActivatedRoute,
    @Inject(Router) private readonly router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.url = params["id"] as string;
    });
    this.tasksService.getTaskById(this.url).subscribe((tasks) => {
      const task = tasks[0];
      this.taskForm = this.formBuilder.group({
        title: [task.title, Validators.required],
        description: [task.description, Validators.required],
        category: [task.category, Validators.required],
        dueDate: [`${task.dueDate.split("T")[0]}`, Validators.required],
      });
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.tasksService
      .updateTask(this.url, this.taskForm.value as Task)
      .subscribe({ next: async () => this.router.navigate(["/"]) })
      .unsubscribe();
  }
}
