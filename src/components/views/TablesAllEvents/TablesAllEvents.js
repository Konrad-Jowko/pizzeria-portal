import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './TablesAllEvents.module.scss';

const TablesAllEvents = () => (
  <div className={styles.component}>
    <Link to={process.env.PUBLIC_URL + '/tables/events/new'}> New Event </Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/:id'}> Existing Event </Link>
    <h2> TablesAllEvents view </h2>
  </div>
);

export default TablesAllEvents;
