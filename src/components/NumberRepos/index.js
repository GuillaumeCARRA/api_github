import React from 'react';

import './numberRepos.css';


function NumberRepos({totalRepos}) {
    return (
        <div className="result">
            <p className="result__repos">La recherche a donné {totalRepos} résultats</p>
        </div>
    )
}

export default NumberRepos;
