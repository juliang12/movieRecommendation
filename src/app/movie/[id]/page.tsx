"use server";
import "animate.css";
import CardDetails from "@/components/cardDetails/CardDetails";
import AuthGuard from "@/components/auth/form/protect/AuthGuard";
import { ToastContainer } from "react-toastify";
import { MoviesApi } from "@/services/MoviesApi";
const { getDetailMovie } = MoviesApi();
const MoviePage = async ({ params: { id } }: { params: { id: string } }) => {
  const movieDetails = (await getDetailMovie(id)) as any;

  return (
    <>
      <AuthGuard>
        <CardDetails movie={movieDetails} />
        <ToastContainer />
      </AuthGuard>
    </>
  );
};

export default MoviePage;
