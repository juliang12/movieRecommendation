"use client";
import { Movie, MovieDetails } from "@/models/Movie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  movie: MovieDetails;
}

const Card = ({ movie }: CardProps) => {

  return (
    <div className="rounded-lg mt-10 w-[250px] flex flex-col overflow-hidden py-20 h-[250px] lg-flex-row items-center justify-center relative bg-slate-900">
      <h1 className="z-10 text-lg uppercase bg-black px-5 absolute bottom-0 left-0 text-white">
        {movie.title}
      </h1>
      <Link href={`/movie/${movie.id}`}>
        <Image
          className="hover:scale-105 transition-transform duration-500"
          width={250}
          height={250}
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.posterPath}`}
          alt=""
          priority
        />
      </Link>
    </div>
  );
};

export default Card;
