import { MovieInterface } from "movies/movies.type"

import React from 'react';

interface MoviePropsInterface {
  movieInfo?: MovieInterface
}

const Movie: React.FC<MoviePropsInterface> = ({ movieInfo }): JSX.Element => {
  return <div className="movie-container">
    <div className="movie-poster-container">
      <img src={movieInfo?.poster} alt={movieInfo?.title} className="movie-poster" />
    </div>
    <div className="movie-info-container">
      <span className="movie-title">{movieInfo?.title}</span>
      <span className="movie-genre">{movieInfo?.genre}</span>
      <span className="movie-director">{movieInfo?.director.name}</span>
    </div>
  </div>
}

export default Movie;