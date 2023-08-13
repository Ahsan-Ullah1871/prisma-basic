import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.get("/", postController.getAllPosts);
router.post("/create", postController.createPost);

export const PostRoute = router;

