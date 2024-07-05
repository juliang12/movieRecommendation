import { MovieDetails, MovieDetailsDto } from "@/models/Movie"

interface Props {
    movie: MovieDetailsDto
}

export const movieAdapterData = (movie: MovieDetailsDto) => {
    return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        posterPath: movie.poster_path,
        voteAverage: movie.vote_average,
        genders: movie?.genres.map((genre) => genre.name).join(", "),
        releaseDate: movie.release_date
    }
}

export const moviesDetailAdapter = (movie: MovieDetailsDto[]) => {
    const data = movie.map((movies) => ({
       id: movies.id,
       title: movies.title,
       overview: movies.overview,
       posterPath: movies.poster_path,
       voteAverage: movies.vote_average,
       releaseDate: movies.release_date
    }))
    return data
    
}
      