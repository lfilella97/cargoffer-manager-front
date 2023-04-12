import { createFeature, createReducer, on } from "@ngrx/store";
import { type Task } from "src/app/tasks.model";
import { loadTasks } from "../actions/tasks.actions";

const initialState: Task[] = [];

export const tasksFeature = createFeature({
  name: "tasks",
  reducer: createReducer(
    initialState,
    on(loadTasks, (state, { tasks }): Task[] => tasks)
  ),
});

export const { name, reducer, selectTasksState } = tasksFeature;
