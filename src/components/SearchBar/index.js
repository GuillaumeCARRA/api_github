import React from 'react';
import logoGithub from '../../../src/assets/images/logo-github.png';

import './searchBar.css'; 

function SearchBar({submit, searchRepo, setSearchRepo}) {


    return (
        <div>
           <img className="github__logo" alt="logo github" src={logoGithub}/>
            <div className="input__container">
                <form 
                    onSubmit={(event) => {
                        event.preventDefault();
                        submit()
                    }}
                >
                    <input 
                        type="text"
                        className="input__searchrepo"
                        placeholder="repo à rechercher"
                        value={searchRepo}
                        onChange={(event) => {
                            console.log('search', event.target.value);
                            setSearchRepo(event.target.value)
                        }}

                    />
                </form>
            </div>
        </div>
    )
}

export default SearchBar;