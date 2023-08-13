import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.get("/", categoryController.getCategories);
router.post("/create", categoryController.createCategory);

export const CategoryRoutes = router;

