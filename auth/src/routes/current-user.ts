import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/users/current-user", (req, res) => {
  if (!req.session?.jwt) {
    console.log("jwt not found");
    return res.send({ currentUser: null });
  }
  try {
    const payload = jwt.verify(req.session?.jwt, process.env.JWT_KEY!);
    res.send({ currentUser: payload });
  } catch (err) {
    console.log(err);
    return res.send({ currentUser: null });
  }
});

export { router as currentUserRouter };
