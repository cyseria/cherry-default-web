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
            Cherry Scaffold Market For BE-FE
          </Header>
          <Main />
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
