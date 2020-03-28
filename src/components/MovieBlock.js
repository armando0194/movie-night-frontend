import React from 'react';
// import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Button from '@material-ui/core/Button';
// import { movieType, genresObjType } from 'types';
// import { imgSrc } from 'utils';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'

import './MovieBlock.scss';

const MovieBlock = ({ movie, genres }) => {
  // const movieGenres = movie.genre_ids.map((genreId) => (
  //   genres[genreId]
  // ));

  return (
    // <Link to={`/movie/${movie.id}`}>
      <div className="movie-block">
        <div className="flex movie-poster">
          <LazyLoad height={300}>
            <img
              src="https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
              alt="test"
              // alt={movie.title}
              // key={movie.poster_path}
            />
          </LazyLoad>
        </div>
        <div className="vote">
          <b>10</b>
          {/* <b>{movie.vote_average}</b> */}
        </div>
        <h2>Logan</h2>
        <span>Action, Sad</span>
        {/* <br />
        <Button align="center" variant="contained" color="primary">
          Vote!
        </Button> */}
        {/* <h2>{movie.title}</h2> */}
        {/* <span>{movieGenres.join(', ')}</span> */}
      </div>
    // </Link>
  );
};

// MovieBlock.propTypes = {
//   movie: movieType.isRequired,
//   genres: genresObjType.isRequired,
// };

export default MovieBlock;