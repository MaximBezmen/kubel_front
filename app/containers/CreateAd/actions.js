import { createRoutine } from 'redux-saga-routines';
// eslint-disable-next-line import/named
import { CREATE_AD } from './constants';

export const createAdAction = createRoutine(CREATE_AD);
