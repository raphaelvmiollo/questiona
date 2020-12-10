import React from 'react';

function QustionInfo(props) {
  const { questaoInfo } = props;
  const url_image = 'http://enade.gabrieldoyle.com/' + questaoInfo.imagem;

  return (
    <div className="container">
      {' '}
      <section className="resultadoBusca" style={{ marginTop: '80px' }}>
        <div className="row">
          <div className="col-9 offset-1">
            <div className="row">
              <div className="col-1">
                <a href="#teste">
                  <i
                    className="fa fa-long-arrow-left d-flex d-xl-flex flex-row-reverse justify-content-xl-center align-items-xl-start"
                    style={{
                      fontSize: '37px',
                      color: 'rgb(0,92,139)',
                      marginTop: '9px',
                    }}
                  />
                </a>
              </div>
              <div className="col-11">
                <h5
                  style={{
                    fontFamily: 'Questrial, sans-serif',
                    color: '#005C8B',
                  }}
                >
                  CURSO DE {questaoInfo.prova.area_avaliacao.nome} | PROVA{' '}
                  {questaoInfo.prova.ano}
                </h5>
                <h5 style={{ color: '#005C8B' }}>
                  QUESTÃO {questaoInfo.num_questao} - GERAL - OBJETIVA
                  <a
                    className="d-flex float-right flex-row"
                    href={questaoInfo.prova.url_prova}
                    style={{
                      fontSize: '16px',
                      fontFamily: 'Questrial, sans-serif',
                    }}
                  >
                    VER PROVA COMPLETA
                  </a>
                </h5>
              </div>
            </div>
            <img
              src={url_image}
              alt="imagem da prova"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-2" style={{ paddingTop: '65px' }}>
            <span
              style={{
                color: '#005C8B',
                marginTop: '0px',
                paddingTop: 0,
                fontSize: '22px',
              }}
            >
              GABARITO: {questaoInfo.gabarito}
            </span>
            <div>
              <h1
                style={{
                  fontSize: '50px',
                  color: '#005C8B',
                  marginTop: '35px',
                }}
              >
                65%
              </h1>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  color: '#005C8B',
                  marginTop: '35px',
                }}
              >
                acertos no curso
              </span>
              <h1
                style={{
                  fontSize: '50px',
                  color: '#005C8B',
                  marginTop: '35px',
                }}
              >
                65%
              </h1>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  color: '#005C8B',
                  marginTop: '35px',
                }}
              >
                acertos na região
              </span>
              <h1
                style={{
                  fontSize: '50px',
                  color: '#005C8B',
                  marginTop: '35px',
                }}
              >
                65%
              </h1>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  color: '#005C8B',
                  marginTop: '35px',
                }}
              >
                acertos no Brasil
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QustionInfo;
