import { IMovie } from "@/interfaces/movie";
import "./movieCard.css";
import Link from "next/link";

export function MovieCard(props: IMovie) {
  return (
    <>
      <Link href={String(props.id)}>
        <div key={props.id} className="card">
          <div className="card-inner">
            <div className="card-front">
              <img className="imagePoster" src={props.poster_image} />

              {/* FRONT SIDE */}
            </div>
            <div className="card-back">
              <p>{props.title}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
