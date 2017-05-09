import { handleAction } from 'redux-actions';
import {
  receiveQuestion,
  receiveMyQuestions,
  receiveRecentQuestions,
} from './actions';

export const currQuestion = handleAction(receiveQuestion, {
  next(state, { payload }) {
    return payload;
  },
}, {});

export const myQuestions = handleAction(receiveMyQuestions, {
  next(state, { payload }) {
    return payload;
  },
}, []);

export const questions = handleAction(receiveRecentQuestions, {
  next(state, { payload }) {
    return payload;
  },
}, []);
