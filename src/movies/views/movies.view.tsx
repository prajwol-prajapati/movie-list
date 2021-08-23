import React, { useState, useEffect } from 'react';

import movieList from 'movies/movies.json';
import Movie from 'movies/components/movie';
import { MovieInterface } from 'movies/movies.type';


const Movies = (): JSX.Element => {
  const [addedToFavorite, setAddedToFavorite] = useState(false);

  const addToFavorite = () => {
    setTimeout(() => setAddedToFavorite(true), 1000);
    setTimeout(() => setAddedToFavorite(false), 5000);
  }

  const movies: MovieInterface[] = movieList || [];

  return (
    <div className="movies-container">
      {
        movies.map((movie) => <React.Fragment key={movie.id}><Movie movieInfo={movie} addToFavorite={addToFavorite} /></React.Fragment>)
      }
      {addedToFavorite ? <div className="success-message"><i className="fa fa-check" aria-hidden="true"></i> Added To Favourite</div> : null}
    </div>
  )
}

export default Movies;