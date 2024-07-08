import AuthGuard from "@/components/auth/form/protect/AuthGuard";
import Grid from "@/components/grid/Grid";
import Loader from "@/components/loader/Loader";
import Search from "@/components/search/Search";
import { MoviesApi } from "@/services/MoviesApi";
import React, { Suspense } from "react";

const { getMovies } = MoviesApi();
const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const searchMovies = await getMovies(searchParams.query);

  return (
    <>
      <AuthGuard>
        <Search />
        <Suspense fallback={<Loader />}>
          <div className="h-full">
            <Grid movies={searchMovies} />
          </div>
        </Suspense>
      </AuthGuard>
    </>
  );
};

export default SearchPage;
