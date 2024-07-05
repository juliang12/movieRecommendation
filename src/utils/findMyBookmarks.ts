import { AuthForm } from "@/models/Auth";

export const findMyBookmarks = (currentUser: AuthForm, movieId: string) => {
    return currentUser?.bookmarks?.find((movies) => movies.id === movieId)
}