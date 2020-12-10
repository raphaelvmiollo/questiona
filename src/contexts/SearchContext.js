import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    curso: null,
    ano: null,
    palavrasChave: null,
  });

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
