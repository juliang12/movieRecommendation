import { MoviesApi } from "@/services/MoviesApi";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const { getSimilarMovies } = MoviesApi();

const useGetSimilarMovies = () => {
  const [loading, setLoading] = useState(false);
  const [similarMovies, setSimilarMovies] = useState<any>([]);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    getSimilarMovies(params.id)
      .then((data) => setSimilarMovies(data))
      .finally(() => setLoading(false));
  }, [params.id]);

  return {
    similarMovies,
    loading,
  };
};

export default useGetSimilarMovies;
