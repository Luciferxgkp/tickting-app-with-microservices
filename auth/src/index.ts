import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import mongoose from "mongoose";
import "express-async-errors";

const app = express();
app.use(json());

app.use("/api", currentUserRouter);
app.use("/api", signinRouter);
app.use("/api", signoutRouter);
app.use("/api", signupRouter);
app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");

    app.listen(3000, () => {
      console.log("Auth service is running on PORT : 3000");
    });
  } catch (error) {
    console.error(error);
  }
};

start();
