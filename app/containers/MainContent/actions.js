import { createRoutine } from 'redux-saga-routines';
import { GET_MANAGERS } from './constants';

export const getManagersAction = createRoutine(GET_MANAGERS);
