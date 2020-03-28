import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './Tickets.scss';

function Ticket(props) {
  // const { children, value, index, ...other } = props;

  return (
    <div class="cardWrap">
  <div class="card cardLeft">
    <h1>Movie Night <span>#1</span></h1>
    <div class="title">
      <h2>Parasite</h2>
      <span>movie</span>
    </div>
    <div class="name">
      <h2>322 pillin st</h2>
      <span>Location</span>
    </div>
    <div class="seat">
      <h2>ale</h2>
      <span>host</span>
    </div>
    <div class="time">
      <h2>12:00</h2>
      <span>time</span>
    </div>
    
  </div>
  <div class="card cardRight">
    <div class="eye"></div>
    <div class="number">
      <h3>10</h3>
      <span>Votes</span>
    </div>
  </div>

</div>


  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "50px",
    flexGrow: 1,
    display: 'flex',
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Tickets() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class={classes.root}>
      <Ticket></Ticket>
    </div>
  );
}