import { MovieDetails } from "@/models/Movie";
import { MoviesApi } from "@/services/MoviesApi";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const { getDetailMovie } = MoviesApi();
const useGetMovieDetail = () => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | any>([]);
  const params = useParams();
  const id = params.id!;
  
  useEffect(() => {
    setLoading(true);
    getDetailMovie(id)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return {
    movieDetails,
    loading,
  };
};

export default useGetMovieDetail;
