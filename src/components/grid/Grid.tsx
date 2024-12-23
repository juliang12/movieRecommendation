"use server";
import React from "react";
import { MovieDetails } from "@/models/Movie";
import Card from "../card/Card";

interface GridProps {
  movies: MovieDetails[] | any;
}
const Grid = async ({ movies }: GridProps) => {

  return (
    <div className="w-full h-full flex flex-wrap gap-5 justify-center">
      {movies.length ? (
        movies?.map((movie: MovieDetails) => (
          <Card key={movie.id} movie={movie} />
        ))
      ) : (
        <div className="pt-20 h-screen">
          <h1 className="text-white text-3xl text-center">No results</h1>
          <p className="text-indigo-900 text-center">perform a search</p>
        </div>
      )}
    </div>
  );
};

export default Grid;
