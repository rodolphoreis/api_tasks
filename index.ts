import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
type Task = {
  id: number;
  text: string;
  isCompleted: boolean;
};
let tasks: Task[] = [];
app.get("/task", (req, res) => {
  return res.status(200).json(tasks);
});

app.post("/task", (req: Request, res: Response) => {
  const { text } = req.body;

  const task: Task = {
    id: tasks.length + 1,
    text: req.body.text,
    isCompleted: false,
  };
  tasks.push(task);
  return res.status(201).json();
});

app.put("/task/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;
  const intID = parseInt(id);

  const index = tasks.findIndex((task) => {
    return task.id === intID;
  });

  const payload: Task = {
    id: intID,
    text,
    isCompleted: false,
  };
  tasks[index] = payload;

  return res.status(200).json(tasks[index]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});