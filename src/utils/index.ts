import { Task } from "../types";

export function findIndexByID(tasks: Task[], id: number): number {
  const index = tasks.findIndex((task) => {
    return task.id === id;
  });
  if (index === -1) {
    return 404;
  }
  return index;
}
