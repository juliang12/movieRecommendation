import {
  movieAdapterData,
  moviesDetailAdapter,
} from "@/adapters/movie-adapter";
import { api } from "@/config/axios";
import { db } from "@/config/firebase";
import { AuthForm } from "@/models/Auth";
import { MovieDetails } from "@/models/Movie";
import { isAxiosError } from "axios";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

const ref = collection(db, "users");

export const MoviesApi = () => ({
  getMovies: async (value = "") => {
    try {
      const { data } = await api(`/search/movie?query=${value}`);

      return moviesDetailAdapter(data.results);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.message);
      }
    }
  },

  getDetailMovie: async (id: string | string[]) => {
    try {
      const { data } = await api(`/movie/${id}`);
      return movieAdapterData(data);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.message);
      }
    }
  },

  getSimilarMovies: async (id: string | string[]) => {
    try {
      const { data } = await api(`/movie/${id}/similar`);
      return moviesDetailAdapter(data.results);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.message);
      }
    }
  },
  addBookmarks: async (user: AuthForm, movie: MovieDetails) => {
    const ref = doc(db, "users", user.docId);

    const exist = user.bookmarks?.find((movies) => movies.id === movie.id);

    try {
      await updateDoc(ref, {
        bookmarks: exist ? arrayRemove(movie) : arrayUnion(movie),
      });
    } catch (error) {
        throw new Error("Failed to update bookmarks");
    }
  },
  getNewMovies: async () => {
    try {
      const { data } = await api(`/movie/upcoming`);
      return moviesDetailAdapter(data.results);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.message);
      }
    }
  },
});
