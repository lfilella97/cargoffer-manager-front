import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { tasksFeature } from "./reducers/tasks.reducer";
import { TasksService } from "./../services/tasks/tasks.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(tasksFeature),
  ],
  providers: [TasksService],
})
export class TasksModule {}
