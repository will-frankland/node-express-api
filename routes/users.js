import express from "express";
import { createUser, getUser, getUserbyId, deleteUser, editUserDetails } from "../controllers/users.js";

const router = express.Router();

// Get all users
router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", getUserbyId);

router.delete("/:id", deleteUser);

router.patch("/:id", editUserDetails);

export default router;
