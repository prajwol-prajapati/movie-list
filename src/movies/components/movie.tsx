import React, { useState } from 'react';

import { MovieInterface } from "movies/movies.type";

interface MoviePropsInterface {
  movieInfo?: MovieInterface
}

const Movie: React.FC<MoviePropsInterface> = ({ movieInfo }): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  return <div className={`movie-container ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
    <div className="movie-poster-container">
      <img src={movieInfo?.poster} alt={movieInfo?.title} className="movie-poster" />
    </div>
    <div className="movie-info-container">
      <span className="movie-title">{movieInfo?.title}</span>
      <span className="movie-genre">{movieInfo?.genre}</span>
      <span className="movie-director">{movieInfo?.director.name}</span>
    </div>
    <div className="break"></div>
    <div className="movie-description-container">
      <span className="movie-description">{movieInfo?.description}</span>
      <button className="btn-primary add-to-favorite">ADD TO FAVORITE</button>
    </div>
  </div>
}

export default Movie;