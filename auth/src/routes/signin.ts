import express from "express";

const router = express.Router();

router.post("/users/signin", (req, res) => {
  res.send("Current user");
});

export { router as signinRouter };
