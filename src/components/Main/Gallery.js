import React, { Component } from 'react';
import {Button} from 'antd';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    render() {
        const { galleryList } = this.props;
        // /picidaejs/picidaejs/archive/master.zip
        return (
            <div className="list">
                <h3>共 {galleryList.length} 个脚手架</h3>
                <ul className="list-contennt">
                    {galleryList.map(item => (
                        <li className="list-item" key={item.name}>
                            <h4 className="list-item__title">{item.name}</h4>
                            <div className="list-item__desc">{item.description}</div>
                            <div>tags: {item.tags}</div>
                            <div className="list-item__operate">
                                <Button icon="home" target="_blank" href={item.url}>主页</Button>
                                <Button icon="download" href={item.url + '/archive/master.zip'}>下载</Button>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        );
    }
}