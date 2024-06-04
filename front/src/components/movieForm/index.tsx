"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./movieForm.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { movieSchema } from "@/validations/movieSchema";
import { SubmitMovie } from "@/app/utils/functions";
import toast, { Toaster } from "react-hot-toast";

type formValues = {
  title: string;
  poster_image: string;
  score: string;
  sinopsis: string;
};

export default function MovieForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formValues>({
    resolver: zodResolver(movieSchema),
  });

  const onSubmit: SubmitHandler<formValues> = async (data) => {
    console.log(data);

    const movieSubmited = await SubmitMovie(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="title"
        placeholder="Movie title"
        {...register("title", { required: true })}
      />
      {errors.title?.message && <span>{errors.title?.message}</span>}
      <input
        type="text"
        id="poster_image"
        placeholder="Poster Image"
        {...register("poster_image", { required: true })}
      />
      {errors.poster_image?.message && (
        <span>{errors.poster_image?.message}</span>
      )}
      <input
        type="number"
        id="score"
        placeholder="Score"
        {...register("score", { required: true })}
      />
      <textarea
        id="sinopsis"
        placeholder="Sinopsis"
        {...register("sinopsis", { required: true })}
      />
      {errors.score?.message && <span>{errors.score?.message}</span>}
      <button
        onClick={() => {
          toast("🎉 Movie added successfully!");
        }}
      >
        Upload
      </button>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </form>
  );
}
