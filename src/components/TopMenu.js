import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Movie';
import { MenuItem } from '@material-ui/core';

import './TopMenu.scss';

const useStyles = makeStyles(theme => ({
  // appBar: {
  //   width: `100%`,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className="appBar">
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'>
          
          <MenuIcon color='secondary' />
        </IconButton>
        
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Movie Night
          </Typography>
        </MenuItem>
        {/* <MenuItem>
          <Typography variant='h6' className={classes.title}>
            About
          </Typography>
        </MenuItem> */}
      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;