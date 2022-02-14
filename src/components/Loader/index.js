import React from 'react';
import {Loader as SemanticLoader} from 'semantic-ui-react';

function Loader() {
    return (
        <div style={{
            margin:'200px'
        }}>
            <SemanticLoader active inline='centered'> Loading </SemanticLoader> 
        </div>
    )
}

export default Loader;
