import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
// import Card from '@material-ui/core/Card';
import PageTemplate from '../PageTemplate';
import { getAdsAction } from './actions';
// import { selectAds } from './selectors';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer, { key } from './reducer';

export function Ads() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdsAction());
  }, []);

  // const ads = useSelector(selectAds()).content;
  // const adsCards =
  //   // Object.keys(ads).length > 0 ? (
  //   //   ads.map(ad => (
  //   //     <Card>
  //   //       <h6>{ad.topic}</h6>
  //   //       <p>{ad.content}</p>
  //   //     </Card>
  //   //   ))
  //   // ) : (
  //     <p>Нет ни одного объявления</p>
  //   // );
  return (
    <PageTemplate header="Все объявления">
      <p>Нет ни одного объявления</p>
    </PageTemplate>
  );
}
