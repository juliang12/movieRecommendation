import useGetSimilarMovies from "@/hooks/useGetSimilarMovies";
import Card from "../card/Card";
import Loader from "../loader/Loader";

const ListSimilarCard = () => {
  const { similarMovies, loading } = useGetSimilarMovies();

  if (loading)
    return (
      <div className="w-full flex justify-center">
        <Loader />
      </div>
    );

  return (
    <>
      {similarMovies?.length && (
        <>
          <h1 className="text-slate-700 uppercase text-4xl text-center pt-10">
            Similar Movies
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {similarMovies?.slice(0, 6).map((movie: any) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ListSimilarCard;
