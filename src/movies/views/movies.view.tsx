import React from 'react';

import movieList from 'movies/movies.json';
import Movie from 'movies/components/movie';
import { MovieInterface } from 'movies/movies.type';

const Movies = (): JSX.Element => {
  const movies: MovieInterface[] = movieList || [];
  console.log(movies);

  return (
    <div className="movies-container">
      {
        movies.map((movie) => <React.Fragment key={movie.id}><Movie movieInfo={movie} /></React.Fragment>)
      }
    </div>
  )
}

export default Movies;