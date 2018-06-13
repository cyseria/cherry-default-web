import React, { Component } from 'react';

import { Layout } from 'antd';
import Main from './components/Main';

const { Header, Footer} = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            Scaffold Market For BE-FE
          </Header>
          <Main />
        </Layout>
      </div>
    );
  }
}

export default App;
