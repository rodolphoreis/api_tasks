import express from "express";
import { taskRouter } from "./routes/task-routes";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
