/**
 * @file 
 * @author Cyseria <xcyseria@gmail.com> 
 * @created time: 2018-06-10 08:32:00 
 * @last modified by: Cyseria
 * @last modified time: 2018-06-13 06:41:59
 */

import './style.css';
import React, { Component } from 'react';

import List from './List';
import SideBar from './SideBar';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryList: []
        }
    }
    componentWillMount() {
    }
    render() {
        // const { galleryList } = this.state;
        return (
            <div className="main-wrap">
                <div className="main-content">
                    <SideBar />
                    <List />
                </div>
            </div>
        );
    }
}
