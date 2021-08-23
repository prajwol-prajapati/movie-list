import React, { useState } from 'react';

import movieList from 'movies/movies.json';
import Movie from 'movies/components/movie';
import Modal from 'movies/components/modal';
import Director from 'movies/components/director';
import { DirectorInterface, MovieInterface } from 'movies/movies.type';

const Movies = (): JSX.Element => {
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [director, setDirector] = useState({});

  const movies: MovieInterface[] = movieList || [];

  const addToFavorite = () => {
    setTimeout(() => setAddedToFavorite(true), 1000);
    setTimeout(() => setAddedToFavorite(false), 5000);
  }

  const openDirectorModal = (director: DirectorInterface) => {
    setDirector(director);
    setIsModalOpen(true);
  }

  return (
    <div className="movies-container">
      {
        movies.map((movie) => <React.Fragment key={movie.id}><Movie movieInfo={movie} addToFavorite={addToFavorite} openDirectorModal={openDirectorModal} /></React.Fragment>)
      }
      {addedToFavorite ? <div className="success-message"><i className="fa fa-check" aria-hidden="true"></i> Added To Favorite</div> : null}
      {isModalOpen ? <Modal onClose={() => setIsModalOpen(false)}><Director directorInfo={director} /></Modal> : null}
    </div>
  )
}

export default Movies;