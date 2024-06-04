import { Router } from "express";

import { createFormMovie } from "../controllers/formmovie.controllers";

const formRoutes = Router();

formRoutes.post("/:userId", createFormMovie);

export default formRoutes;
