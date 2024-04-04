import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request";

const router = express.Router();

router.post(
  "/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must enter a password!"),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    const { email, password } = req.body;
    res.send({
      email,
      password,
    });
  }
);

export { router as signinRouter };
