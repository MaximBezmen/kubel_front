import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PageTemplate from '../PageTemplate';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer, { key } from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import FormActions from '../../components/FormActions';
import { SaveButton } from '../../components/Buttons';

export function CreateAd() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <PageTemplate>
      <Typography variant="h6" gutterBottom>
        Новое объявление
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Имя"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Фамилия"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Тема объявления"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Описание товара"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Город"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Страна"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
      </Grid>
      <Grid container>
        <FormActions>
          <SaveButton />
        </FormActions>
      </Grid>
    </PageTemplate>
  );
}
