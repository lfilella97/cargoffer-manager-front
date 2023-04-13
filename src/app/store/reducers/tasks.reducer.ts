import { createFeature, createReducer, on } from "@ngrx/store";
import { type Task } from "src/app/tasks.model";
import { deleteTasks, loadTasks } from "../actions/tasks.actions";

const initialState: Task[] = [];

export const tasksFeature = createFeature({
  name: "tasks",
  reducer: createReducer(
    initialState,
    on(loadTasks, (state, { tasks }): Task[] => tasks),
    on(deleteTasks, (state, taskId): Task[] =>
      state.filter((stateTask) => stateTask._id !== taskId.idTask)
    )
  ),
});

export const { name, reducer, selectTasksState } = tasksFeature;
