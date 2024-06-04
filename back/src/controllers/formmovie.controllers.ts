import { Request, Response } from "express";
import prisma from "../db/client";

export const createFormMovie = async (req: Request, res: Response) => {
  const { title, poster_image, score, sinopsis } = req.body;
  const userId = parseInt(req.params.userId);

  try {
    const newFormMovie = await prisma.movie.create({
      data: { title, poster_image, score: parseInt(score), sinopsis, userId },
    });
    res.status(201).send({
      msg: "Form movie created successfully",
      data: newFormMovie,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
