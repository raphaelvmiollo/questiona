import { useEffect, useState, useContext } from 'react';
import { getQuestions } from '../api/questoes';
import MetaTags from 'react-meta-tags';

import { SearchContext } from '../contexts/SearchContext';

import AnimationSearch from '../components/AnimationSearch/AnimationSearch';
import Header from '../components/Header';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import Footer from '../components/Footer';
import QuestionList from '../components/QuestionList/QuestionList';
// import SearchProvider from '../contexts/SearchContext';

function Search() {
  // const [initialSeach, setInitialSearch] = useState(null);
  const [questoes, setQuestoes] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const { searchData } = useContext(SearchContext);

  useEffect(() => {
    setQuestoes(null);
    getQuestions(searchData).then((response) => {
      setTotalResults(response.data.total);
      setQuestoes(response.data.data);
    });
  }, [searchData]);

  const handleScroll = (e) => {
    console.log(e);
  };
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
      <div onScroll={handleScroll}>
        {questoes !== null && (
          <QuestionList questoes={questoes} totalResults={totalResults} />
        )}
      </div>
      {questoes === null && <AnimationSearch />}
      <Footer />
    </>
  );
}

export default Search;
