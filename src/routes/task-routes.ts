import {
  create,
  read,
  remove,
  update,
  updateOneAttribute,
} from "../service/task-service";
import express from "express";

const taskRouter = express.Router();
taskRouter.get("/task", read);

taskRouter.post("/task", create);

taskRouter.put("/task/:id", update);

taskRouter.patch("/task/:id", updateOneAttribute);

taskRouter.delete("/task/:id", remove);

export { taskRouter };
