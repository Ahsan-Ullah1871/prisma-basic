import { Request, Response, response } from "express";
import { postService } from "./post.service";

export const createPost = async (req: Request, res: Response) => {
	try {
		const result = await postService.create_post(req.body);
		res.send({
			status: "OK",
			message: "post",
			result: result,
		});
	} catch (error) {
		res.send({
			status: "error",
			message: "There was an error",
			error: error,
		});
	}
};
export const getAllPosts = async (req: Request, res: Response) => {
	try {
		const result = await postService.get_posts();
		res.send({
			status: "OK",
			message: "all posts",
			result: result,
		});
	} catch (error) {
		res.send({
			status: "error",
			message: "There was an error",
			error: error,
		});
	}
};

export const postController = {
	getAllPosts,
	createPost,
};

