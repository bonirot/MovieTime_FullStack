export interface IMovie {
  id: number;
  title: string;
  poster_image: string;
  score: number;
  sinopsis: string;
  genre: MovieGenre[];
}

export interface MovieGenre {
  movieId: number;
  genreId: number;
}

export interface Genre {
  id: number;
  name: string;
  movieId: number;
  genreId: number;
}
