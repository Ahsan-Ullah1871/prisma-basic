import { Request, Response, response } from "express";
import { userService } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
	try {
		const result = await userService.create_user(req.body);
		res.send({
			status: "OK",
			message: "User created",
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
export const getUser = async (req: Request, res: Response) => {
	try {
		const result = await userService.get_user();
		res.send({
			status: "OK",
			message: "User list   ",
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

export const getSingleUser = async (req: Request, res: Response) => {
	try {
		const result = await userService.get_user_details(
			Number(req.params.id)
		);
		res.send({
			status: "OK",
			message: "User details",
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

export const userController = {
	createUser,
	getUser,
	getSingleUser,
};

