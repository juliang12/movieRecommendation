import { MoviesApi } from '@/services/MoviesApi';
import { type } from '@/store/actions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const { getMovies } = MoviesApi();

const useGetSearchData = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState("");
  
  
    const handleSearchMovies = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true)
      try {
        const data = await getMovies(value);
        dispatch({ type: type.setMovies, payload: data });
        
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
  
    };
  return { value, setValue, loading, handleSearchMovies }
}

export default useGetSearchData