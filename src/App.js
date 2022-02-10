import React from 'react';
import SearchBar from '../src/components/SearchBar';
import NumberRepos from '../src/components/NumberRepos';
import ShowRepos from '../src/components/ShowRepos'; 

import repos from '../src/data/repos'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <NumberRepos />
      <ShowRepos />
    </div>
  );
}

export default App;
