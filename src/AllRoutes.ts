import express from "express";
import { UserRoute } from "./module/user/user.routes";
import { ProfileRoute } from "./module/profile/profile.routes";

const router = express.Router();

const all_routes = [
	{ path: "/user", router: UserRoute },
	{ path: "/profile", router: ProfileRoute },
];

all_routes.map((item) => router.use(item.path, item.router));

export default router;

