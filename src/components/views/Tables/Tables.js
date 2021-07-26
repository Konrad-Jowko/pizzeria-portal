import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}> New Order </Link>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/:id'}> Existing Order </Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events'}> Events </Link>
    <h2> Tables view </h2>
  </div>
);

export default Tables;
