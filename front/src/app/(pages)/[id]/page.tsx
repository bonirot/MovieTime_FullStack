"use client";
import { Genre, IMovie, MovieGenre } from "@/interfaces/movie";
import "./moviePages.css";
import dotenv from "dotenv";
import { FGenres, FOneMovie } from "@/app/utils/functions";
import { DeleteMovie } from "@/app/utils/functions";

dotenv.config();

type Props = {
  params: { id: string };
};

export default async function MoviesPages({ params }: Props) {
  const id = params?.id;
  const JSONmovies: IMovie = await FOneMovie(id);
  const JSONgenres: Genre[] = await FGenres();
  console.log(JSONgenres);
  const handleDelete = () => {
    const movieDeleted = async () => {
      await DeleteMovie(id);
      window.location.href = "/movies";
    };
    movieDeleted();
  };
  return (
    <>
      <div className="container" key={JSONmovies.id}>
        <img
          className="container_poster"
          alt={JSONmovies.title}
          src={JSONmovies.poster_image}
        />
        <div className="container_text">
          <h2 className="container_title">
            {JSONmovies.title} ⭐ {JSONmovies.score}
          </h2>
          <p className="container_sinopsis">{JSONmovies.sinopsis}</p>
          <div className="container_genres">
            <ul className="list">
              {JSONmovies.genre.map((mg: MovieGenre) => {
                const genreName = JSONgenres.find((g) => {
                  return g.id === mg.genreId;
                });
                return <li key={mg.genreId}>{genreName?.name}</li>;
              })}
            </ul>
            <button className="deleteBtn" onClick={handleDelete}>
              Delete movie
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
