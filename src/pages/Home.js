import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import MovieRank from '../components/MovieRank';
import VerticalTabs from '../components/Tickets'
import Tickets from '../components/Tickets';
// import TopMenu from '../components/TopMenu';
// import SideMenu from '../components/SideMenu';
// import Footer from '../components/Footer';
// import MainContent from '../components/MainContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TopMenu />
        {/* <MovieRank /> */}
        <Tickets />
    </div>
  );
}

export default Home;