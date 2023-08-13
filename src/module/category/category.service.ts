import { Category, PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

// post or update
const create_category = async (data: Category): Promise<Partial<Category>> => {
	let response = await prisma.category.create({
		data,
	});

	return response;
};

// get
const get_categories = async (): Promise<Array<Partial<Category>>> => {
	const response = await prisma.category.findMany();
	return response;
};

export const categoryService = {
	create_category,
	get_categories,
};

