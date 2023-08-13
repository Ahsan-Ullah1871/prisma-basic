import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

// post
const create_user = async (data: User): Promise<Partial<User>> => {
	const response = await prisma.user.create({ data });
	return response;
};

// get
const get_user = async (): Promise<Array<Partial<User>>> => {
	const response = await prisma.user.findMany();
	return response;
};
const get_user_details = async (id: number): Promise<Partial<User> | null> => {
	const response = await prisma.user.findUnique({
		where: {
			id,
		},
		include: {
			profile: true,
		},
	});
	return response;
};

export const userService = {
	create_user,
	get_user,
	get_user_details,
};

