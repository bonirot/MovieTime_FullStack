import { Router } from "express";
import {
  updateUser,
  createUser,
  deleteUser,
  getAllUsers,
} from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.get("/", getAllUsers);
userRoutes.patch("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);

export default userRoutes;
