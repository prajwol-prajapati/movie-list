import { MovieInterface } from "movies/movies.type"

import React from 'react';

interface MoviePropsInterface {
  movieInfo?: MovieInterface
}

const Movie: React.FC<MoviePropsInterface> = ({ movieInfo }): JSX.Element => {
  return <div className="movie-container">
    {movieInfo?.title}
  </div>
}

export default Movie;