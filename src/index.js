import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
import './index.css'

const title = 'React with Webpack and Babel';

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept