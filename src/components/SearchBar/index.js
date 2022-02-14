import React, { useState } from 'react';
import logoGithub from '../../../src/assets/images/logo-github.png';

import './searchBar.css'; 

function SearchBar({submit}) {


  /* INPUT FIELD VALUE */
  const [search, setSearch] = useState('');
  console.log('recherche repo', search);


    return (
        <div>
           <img className="github__logo" alt="logo github" src={logoGithub}/>
            <div className="input__container">
                <form 
                    onSubmit={(event) => {
                        event.preventDefault();
                        submit(search);
                    }}
                >
                    <input 
                        type="text"
                        className="input__searchrepo"
                        placeholder="repo à rechercher"
                        value={search}
                        onChange={(event) => {
                            console.log('search', event.target.value);
                            setSearch(event.target.value)
                        }}

                    />
                </form>
            </div>
        </div>
    )
}

export default SearchBar;