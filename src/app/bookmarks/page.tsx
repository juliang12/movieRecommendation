"use client";
import AuthGuard from "@/components/auth/form/protect/AuthGuard";
import Card from "@/components/card/Card";
import useCurrentUser from "@/hooks/auth/useCurrentUser";
import { MovieDetails } from "@/models/Movie";
import { ToastContainer } from "react-toastify";

const BookmarksPage = () => {
  const { currentUser } = useCurrentUser();

  return (
    <AuthGuard>
      <div className="h-full">
        <h1 className="text-3xl text-slate-600 text-center uppercase font-semibold">
          List Bookmarks
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {currentUser?.bookmarks?.map((movie: MovieDetails) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </AuthGuard>
  );
};

export default BookmarksPage;
