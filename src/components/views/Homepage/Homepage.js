import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

const MIN = 0;
const MAX = 250;
const normalise = value => (value - MIN) * 100 / (MAX - MIN);

const statistics = [
  {progress: 120, id: 'Local Orders', color: 'primary'},
  {progress: 210, id: 'Takeout Orders', color: 'secondary'},
];
const reservations = [
  {id: '1', status: 'pending', table: 2, time: '17:00', clients: 2 },
  {id: '2', status: 'pending', table: 1, time: '20:00', clients: 8},
  {id: '3', status: 'in progress', table: 6, time: '13:30', clients: 2},
];
const events = [
  {id: '22', status: 'cancelled', table: 5, time: '16:00', clients: 3},
  {id: '13', status: 'pending', table: 4, time: '14:50', clients: 6},
  {id: '5', status: 'completed', table: 2, time: '11:00', clients: 4},
];

const Homepage = () => (
  <div className={styles.component}>
    <Paper >
      <h2 className={styles.h2}> Orders Today: </h2>
      {statistics.map(stat => (
        <div className={styles.stat} key={stat.id}>
          <h3 className={styles.h3}>{stat.id}</h3>
          <h4 className={styles.h4}>{stat.progress}</h4>
          <LinearProgress className={styles.progressBar} variant="determinate" color={stat.color} value={normalise(stat.progress)} />
        </div>
      ))}
    </Paper>
    <Paper>
      <h2 className={styles.h2}>Reservations today:</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Clients</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.clients}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper>
      <h2 className={styles.h2}>Events today:</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Clients</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.clients}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Homepage;
