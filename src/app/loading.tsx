"use server";
import Loader from "@/components/loader/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default loading;
