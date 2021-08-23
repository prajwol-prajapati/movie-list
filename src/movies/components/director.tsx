import React from 'react';

import { DirectorInterface } from 'movies/movies.type';

interface DirectorPropsInterface {
  directorInfo: DirectorInterface
}

const Director = ({ directorInfo }: DirectorPropsInterface): JSX.Element => {
  const { name, image, details } = directorInfo;
  return (
    <>
      <div className="director-name-container"><h2 className="director-name">{name}</h2></div>
      <div className="break"></div>
      <div className="director-image-container"><img src={image} className="director-image" alt={name} /></div>
      <div className="break"></div>
      <div className="director-detail-container"><span className="director-detail">{details}</span></div>
    </>
  )
}

export default Director;