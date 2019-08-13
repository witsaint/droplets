import * as React from 'react';
import ReactDOM from 'react-dom'
import Routes from './src/router/base.jsx';

const App = () => {
    return (
        <div>
            <p>Hello world!</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
