/**
 * @file 项目主页
 * @author Cyseria <xcyseria@gmail.com>
 */

import React, {Component} from 'react';
import {Layout} from 'antd';
import {Route} from 'react-router-dom';

// import Main from './containers/Main';
// import Detail from './containers/Detail';
import Contribute from './containers/Contribute/index';
const {Header} = Layout;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Header className="header">Scaffold Market For BE-FE</Header>
                    <Route exact path="/contribute" component={Contribute} />
                    {/* <Route exact path="/" component={Main} />
                    <Route path="/detail" component={Detail} /> */}
                </Layout>
            </div>
        );
    }
}

export default App;
