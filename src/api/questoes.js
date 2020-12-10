import api from './api';

export async function getQuestions() {
  let questions = await api.get('questoes');
  return questions.data;
}

export async function getQuestion(id) {
  let questao = await api.get(`questoes/${id}`);
  return questao.data;
}
