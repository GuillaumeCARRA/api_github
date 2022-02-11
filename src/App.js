import React, {useState} from 'react';
import SearchBar from '../src/components/SearchBar';
import NumberRepos from '../src/components/NumberRepos';
import ShowRepos from '../src/components/ShowRepos'; 

import gitRepos from '../src/data/repos'; 

import './App.css';

function App() {

  /* INPUT FIELD VALUE */
  const [search, setSearch] = useState('');
  console.log('recherche repo', search);

  /* ALL THE REPOS */
  const [repos, setRepos] = useState([]);

  const handleSubmit = () => {
    setSearch("");
  }

  return (
    <div className="App">
      <SearchBar 
        searchRepo={search}
        setSearchRepo={setSearch}
        submit={handleSubmit}
      />
      <NumberRepos totalRepos={gitRepos.total_count} />
      <ShowRepos allRepos={gitRepos.items} />
    </div>
  );
}

export default App;
