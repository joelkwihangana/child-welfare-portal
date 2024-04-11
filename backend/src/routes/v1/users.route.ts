import express, { Router } from "express";
import * as controller from "../../controllers/users.controllers";
import validationMiddleware from "../../middlewares/validation.middleware";
import { CreateUserDto } from "../../dtos/users.dto";

const router: Router = express.Router();

router.get("/", controller.getUsers);
router.post(
  "/",
  validationMiddleware(CreateUserDto, "body"),
  controller.createNewUser
);

export default router;
