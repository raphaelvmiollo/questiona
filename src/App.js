import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Question from './pages/Question';

import SearchProvider from './contexts/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Route path="/question/:id" component={Question} />
      </Router>
    </SearchProvider>
  );
}

export default App;
