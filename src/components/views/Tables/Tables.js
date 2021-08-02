import React from 'react';
// import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';


const tables = {
  table1: {
    '08:00': 'booked',
    '08:30': 'booked',
    '09:00': 'booked',
    '09:30': 'booked',
    '10:00': 'free',
    '10:30': 'free',
    '11:00': 'free',
    '11:30': 'free',
    '12:00': 'free',
    '12:30': 'free',
    '13:00': 'free',
    '13:30': 'free',
  },
  table2: {
    '08:00': 'free',
    '08:30': 'free',
    '09:00': 'booked',
    '09:30': 'booked',
    '10:00': 'booked',
    '10:30': 'booked',
    '11:00': 'booked',
    '11:30': 'free',
    '12:00': 'free',
    '12:30': 'booked',
    '13:00': 'booked',
    '13:30': 'booked',
  },
  table3: {
    '08:00': 'booked',
    '08:30': 'booked',
    '09:00': 'free',
    '09:30': 'free',
    '10:00': 'free',
    '10:30': 'free',
    '11:00': 'free',
    '11:30': 'free',
    '12:00': 'free',
    '12:30': 'free',
    '13:00': 'booked',
    '13:30': 'booked',
  },
  table4: {
    '08:00': 'booked',
    '08:30': 'booked',
    '09:00': 'booked',
    '09:30': 'booked',
    '10:00': 'booked',
    '10:30': 'booked',
    '11:00': 'booked',
    '11:30': 'booked',
    '12:00': 'booked',
    '12:30': 'booked',
    '13:00': 'booked',
    '13:30': 'booked',
  },
  table5: {
    '08:00': 'event',
    '08:30': 'event',
    '09:00': 'event',
    '09:30': 'event',
    '10:00': 'event',
    '10:30': 'event',
    '11:00': 'event',
    '11:30': 'event',
    '12:00': 'event',
    '12:30': 'event',
    '13:00': 'event',
    '13:30': 'event',
  },
  table6: {
    '08:00': 'booked',
    '08:30': 'free',
    '09:00': 'booked',
    '09:30': 'booked',
    '10:00': 'free',
    '10:30': 'free',
    '11:00': 'free',
    '11:30': 'booked',
    '12:00': 'booked',
    '12:30': 'free',
    '13:00': 'free',
    '13:30': 'free',
  },

};

const hours = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
];

const renderTable = (hour, tables) => {
  const elements = [];

  for (let table in tables) {
    const object = tables[table];
    if (object[hour] === 'booked') {
      elements.push(
        <TableCell>
          <h5 className={styles.h5}>{hour}</h5>
          <h5 className={styles.h5}>Booked</h5>
          <Button className={styles.button} variant="contained" color="primary" href={process.env.PUBLIC_URL + '/tables/booking/:id'}> Change </Button>
        </TableCell>);
    } else if (object[hour] === 'free') {
      elements.push(
        <TableCell>
          <h5 className={styles.h5}>{hour}</h5>
          <h5 className={styles.h5}>Free</h5>
          <Button className={styles.button} variant="contained" href={process.env.PUBLIC_URL + '/tables/booking/new'}> Book </Button>
        </TableCell>);
    } else if (object[hour] === 'event') {
      elements.push(
        <TableCell>
          <h5 className={styles.h5}>{hour}</h5>
          <h5 className={styles.h5}>Event</h5>
          <Button className={styles.button} variant="contained" color='secondary' href={process.env.PUBLIC_URL + '/tables/events/:id'}> Display </Button>
        </TableCell>);
    }
  }
  return elements;
};


const Tables = () => (
  <div className={styles.component}>
    <Paper>
      <h2 className={styles.h2}> Tables status: </h2>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date"
            format="MM/dd/yyyy"
            value={Date.now()}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <div>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Start Time"
              value={Date.now()}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="End Time"
              value={Date.now()}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </div>
        </Grid>
      </MuiPickersUtilsProvider>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hours.map(hour => (
            < TableRow key={hour} >
              {renderTable(hour, tables)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;
