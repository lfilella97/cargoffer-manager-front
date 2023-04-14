import { createFeature, createReducer, on } from "@ngrx/store";
import { type Task } from "src/app/tasks.model";
import { updateTasks, deleteTasks, loadTasks } from "../actions/tasks.actions";

const initialState: Task[] = [
  { category: "", description: "", dueDate: "", title: "" },
];

export const tasksFeature = createFeature({
  name: "tasks",
  reducer: createReducer(
    initialState,
    on(loadTasks, (state, { tasks }): Task[] => tasks),
    on(deleteTasks, (state, taskId): Task[] =>
      state.filter((stateTask) => stateTask._id !== taskId.idTask)
    ),
    on(updateTasks, (state, task): Task[] => [
      ...state.map((stateTask) =>
        stateTask._id === task.task._id ? task.task : stateTask
      ),
    ])
  ),
});

export const { name, reducer, selectTasksState } = tasksFeature;
