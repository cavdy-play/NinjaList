import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      {movies.map(movie => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </>
  );
};

export default MovieList;
