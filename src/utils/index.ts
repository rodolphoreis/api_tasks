export function findIndexByID(tasks: Task[], id: number): number {
  const index = tasks.findIndex((task) => {
    return task.id === id;
  });
  return index;
}
