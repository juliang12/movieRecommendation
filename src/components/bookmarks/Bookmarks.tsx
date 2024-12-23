"use client";
import React from "react";
import Card from "../card/Card";
import useCurrentUser from "@/hooks/auth/useCurrentUser";
import { MovieDetails } from "@/models/Movie";

const Bookmarks = () => {
  const { currentUser } = useCurrentUser();
  
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {currentUser?.bookmarks?.map((movie: MovieDetails) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Bookmarks;
