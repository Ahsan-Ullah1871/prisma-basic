import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

// post or update
const profile_create_update = async (
	data: Profile
): Promise<Partial<Profile>> => {
	const isProfileExist = await prisma.profile.findUnique({
		where: { user_id: data.user_id },
	});
	let response;
	if (!isProfileExist) {
		response = await prisma.profile.create({
			data,
		});
	} else {
		response = await prisma.profile.update({
			where: {
				user_id: data.user_id,
			},
			data: {
				bio: data.bio,
			},
		});
	}

	return response;
};

// get
const get_profiles = async (): Promise<Array<Partial<Profile>>> => {
	const response = await prisma.profile.findMany();
	return response;
};
const get_user_profile = async (
	user_id: number
): Promise<Partial<Profile> | null> => {
	const response = await prisma.profile.findUnique({
		where: {
			user_id,
		},
	});
	return response;
};

export const profileService = {
	profile_create_update,
	get_profiles,
	get_user_profile,
};

