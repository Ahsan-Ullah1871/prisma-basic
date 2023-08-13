import express from "express";
import { UserRoute } from "./module/user/user.routes";
import { ProfileRoute } from "./module/profile/profile.routes";
import { CategoryRoutes as CategoryRoute } from "./module/category/category.routes";
import { PostRoute } from "./module/post/post.routes";

const router = express.Router();

const all_routes = [
	{ path: "/user", router: UserRoute },
	{ path: "/profile", router: ProfileRoute },
	{ path: "/category", router: CategoryRoute },
	{ path: "/post", router: PostRoute },
];

all_routes.map((item) => router.use(item.path, item.router));

export default router;

