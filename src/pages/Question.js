import { useEffect, useState } from 'react';
import { getQuestion } from '../api/questoes';
import MetaTags from 'react-meta-tags';
import { useParams } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import Header from '../components/Header';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import Footer from '../components/Footer';
import QuestionInfo from '../components/QuestionInfo/QuestionInfo';

function Question(params) {
  // const [initialSeach, setInitialSearch] = useState(null);
  const [questao, setQuestao] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getQuestion(id).then((response) => {
      console.log(response);
      setQuestao(response);
    });
  }, [id]);

  return (
    <>
      <MetaTags>
        <title>Questão - Questiona UFSM</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        ></meta>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>

      <Header />

      <SearchHeader />
      {!isEmpty(questao) && <QuestionInfo questaoInfo={questao} />}
      <Footer />
    </>
  );
}
export default Question;
