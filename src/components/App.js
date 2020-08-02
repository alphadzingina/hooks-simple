import React, { useState } from 'react';

const App = () => {
    const [resource, setResource ] = useState('posts');

    return (
        <div>
            <div>
                <button className="ui button" onClick={() => setResource('posts')}>Posts</button>
                <button className="ui button" onClick={() => setResource('todos')}>Todos</button>
            </div>
            {resource}
        </div>
    );
};

export default App;