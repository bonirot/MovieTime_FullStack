import MovieForm from "@/components/movieForm";
import React from "react";
import "./form.css";

export default function Form() {
  return (
    <>
      <h2 className="formTitle">Missing movies?</h2>
      <MovieForm />
    </>
  );
}
