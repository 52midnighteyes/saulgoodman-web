import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import { PORT } from "./configs/config";

import AuthRoute from "./routes/user.route";
import BlogRoute from "./routes/blog.route";
import RandomPersonRoute from "./routes/random-person.route";

const app = express();
const port = PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());

//end points
app.get("/api", (req: Request, res: Response, next: NextFunction) => {
  console.log("port");
  res.send({
    message: `server running on port ${port}`,
  });
});

app.use("/api/auth", AuthRoute);
app.use("/api/blog", BlogRoute);
app.use("/api/randomperson", RandomPersonRoute);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err); // log detail error ke console

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
