import React from 'react';
//import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';

const url = '' + window.location.href + '';
const url2 = 'http://localhost:3000' + `${process.env.PUBLIC_URL}/panel/tables/booking/`;

console.log(url2);
const id = url.replace(url2, '');

const TablesBooking = () => (
  <div className={styles.component}>
    <h2> TablesBooking view </h2>
    {id}
  </div>
);

export default TablesBooking;
