import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignInForm from '../SigninForm';
import { SIGN_IN } from '../../constants/endpoints';
import { createEntityAction } from '../App/actions';
import { signInAction } from './actions';

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

export function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const onEditUserFormSubmit = ({ ...data }) => {
    const params = data;
    const payload = {
      endpoint: SIGN_IN,
      sagaRoutine: signInAction,
      params,
      callback: () => {
        history.push(`/ads`);
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
        Вход
      </Typography>
      <div className={classes.form}>
        <SignInForm onSubmit={onEditUserFormSubmit} />
      </div>
    </div>
  );
}
