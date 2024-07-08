"use server";
import AuthGuard from "@/components/auth/form/protect/AuthGuard";
import Bookmarks from "@/components/bookmarks/Bookmarks";

const BookmarksPage = () => {
  return (
    <AuthGuard>
      <div className="h-full">
        <h1 className="text-3xl text-slate-600 text-center uppercase font-semibold">
          List Bookmarks
        </h1>
        <Bookmarks />
      </div>
    </AuthGuard>
  );
};

export default BookmarksPage;
