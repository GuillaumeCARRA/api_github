import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from '../src/components/SearchBar';
import NumberRepos from '../src/components/NumberRepos';
import ShowRepos from '../src/components/ShowRepos'; 

// import gitRepos from '../src/data/repos'; 

import './App.css';

function App() {


  /* ALL THE REPOS */
  const [repos, setRepos] = useState([]);

  /* NUMBER TOTAL OF REPOS */
  const [totalRepositories, setTotalRepositories] = useState('');

   const handleSubmit = (searchTheRepo) => {
    axios.get(`https://api.github.com/search/repositories?q=${searchTheRepo}`)
      .then((response) => {
        setRepos(response.data.items);
        setTotalRepositories(response.data.total_count);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  

  return (
    <div className="App">
      <SearchBar 
        submit={handleSubmit}
      />
      <NumberRepos totalRepos={totalRepositories} />
      <ShowRepos allRepos={repos} />
    </div>
  );
}

export default App;
