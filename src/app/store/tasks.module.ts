import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { CreateTaskComponent } from "./../components/create-task/create-task.component";
import { TasksService } from "./../services/tasks/tasks.service";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TasksService],
})
export class TasksModule {}
