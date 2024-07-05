"use client";
import useGetSearchData from "@/hooks/useSearch";

const Search = () => {
 const { value, setValue, handleSearchMovies } = useGetSearchData()

  return (
    <form
      className="w-full flex justity-center items-center px-10"
      onSubmit={(e) => handleSearchMovies(e)}
    >
      <input
        className="w-full p-4"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="search..."
      />
      <button type="submit" className="w-[200px] p-4 bg-indigo-800 text-white">
        Search
      </button>
    </form>
  );
};

export default Search;
