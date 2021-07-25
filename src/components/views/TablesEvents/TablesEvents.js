import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './TablesEvents.module.scss';

const TablesEvents = () => (
  <div className={styles.component}>
    <Link to={process.env.PUBLIC_URL + '/tables/events/new'}> New Event </Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/:id'}> Existing Event </Link>
    <h2> TablesEvents view </h2>
  </div>
);

export default TablesEvents;
