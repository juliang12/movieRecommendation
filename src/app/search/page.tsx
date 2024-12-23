import AuthGuard from "@/components/auth/form/protect/AuthGuard";
import Grid from "@/components/grid/Grid";
import Search from "@/components/search/Search";
import React from "react";

const SearchPage = () => {
  return (
    <>
    <AuthGuard>
        <Search />
        <div className="h-full">
          <Grid />
        </div>
    </AuthGuard>
    </>
  );
};

export default SearchPage;
