import React from 'react';
import styles from './TablesEvents.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';


const dummyData = {
  name: 'Clarice',
  phone: '0079 258 258 785',
  email: '',
  date: '2019-11-11T18:00:00',
  people: '9',
  hours: '9',
  starters: {water: false, hours:false},
};

const TablesBooking = () => (
  <div className={styles.component}>
    <Paper >
      <h2 className={styles.h2}> Event:  </h2>
      <form className = {styles.form} autoComplete="off">
        <Grid
          className={styles.grid}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing="1"
        >
          <h3> Contact Data </h3>
          <TextField className={styles.contact} id="outlined-basic" label="Name" value={dummyData.name} variant="outlined" />
          <TextField className={styles.contact} id="outlined-basic" label="Phone Number" value={dummyData.phone} variant="outlined" />
          <TextField className={styles.contact} id="outlined-basic" label="Email (optional)" value={dummyData.email} variant="outlined" />
        </Grid>
        <Grid
          className={styles.grid}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing="1"
        >
          <h3> Time </h3>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date"
              format="MM/dd/yyyy"
              value={dummyData.date}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time"
              value={dummyData.date}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </MuiPickersUtilsProvider>
          <h3> Event details </h3>
          <TextField className={styles.contact} id="outlined-basic" type="number"  label="People" value={dummyData.people} variant="outlined" />
          <TextField className={styles.contact} id="outlined-basic" type="number" label="Hours" value={dummyData.hours} variant="outlined" />
          <div>

            <h5> Starters </h5>
            <FormControlLabel
              control={
                <Checkbox
                  name="Water"
                  color="primary"

                />
              }
              label="Water"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Bread"
                  color="primary"
                />
              }
              label="Bread"
            />
          </div>
          <Button className={styles.button} variant="contained" color="primary" type="submit"> Submit </Button>
        </Grid>
      </form>
    </Paper>

  </div>
);

export default TablesBooking;
