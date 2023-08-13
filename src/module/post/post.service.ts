import { Category, Post, PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

// post
const create_post = async (data: Post): Promise<Partial<Post>> => {
	console.log("====================================");
	console.log(data);
	console.log("====================================");
	let response = await prisma.post.create({
		data,
	});

	return response;
};

// get
const get_posts = async (): Promise<Array<Partial<Category>>> => {
	const response = await prisma.post.findMany();
	return response;
};

export const postService = {
	create_post,
	get_posts,
};

