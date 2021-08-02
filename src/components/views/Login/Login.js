import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => (
  <div className={styles.component}>
    <Paper >
      <h2> Please Log In: </h2>
      <form autoComplete="off">
        <TextField className={styles.input} type="text" id="standard-basic" label="Login" />
        <TextField className={styles.input} type="password" id="standard-basic" label="Password" />
        <Button className={styles.button} variant="contained" color="primary" href={process.env.PUBLIC_URL}>
          Log In
        </Button>
      </form>
    </Paper>

  </div>
);

export default Login;
