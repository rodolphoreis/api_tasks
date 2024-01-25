import { Request, Response } from "express";
import { findIndexByID } from "../utils";
import { Task } from "../types/index";

let tasks: Task[] = [];
export const read = (req: Request, res: Response) => {
  return res.status(200).json(tasks);
};
export const create = (req: Request, res: Response) => {
  const { text } = req.body;

  const task: Task = {
    id: tasks.length + 1,
    text: req.body.text,
    isCompleted: false,
  };
  tasks.push(task);
  return res.status(201).json();
};
export const update = (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;
  const intID = parseInt(id);

  const index = findIndexByID(tasks, intID);
  if (index === 404) {
    return res.status(404).json("Not Found");
  }
  const payload: Task = {
    id: intID,
    text,
    isCompleted: false,
  };
  tasks[index] = payload;

  return res.status(200).json(tasks[index]);
};
export const updateOneAttribute = (req: Request, res: Response) => {
  const { id } = req.params;
  const { text, isCompleted } = req.body;
  const intID = parseInt(id);

  const index = findIndexByID(tasks, intID);
  if (index === 404) {
    return res.status(404).json("Not Found");
  }

  const payload: Task = {
    id: intID || tasks[index].id,
    text: text || tasks[index].text,
    isCompleted: isCompleted || tasks[index].isCompleted,
  };
  tasks[index] = payload;
  return res.status(200).json(tasks[index]);
};
export const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  const intID = parseInt(id);

  const index = findIndexByID(tasks, intID);
  if (index === 404) {
    return res.status(404).json("Not Found");
  }

  tasks.splice(index, 1);
  return res.sendStatus(204);
};
