import { z } from "zod";

export const movieSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title is required",
    })
    .max(200, {
      message: "Title is too long",
    }),

  poster_image: z
    .string()
    .min(1, {
      message: "Image poster title is too short",
    })
    .max(200, {
      message: "Image poster title is too long",
    }),

  score: z.string().refine((score) => !isNaN(parseFloat(score)), {
    message: "The score is required",
  }),
  sinopsis: z
    .string()
    .min(1, {
      message: "Synopsis is required",
    })
    .max(500, {
      message: "Synopsis is too long",
    }),
});
