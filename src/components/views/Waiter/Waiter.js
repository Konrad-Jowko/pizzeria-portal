import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <Link to={process.env.PUBLIC_URL + '/waiter/order/new'}> New Order </Link>
    <Link to={process.env.PUBLIC_URL + '/waiter/order/:id'}> Existing Order </Link>
    <h2> Waiter view </h2>
  </div>
);

export default Waiter;
