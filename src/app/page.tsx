"use server"
import img from "@/assets/background.jpg";
import Card from "@/components/card/Card";
import { MovieDetails } from "@/models/Movie";
import { MoviesApi } from "@/services/MoviesApi";
import Image from "next/image";
import Link from "next/link";
const {getNewMovies} = MoviesApi()
export default async function Home() {
  const newMovies = await getNewMovies() as any;
  
  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-between max-md:flex-wrap">
        <h1 className="text-2xl text-center font-semibold uppercase py-10 text-gray-600">
          Application Movie Recommendation
          <div className="pt-10">
          <Link href={"/auth/register"} className="bg-indigo-900 text-white px-10 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 mt-10">Register now!</Link>
          </div>
        </h1>
        <div>
          <Image className="w-fullh-10/12 overflow-hidden object-cover" src={img} alt="Movie" />
        </div>
      </div>
      <h1 className="text-3xl text-center font-semibold uppercase py-10 text-slate-600">New Movies</h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {newMovies.slice(0,4)?.map((movie: MovieDetails) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
