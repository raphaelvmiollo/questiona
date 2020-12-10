import { useEffect, useState } from 'react';
import { getQuestions } from '../api/questoes';
import MetaTags from 'react-meta-tags';

import Header from '../components/Header';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import Footer from '../components/Footer';
import QuestionList from '../components/QuestionList';
// import SearchProvider from '../contexts/SearchContext';

function Search() {
  // const [initialSeach, setInitialSearch] = useState(null);
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    getQuestions().then((response) => {
      setQuestoes(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <MetaTags>
        <title>Resultados - Questiona UFSM</title>
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
      <QuestionList questoes={questoes} />

      <Footer />
    </>
  );
}

export default Search;
