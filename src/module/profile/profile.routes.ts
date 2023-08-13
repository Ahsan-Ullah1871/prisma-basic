import express from "express";
import { profileController } from "./profile.controller";

const router = express.Router();

router.get("/", profileController.getProfiles);
router.get("/:user_id", profileController.getUserProfile);
router.post("/create_update", profileController.createUpdateProfile);

export const ProfileRoute = router;

