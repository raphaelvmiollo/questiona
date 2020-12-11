import api from './api';

export async function getQuestions(searchData) {
  console.log(searchData);
  let questions = await api.get(
    `questoes?area_id=${searchData.curso.value}&ano=${searchData.ano.value}&limit=40&q=${searchData.palavrasChaves}`
  );
  return questions;
}

export async function getQuestion(id) {
  let questao = await api.get(`questoes/${id}`);
  return questao.data;
}

//http://enade.gabrieldoyle.com/api/questoes?q=planejamento&area_id=2&ano=2018&limit=2&page=2
