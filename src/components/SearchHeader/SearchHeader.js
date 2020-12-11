import { useContext, useEffect, useState } from 'react';

import logo from '../../assets/img/logo.png';
import Select from 'react-select';
import { SearchContext } from '../../contexts/SearchContext';
import { getCourseData, getYearsByCourse } from '../../api/searchBarData';

import './index.css';

function HeaSearchHeader(props) {
  const { diferentAction } = props;
  console.log(diferentAction);
  const { searchData, setSearchData } = useContext(SearchContext);

  const [cursos, setCursos] = useState([]);
  const [anos, setAnos] = useState([]);
  const [cursoSelected, setCursoSelected] = useState(null);
  const [anoSelected, setAnoSelected] = useState(null);
  const [anoEnable, setAnoEnable] = useState(false);

  useEffect(() => {
    resolveInitialValues();
    //busca os os cursos
    getCourseData().then((data) => {
      setCursos(data);
    });
  }, []);

  // Pega os valores da busca do contexto
  const resolveInitialValues = () => {
    if (searchData.curso !== null) {
      setCursoSelected(searchData.curso.label);
    }
    if (searchData.ano !== null) {
      setAnoSelected(searchData.ano);
      onChangeCourse(searchData.curso.value);
      setAnoEnable(true);
    }
  };

  //Action quando altera o valor de curso <select>
  const onChangeCourse = (item) => {
    setCursoSelected(item);
    console.log(cursoSelected);
    getYearsByCourse(item.value).then((data) => {
      setAnos(data);
      setAnoEnable(true);
    });
  };

  const onChangeYear = (item) => {
    setAnoSelected(item);
  };

  const setSearchQuery = () => {
    const query = {
      curso: cursoSelected,
      ano: anoSelected,
    };
    setSearchData(query);
  };

  return (
    <div className="container">
      <div className="row" style={{ paddingTop: '20px' }}>
        <div className="col-2 col-xl-2">
          <img className="pulse animated logo" src={logo} alt="logo" />
        </div>
        <div className="col-10">
          <div className="searchContainer">
            <div className="row">
              <div className="input-col col-4 ">
                <span className="input_title"> Curso </span>
                <Select
                  value={cursoSelected}
                  className="select_input"
                  placeholder={'Selecione um curso'}
                  options={cursos}
                  onChange={onChangeCourse}
                />
              </div>
              <div className="col-2 input-col">
                <span className="input_title">Ano</span>
                <Select
                  value={anoSelected}
                  options={anos}
                  onChange={onChangeYear}
                  isDisabled={!anoEnable}
                  placeholder={'ano'}
                  className="select_input"
                />
              </div>
              <div className="col-4 input-col">
                <span className="input_title">Palavras-chave</span>
                <input
                  type="text"
                  style={{ width: '100%' }}
                  className="form-control"
                  placeholder="Insira palavras-chave"
                />
              </div>
              <div className="col d-md-flex d-lg-flex d-xl-flex justify-content-md-start align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                <button
                  className="btn btn_input btn-primary btn-block text-center"
                  type="button"
                  onClick={setSearchQuery}
                >
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaSearchHeader;
