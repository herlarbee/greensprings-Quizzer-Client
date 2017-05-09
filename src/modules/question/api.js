import { questionsService } from '../index';

export async function findQuestions(payload) {
  try {
    return await questionsService.find(payload);
  } catch (err) {
    return [];
  }
}

export async function getQuestion(payload) {
  try {
    return await questionsService.get(payload);
  } catch (err) {
    return {};
  }
}

export async function createQuestion(payload) {
  try {
    return await questionsService.create(payload);
  } catch (err) {
    return {};
  }
}
