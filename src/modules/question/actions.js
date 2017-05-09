import { createAction } from 'redux-actions';

export const REQUEST_RECENT_QUESTIONS = 'REQUEST_RECENT_QUESTIONS';
export const RECEIVE_RECENT_QUESTIONS = 'RECEIVE_RECENT_QUESTIONS';
export const REQUEST_CREATE_QUESTION = 'REQUEST_CREATE_QUESTION';
export const REQUEST_QUESTION = 'REQUEST_QUESTION';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REQUEST_MY_QUESTIONS = 'REQUEST_MY_QUESTIONS';
export const RECEIVE_MY_QUESTIONS = 'RECEIVE_MY_QUESTIONS';

export const requestRecentQuestions = createAction(REQUEST_RECENT_QUESTIONS);
export const receiveRecentQuestions = createAction(RECEIVE_RECENT_QUESTIONS);
export const requestCreateQuestion = createAction(REQUEST_CREATE_QUESTION);
export const requestQuestion = createAction(REQUEST_QUESTION);
export const receiveQuestion = createAction(RECEIVE_QUESTION);
export const requestMyQuestions = createAction(REQUEST_MY_QUESTIONS);
export const receiveMyQuestions = createAction(RECEIVE_MY_QUESTIONS);
