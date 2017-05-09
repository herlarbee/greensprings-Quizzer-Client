import { takeEvery, call, put } from 'redux-saga/effects';
import { createQuestion, findQuestions, getQuestion } from './api';

import {
  receiveRecentQuestions,
  receiveQuestion,
  receiveMyQuestions,
  REQUEST_QUESTION,
  REQUEST_RECENT_QUESTIONS,
  REQUEST_MY_QUESTIONS,
  REQUEST_CREATE_QUESTION,
} from './actions';

function* callRecentQuestions({ payload }) {
  const questions = yield call(findQuestions, payload);
  yield put(receiveRecentQuestions(questions.data));
}

export function* recentQuestionsSaga() {
  yield takeEvery(REQUEST_RECENT_QUESTIONS, callRecentQuestions);
}

function* callCreateQuestion({ payload: { redirect, data } }) {
  const question = yield call(createQuestion, data);
  // eslint-disable-next-line
  redirect(question._id);
}

export function* addQuestionSaga() {
  yield takeEvery(REQUEST_CREATE_QUESTION, callCreateQuestion);
}

function* callQuestion({ payload }) {
  const question = yield call(getQuestion, payload);
  yield put(receiveQuestion(question));
}

export function* questionSaga() {
  yield takeEvery(REQUEST_QUESTION, callQuestion);
}

function* callMyQuestions({ payload }) {
  const myQuestions = yield call(findQuestions, payload);
  yield put(receiveMyQuestions(myQuestions.data));
}

export function* myQuestionsSaga() {
  yield takeEvery(REQUEST_MY_QUESTIONS, callMyQuestions);
}
