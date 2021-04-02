import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PageTemplate from '../PageTemplate';
import { getAdsAction } from './actions';
import { selectAds } from './selectors';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer, { key } from './reducer';

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: '#f1e4f1',
  },
  title: {
    marginTop: -20,
  },
  content: {
    marginTop: -10,
    margin: 10,
    width: '50%',
  },
  block: {
    display: 'flex',
  },
}));

export function Ads() {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdsAction());
  }, []);

  const ads = useSelector(selectAds()).content;
  const adsCards = ads ? (
    ads.map(ad => (
      <Grid item xs={12} sm={12} md={12} lg={6} key={ad.id}>
        <Card className={classes.root}>
          <div className={classes.title}>
            <h2>{ad.topic}</h2>
          </div>
          <div className={classes.block}>
            <div className={classes.content}>
              <b>Описание:</b> {ad.content}
              <br />
              <b>Город:</b> {ad.city}
            </div>
            <div className={classes.content}>
              <b>Номер телефона:</b> {ad.phoneNumber}
              <br />
              <b>Цена:</b> {ad.price} бел.руб.
            </div>
          </div>
        </Card>
      </Grid>
    ))
  ) : (
    <p>Нет ни одного объявления</p>
  );
  return <PageTemplate header="Все объявления">{adsCards}</PageTemplate>;
}
