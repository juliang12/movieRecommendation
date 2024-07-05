"use client";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import { RootState } from "@/store/store";
import useGetSearchData from "@/hooks/useSearch";
import Loader from "../loader/Loader";

const Grid = () => {
  const state = useSelector((state: RootState) => state.movies);
  const { loading } = useGetSearchData();

  if (loading)
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
    
  return (
    <div className="w-full h-full flex flex-wrap gap-5 justify-center">
      {state?.length > 0 ? (
        state?.map((movie: any) => <Card key={movie.id} movie={movie} />)
      ) : (
        <div className="pt-20 h-screen">
          <h1 className="text-white text-3xl text-center">No results</h1>
          <p className="text-indigo-900 text-center">perform a search</p>
        </div>
      )}
    </div>
  );
};

export default Grid;
