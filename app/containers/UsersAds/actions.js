import { createRoutine } from 'redux-saga-routines';
import { GET_CONTRACTS } from './constants';

export const getContractsAction = createRoutine(GET_CONTRACTS);
