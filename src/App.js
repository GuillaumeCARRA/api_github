import React, {useState} from 'react';
import axios from 'axios';

import SearchBar from '../src/components/SearchBar';
import NumberRepos from '../src/components/NumberRepos';
import ShowRepos from '../src/components/ShowRepos'; 
import Loader from '../src/components/Loader';


import './App.css';

function App() {

  /* ALL THE REPOS */
  const [repos, setRepos] = useState([]);

  /* INPUT FIELD VALUE */
  const [search, setSearch] = useState('');

  /* NUMBER TOTAL OF REPOS */
  const [totalRepositories, setTotalRepositories] = useState('');

  /* LOADER FOR REPOS */
  const [loading, setLoading] = useState(false);

  /* TO GET MORE PAGES */
  const [page, setPage] = useState(1);



   const handleSubmit = () => {
     // we delete the repos to see the loader
     setRepos([]);
    setLoading(true); 
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        setRepos(response.data.items);
        setTotalRepositories(response.data.total_count);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }

  const getMoreRepos = () => {
      // increment the state to get more pages
      const nextPages = page + 1; 

      setLoading(true);
      // axios request to have the repos we search
      // and the next page when we click on the button
      axios.get(`https://api.github.com/search/repositories?q=${search}&page=${nextPages}`)
        .then((response) => {
          // we want to keep the first array of the state
          // we create a new array and we use the spread operator
          // for modify the state
          const nextRepos = [...repos, ...response.data.items]
          setRepos(nextRepos);
        })
        .catch((error) => {
          console.log('error', error);
        })
        .finally(() => {
          // finally when we get all we want
          // we can stop the loader
          // and move to the next page
          setLoading(false);
          setPage(nextPages);
        });
  }
  

  return (
    <div className="App">
      <SearchBar 
        searchRepo={search}
        setSearchRepo={setSearch}
        submit={handleSubmit}
      />
      <NumberRepos totalRepos={totalRepositories} />
      <ShowRepos 
        allRepos={repos} 
        loading={loading}
        nextPage={getMoreRepos}
      />
      {/* we dont have data when the page appear */}
      {/* next we want the loader when we search some repos */}
      {loading && repos.length === 0 && <Loader/> } 
    </div>
  );
}

export default App;
