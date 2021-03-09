import { createRoutine } from 'redux-saga-routines';
import { CREATE_AGREEMENT, GET_POST, GET_POSTS } from './constants';

export const getPostAction = createRoutine(GET_POST);
export const getPostsAction = createRoutine(GET_POSTS);
export const createAgreementAction = createRoutine(CREATE_AGREEMENT);
