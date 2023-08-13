import { Request, Response, response } from "express";
import { categoryService } from "./category.service";

export const createCategory = async (req: Request, res: Response) => {
	try {
		const result = await categoryService.create_category(req.body);
		res.send({
			status: "OK",
			message: "category",
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
export const getCategories = async (req: Request, res: Response) => {
	try {
		const result = await categoryService.get_categories();
		res.send({
			status: "OK",
			message: "Categories",
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

export const categoryController = {
	createCategory,
	getCategories,
};

