import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
app.use(json());

app.use("/api", currentUserRouter);
app.use("/api", signinRouter);
app.use("/api", signoutRouter);
app.use("/api", signupRouter);

app.listen(3000, () => {
  console.log("Auth service is running on PORT : 3000");
});
