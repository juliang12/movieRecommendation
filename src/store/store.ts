import { configureStore } from "@reduxjs/toolkit";
import { MoviesReducer } from "./movies/MoviesReducer";
import { AuthReducer } from "./auth/AuthReducer";

export const store = configureStore({
    reducer: {
        movies: MoviesReducer,
        auth: AuthReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch