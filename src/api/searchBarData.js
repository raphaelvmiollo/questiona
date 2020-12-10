import api from './api';

export async function getCourseData() {
  let cursos = await api.get('cursos');
  cursos = cursos.data.map((x) => ({
    label: x.nome,
    value: x.id_curso_ufsm,
  }));
  return cursos;
}

export async function getYearsByCourse(id) {
  let anos = await api.get(`cursos/${id}/anos`);
  anos = anos.data.anos.map((x) => ({
    label: x,
    value: x,
  }));
  return anos;
}
