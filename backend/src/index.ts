import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import { PORT } from "./configs/config";

const app = express();
const port = PORT || 8000;

app.get("/api", (req: Request, res: Response, next: NextFunction) => {
  console.log("port");
  res.send({
    message: "yuhu",
  });
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
