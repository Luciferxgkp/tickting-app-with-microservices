import express from "express";

const router = express.Router();

router.post("/users/signout", (req, res) => {
  res.send("Signout");
});

export { router as signoutRouter };
