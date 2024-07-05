"use client";
import "animate.css";
import CardDetails from "@/components/cardDetails/CardDetails";
import Loader from "@/components/loader/Loader";
import useGetMovieDetail from "@/hooks/useGetMovieDetail";
import useCurrentUser from "@/hooks/auth/useCurrentUser";
import AuthGuard from "@/components/auth/form/protect/AuthGuard";

const MoviePage = () => {
  const { movieDetails, loading } = useGetMovieDetail();
  const {currentUser} = useCurrentUser()

  return (
    <>
    <AuthGuard>
      {!movieDetails && loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <CardDetails user={currentUser} movie={movieDetails} />
      )}
    </AuthGuard>
    </>
  );
};

export default MoviePage;
