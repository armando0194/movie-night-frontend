import React from 'react';
import MovieBlock from './MovieBlock';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(8),
    },
  }));
  
function MovieRank() {
    const classes = useStyles();
  return(
    <div className={classes.container}>
        <h1>Top Movies</h1>
        <MovieBlock />
        <MovieBlock />
    </div>
  );
}

export default MovieRank;
