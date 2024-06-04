import { Request, Response } from "express";
import prisma from "../db/client";
import { deleteImage, uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";

export const createMovie = async (req: Request, res: Response) => {
  const { title, score, genre, sinopsis } = req.body;
  const userId = parseInt(req.params.userId);
  const poster_image = req.files?.poster_image;
  console.log(poster_image);
  console.log(req.files);

  if (!title || !poster_image) {
    return res
      .status(400)
      .send({ message: "The fields title and image are required" });
  }
  if (!userId) {
    return res.status(400).send({ message: "The fields userId is required" });
  }
  try {
    if (Array.isArray(poster_image)) {
      return res.status(400).json({
        msg: "You can only upload one file per movie.",
      });
    } else {
      const resultPoster = await uploadImage(poster_image.tempFilePath);
      const newMovie = await prisma.$transaction(async (prisma) => {
        const createNewMovie = await prisma.movie.create({
          data: {
            title: title,
            score: parseInt(score),
            sinopsis: sinopsis,
            userId: userId,
            poster_image: resultPoster.secure_url,
            poster_image_url: resultPoster.public_id,
          },
        });
        await fs.unlink(poster_image.tempFilePath);
        if (genre && genre.length) {
          const createGenre = genre.map((genreId: string) => ({
            movieId: createNewMovie.id,
            genreId: parseInt(genreId),
          }));
          await prisma.movieGenre.createMany({
            data: createGenre,
          });
        }
        return prisma.movie.findUnique({
          where: {
            id: createNewMovie.id,
          },
          include: {
            genre: true,
          },
        });
      });
      res
        .status(201)
        .send({ msg: "Movie created successfully", data: newMovie });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const allMovies = await prisma.movie.findMany({ include: { genre: true } });
    res.status(201).send(allMovies);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getOneMovie = async (req: Request, res: Response) => {
  const movieId = parseInt(req.params.movieId);
  try {
    const oneMovie = await prisma.movie.findUnique({
      where: { id: movieId },
      include: { genre: true },
    });
    res.status(201).send(oneMovie);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateMovies = async (req: Request, res: Response) => {
  const { title, score, genre, sinopsis } = req.body;
  const poster_image = req.files?.poster_image;
  const movieId = parseInt(req.params.movieId);

  try {
    if (poster_image) {
      if (Array.isArray(poster_image)) {
        return res.status(400).send("Error Array from Update");
      } else {
        const currentMovie = await prisma.movie.findUnique({
          where: { id: movieId },
        });

        if (currentMovie && currentMovie.poster_image_url) {
          await deleteImage(currentMovie.poster_image_url);
        }

        const resultPoster = await uploadImage(poster_image.tempFilePath);
        const movie = await prisma.movie.update({
          where: { id: movieId },
          data: {
            poster_image: resultPoster.secure_url,
            poster_image_url: resultPoster.public_id,
          },
        });
        await fs.unlink(poster_image.tempFilePath);
      }
    }
    const newUpdate = await prisma.$transaction(async (prisma) => {
      const updatedMovie = await prisma.movie.update({
        where: { id: movieId },
        data: {
          title: title,
          score: parseInt(score),
          sinopsis: sinopsis,
          genre: genre,
        },
      });
      if (genre && genre.length) {
        const createGenre = genre.map((genreId: string) => ({
          movieId: movieId,
          genreId: parseInt(genreId),
        }));
        await prisma.movieGenre.deleteMany({
          where: { movieId: movieId },
        });

        await prisma.movieGenre.createMany({
          data: createGenre,
        });
      }
      return prisma.movie.findUnique({
        where: {
          id: updatedMovie.id,
        },
        include: {
          genre: true,
        },
      });
    });
    res
      .status(201)
      .send({ msg: "Movie updated successfully", data: newUpdate });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const movieId = parseInt(req.params.movieId);
  try {
    const movie = await prisma.movie.findUnique({
      where: { id: movieId },
    });
    const movieDeleted = await prisma.movie.delete({
      where: { id: movieId },
    });

    if (movie?.poster_image) {
      await deleteImage(movie.poster_image_url);
    }
    return res.status(200).send(movieDeleted);
  } catch (error) {
    res.status(400).send(error);
  }
};
