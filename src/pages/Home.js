import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

import Header from '../components/Header';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import About from '../components/About';
import Footer from '../components/Footer';

import { SearchContext } from '../contexts/SearchContext';

function Home({ navigation }) {
  const { searchData } = useContext(SearchContext);

  let history = useHistory();

  useEffect(() => {
    if (searchData.curso !== null) {
      history.push('/Search');
    }
  }, [searchData]);

  return (
    <>
      <MetaTags>
        <title>Home - Questiona UFSM</title>
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
      <About />

      <Footer />
    </>
  );
}

export default Home;
