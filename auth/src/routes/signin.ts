import express from "express";

const router = express.Router();

router.post("/users/signin", (req, res) => {
  res.send("Signin");
});

export { router as signinRouter };
