import React from 'react';

function ComponentTwo() {
    return (
        <div style={{ backgroundColor: 'lightgreen', height: '100px'}}>
            <p style={{ textAlign: 'center' }}>Component Two called from component One</p>
        </div>
    )
}

export default ComponentTwo;
