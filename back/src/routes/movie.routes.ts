import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getOneMovie,
  updateMovies,
} from "../controllers/movie.controllers";

const movieRoutes = Router();

movieRoutes.post("/:userId", createMovie);
movieRoutes.get("/", getAllMovies);
movieRoutes.get("/:movieId", getOneMovie);
movieRoutes.patch("/:movieId", updateMovies);
movieRoutes.delete("/:movieId", deleteMovie);

export default movieRoutes;
