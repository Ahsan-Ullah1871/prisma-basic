import { Request, Response, response } from "express";
import { profileService } from "./profile.service";

export const createUpdateProfile = async (req: Request, res: Response) => {
	try {
		const result = await profileService.profile_create_update(
			req.body
		);
		res.send({
			status: "OK",
			message: "profile",
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
export const getProfiles = async (req: Request, res: Response) => {
	try {
		const result = await profileService.get_profiles();
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

export const getUserProfile = async (req: Request, res: Response) => {
	try {
		const result = await profileService.get_user_profile(
			Number(req.params.user_id)
		);
		res.send({
			status: "OK",
			message: "User profile",
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

export const profileController = {
	createUpdateProfile,
	getProfiles,
	getUserProfile,
};

