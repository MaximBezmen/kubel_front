import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RegistrationForm from '../RegistrationForm';
import { REGISTRATION } from '../../constants/endpoints';
import { createEntityAction } from '../App/actions';
import { registrationAction } from './actions';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: 400,
  },
}));

export function Registration() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const onEditUserFormSubmit = ({ ...data }) => {
    const params = data;
    const payload = {
      endpoint: REGISTRATION,
      sagaRoutine: registrationAction,
      params,
      callback: () => {
        history.push(`/sign_in`);
      },
    };
    dispatch(createEntityAction(payload));
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Регистрация
      </Typography>
      <div className={classes.form}>
        <RegistrationForm onSubmit={onEditUserFormSubmit} />
      </div>
    </div>
  );
}
