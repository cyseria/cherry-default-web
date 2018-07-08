/**
 * @file 项目主页
 * @author Cyseria <xcyseria@gmail.com>
 * @created time: 2018-06-25 22:40:57
 * @last modified by: Cyseria
 * @last modified time: 2018-07-08 09:01:39
 */

import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom'

import Main from './components/Main';
import Detail from './components/Detail';
const { Header } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            Scaffold Market For BE-FE
          </Header>
          <Route exact path='/' component={Main} />
          <Route path='/detail' component={Detail} />
        </Layout>
      </div>
    );
  }
}

export default App;
