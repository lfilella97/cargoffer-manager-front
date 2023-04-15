import { createAction, props } from "@ngrx/store";
import { type Task } from "src/app/tasks.model";

export const loadTasks = createAction(
  "[Tasks] Load Tasks",
  props<{ tasks: Task[] }>()
);

export const emptyTasks = createAction("[Tasks] Empty Tasks");

export const deleteTasks = createAction(
  "[Tasks] delete Tasks",
  props<{ idTask: string }>()
);

export const updateTasks = createAction(
  "[Tasks] update Tasks",
  props<{ task: Task }>()
);
