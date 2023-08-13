import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.get("/", userController.getUser);
router.get("/:id", userController.getSingleUser);
router.post("/create", userController.createUser);

export const UserRoute = router;

