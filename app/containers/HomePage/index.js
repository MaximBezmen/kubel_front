import React from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {
  createEntityAction,
  getListAction,
  getOneAction,
} from '../App/actions';
import reducer from './reducer';
import { useInjectReducer } from '../../utils/injectReducer';
import {
  createAgreementAction,
  getPostAction,
  getPostsAction,
} from './actions';
import { POSTS, STATEMENTS, USERS } from '../../constants/endpoints';
import PageTemplate from '../PageTemplate';
import messages from './messages';
import MuiAutoComplete from './MuiAutoComplete';

const key = 'home';

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  iceCreamType: Yup.string().required(),
  country: Yup.array()
    .nullable()
    .required(),
});

export default function HomePage() {
  useInjectReducer({ key, reducer });
  const intl = useIntl();

  const title = intl.formatMessage(messages.header);
  const dispatch = useDispatch();

  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);

  return (
    <PageTemplate>
      {title} --
      <button
        type="button"
        onClick={() => {
          dispatch(
            getListAction({
              endpoint: POSTS,
              sagaRoutine: getPostsAction,
            }),
          );
        }}
      >
        GET Posts
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch(
            getOneAction({
              endpoint: USERS,
              sagaRoutine: getPostAction,
              id: 3,
            }),
          );
        }}
      >
        GET User
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch(
            createEntityAction({
              endpoint: STATEMENTS,
              sagaRoutine: createAgreementAction,
              params: {
                userId: 11,
                type: 'day_off',
                status: 'in_progress',
                draft: true,
                days: 2,
                dateFrom: '2020-10-21',
                dateTo: '2020-11-06',
                comment: 'Test',
              },
            }),
          );
        }}
      >
        Create Agreement
      </button>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={register}
                name="firstName"
                error={Boolean(errors.firstName?.message)}
                helperText={errors.firstName?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                style={{ minWidth: 300 }}
                error={Boolean(errors.iceCreamType?.message)}
              >
                <Controller
                  name="iceCreamType"
                  as={
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value="chocolate">Chocolate</MenuItem>
                      <MenuItem value="chocolate">Strawberry</MenuItem>
                      <MenuItem value="vanilla">Vanilla</MenuItem>
                    </Select>
                  }
                  control={control}
                  defaultValue=""
                />

                <FormHelperText>{errors.iceCreamType?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                style={{ minWidth: 300 }}
                error={Boolean(errors.country?.message)}
              >
                <MuiAutoComplete name="country" control={control} />
                <FormHelperText>{errors.country?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <input type="submit" />
          </Grid>
        </form>
      </div>
    </PageTemplate>
  );
}
