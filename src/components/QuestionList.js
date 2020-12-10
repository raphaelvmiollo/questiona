import { map } from 'lodash';
import { useHistory } from 'react-router-dom';

function QuestionList(props) {
  let history = useHistory();
  const { questoes } = props;

  const goToQuestion = (id) => {
    history.push(`/question/${id}`);
  };
  return (
    <div className="container">
      <section className="resultadoBusca" style={{ marginTop: '80px' }}>
        <div className="row">
          <div className="col-6 offset-1">
            <div className="row">
              <div className="col">
                <h5
                  style={{
                    fontFamily: 'Questrial, sans-serif',
                    fontSize: '24px',
                    color: '#005c8b',
                    paddingLeft: '-39px',
                  }}
                >
                  Foram encontrados 06 resultados para sua busca:
                </h5>
              </div>
            </div>
          </div>
          <div className="col-5" style={{ textAlign: 'right' }}>
            <select>
              <option value={13}>Listar por:</option>
              <option value={14}>This is item 3</option>
            </select>
          </div>
        </div>

        <div className="row no-gutters d-flex flex-row-reverse justify-content-between">
          <div className="col-11 offset-1">
            <div className="row no-gutters row-cols-2">
              {map(questoes, (questao) => (
                <div
                  onClick={() => {
                    goToQuestion(questao.id_questao);
                  }}
                  className="col-6 col-xl-6 offset-0 align-self-sm-stretch"
                  style={{
                    background: 'rgba(54,45,45,0)',
                    borderRadius: '8px',
                    marginTop: '0px',
                    marginRight: '0px',
                    marginLeft: '0px',
                    padding: '9px',
                    paddingTop: '8px',
                    paddingRight: '14px',
                    paddingLeft: '10px',
                  }}
                >
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '10px',
                      padding: '10px',
                    }}
                  >
                    <h5
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 'bold',
                      }}
                    >
                      Questão {questao.num_questao} - Agronomia - 2018
                    </h5>
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>
                      {questao.parte_prova === 'G' ? 'Geral' : 'Específica'}
                      <br />
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>
                      {questao.tipo_questao === 'O' ? 'Objetiva' : 'Discursiva'}
                      <br />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuestionList;
