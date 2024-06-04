import { IMovie } from "@/interfaces/movie";
import "../../globals.css";
import "./movies.css";
import { MovieCard } from "@/components/movieCard";
import { FMovies } from "../../utils/functions";
import Link from "next/link";

type Props = {};

export default async function Movies({}: Props) {
  try {
    const FetchMovies = await FMovies();

    return (
      <>
        <div className="moviesContainer">
          <div>
            <h1 className="moviesContainer_title">Movies</h1>
          </div>
          <div className="cardsBox">
            {FetchMovies?.map((m: IMovie) => (
              <MovieCard
                key={m.id}
                id={m.id}
                title={m.title}
                poster_image={m.poster_image}
                sinopsis={m.sinopsis}
                score={m.score}
                genre={m.genre}
              />
            ))}
          </div>
          <p className="moviesContainer_formLink">
            <Link href="/form">Missing Movies?</Link>
          </p>
        </div>
      </>
    );
  } catch (error) {
    console.log("error function Movies", error);
  }
}
