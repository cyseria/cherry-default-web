/**
 * @file 项目入口文件
 * @author Cyseria <xcyseria@gmail.com>
 * @created time: 2018-06-25 22:41:44
 * @last modified by: Cyseria
 * @last modified time: 2018-07-08 08:56:49
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.less';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
