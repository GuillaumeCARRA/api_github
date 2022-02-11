import React from 'react';

import {Card, Icon} from 'semantic-ui-react'; 

import './showRepos.css'; 


function ShowRepos({allRepos}) {

    return (
        <div style={{
            margin: '15px',
          }}
          >
        <Card.Group centered itemsPerRow={4} >
            {allRepos.map((repo) => (
                
                <Card 
                    className="card"
                    key={repo.id}
                    image={repo.owner.avatar_url}
                    header={repo.name}
                    meta={repo.owner.login}
                    description={repo.description}
                    extra={(
                        <a>
                            <Icon name="star" />
                            {repo.stargazers_count} stars
                        </a>
                    )}
                />
            ))}
        </Card.Group>
        </div>
    )
}

export default ShowRepos;