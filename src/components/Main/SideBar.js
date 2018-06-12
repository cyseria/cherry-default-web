import React, { Component } from 'react';
import HotTags from './HotTags';

export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div>
                    <h3>全部标签</h3>
                    <HotTags />
                </div>
                <div>
                    <h3>推荐 cli</h3>
                    <ul>
                        <li>vue-cli</li>
                        <li>create-react-app</li>
                        <li>xxx</li>
                    </ul>
                </div>
            </div>
        );
    }
}