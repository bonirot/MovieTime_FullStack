import dotenv from "dotenv";

dotenv.config();

const UrlLocal: string = process.env.NEXT_PUBLIC_LOCALHOST_URL || "";

export async function FMovies() {
  const data = await fetch(UrlLocal + "/movie");
  const JSONmovies = await data.json();
  return JSONmovies;
}

export async function FOneMovie(id: string) {
  const data = await fetch(UrlLocal + "/movie/" + id);
  const JSONmovies = await data.json();
  return JSONmovies;
}

export async function FGenres() {
  const data = await fetch(UrlLocal + "/genre");
  const JSONgenres = await data.json();
  return JSONgenres.data;
}

export async function SubmitMovie(data: any) {
  const response = await fetch("http://localhost:4000/formmovie/1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

export async function DeleteMovie(id: any) {
  const response = await fetch(UrlLocal + "/movie/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
