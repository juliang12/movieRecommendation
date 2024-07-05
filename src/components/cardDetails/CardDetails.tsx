import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Icon from "@/assets/back.svg";
import { MovieDetails } from "@/models/Movie";
import ListSimilarCard from "../ListSimilarCard/ListSimilarCard";
import { MoviesApi } from "@/services/MoviesApi";
import { toast } from "react-toastify";
import { AuthForm } from "@/models/Auth";
import { findMyBookmarks } from "@/utils/findMyBookmarks";

interface Movies {
  movie: MovieDetails;
  user: AuthForm;
}
const { addBookmarks } = MoviesApi();

const CardDetails = ({ user, movie }: Movies) => {
  const router = useRouter();
  if (!movie) return null;

  const handleAddBookmark = async () => {
    try {
      await addBookmarks(user, movie);
      toast.success("added to bookmarks");
    } catch (error) {
      toast.error("Error adding to bookmarks");
    }
  };
  const findBookrmarks = findMyBookmarks(user, movie.id);

  return (
    <>
      <div
        onClick={() => router.back()}
        className="w-10 h-10 flex items-center justify-center bg-gray-600 rounded-lg mb-5 cursor-pointer"
      >
        <Image width={30} height={30} src={Icon} alt="" />
      </div>
      <div className="h-full flex gap-5 items-center bg-slate-800 p-5 max-md:flex-wrap">
        <div className="flex flex-col gap-5">
        <button
          onClick={handleAddBookmark}
          className={`border-2  ${findBookrmarks ? "bg-indigo-800 text-white" : "bg-transparent border-indigo-800 text-indigo-800"}  hover:bg-indigo-800 hover:text-white font-bold py-2 px-4 rounded`}
        >
          Bookmark
        </button>
        <Image
          className="animate__animated animate__bounceInLeft"
          alt="movie"
          width={300}
          height={500}
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie?.posterPath}`}
        />
        </div>
       
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-bold text-white text-center">
            {movie.title}
          </h1>
          <p className="text-white">
            <b>Release date:</b> {movie.releaseDate}
          </p>
          <p className="text-white">{movie?.overview}</p>
          <p className="text-white">{movie.genders}</p>
          <p className="text-white bg-indigo-800 p-5 rounded-lg">
            <b>Vote Average:</b> {movie?.voteAverage}
          </p>
        </div>
      </div>
      <ListSimilarCard />
    </>
  );
};

export default CardDetails;
