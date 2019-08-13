import React from 'react';
import ReactDOM from 'react-dom';
import './src/utils/axios_global_config';
import './index.css';
import Routes from './src/router/base.jsx';
import Adopt from './src/utils/adopt'
new Adopt()

ReactDOM.render(<Routes />, document.getElementById('root'));

