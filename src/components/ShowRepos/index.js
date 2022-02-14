import React from 'react';

import {Card, Icon, Grid, Button} from 'semantic-ui-react'; 

import './showRepos.css'; 


function ShowRepos({allRepos, loading, nextPage}) {

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
        {/* when we get repos the button show up */}
        {allRepos.length > 0 && (
            <Grid>
                {/* to center the button */}
                <Grid.Column textAlign="center">
                    <Button onClick={nextPage}>
                        {loading 
                            ? <Icon loading name='spinner' />
                            : <Icon name="angle down" />
                        }
                        Voir plus de résultats
                    </Button>
                </Grid.Column>
            </Grid>
        )}
        </div>
    )
}

export default ShowRepos;