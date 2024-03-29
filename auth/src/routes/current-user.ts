import express from "express";

const router = express.Router();

router.get("/users/current-user", (req, res) => {
  res.send("Current user");
});

export { router as currentUserRouter };
