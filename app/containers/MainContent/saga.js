import { call, takeEvery } from 'redux-saga/effects';
import { getListSaga } from '../App/saga';
import { MANAGERS } from '../../constants/endpoints';
import { getManagersAction } from './actions';

export function* getManagersSaga({ payload }) {
  const { id } = payload;
  const listPayload = {
    endpoint: MANAGERS(id),
    sagaRoutine: getManagersAction,
  };
  yield call(getListSaga, { payload: listPayload });
}

export default function* headerSaga() {
  yield takeEvery(getManagersAction.TRIGGER, getManagersSaga);
}
