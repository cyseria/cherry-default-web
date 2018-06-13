/**
 * @file 
 * @author Cyseria <xcyseria@gmail.com> 
 * @created time: 2018-06-10 08:32:00 
 * @last modified by: Cyseria
 * @last modified time: 2018-06-13 11:46:38
 */

import './style.less';
import request from 'superagent';
import React, { Component } from 'react';
import Gallery from './Gallery';
import SideBar from './SideBar';

import API from '../../server';
import {isArrayContained} from '../../utils/array'

export default class Main extends Component {
    state = {
        galleryList: [],
        tagsList: [],
        selectedTags: []
    }
    async componentWillMount() {
        const {body} = await request.get(API.getList); // {xxx: {name: xx, ...}, ...}
        const galleryList = Object.values(body);
        
        // 提取 tags
        const tagsList = this.state.tagsList;
        galleryList.forEach(item => { // item.tags: string, eg. "react, mobx, webpack"
            const tags = item.tags.split(",");
            tags.forEach(it => {
                const tag = it.replace(/^\s+|\s+$/g,"");
                if (!!tag && tagsList.indexOf(tag) === -1) {
                    tagsList.push(tag);
                }
            }) 
        })
        
        this.setState({
            galleryList: galleryList,
            tagsList: tagsList
        });
    }
    render() {
        return (
            <div className="main-wrap">
                <div className="main-content">
                    <SideBar tagList={this.state.tagsList}/>
                    <Gallery selectedTags={this.state.selectedTags} galleryList={this.state.galleryList}/>
                </div>
            </div>
        );
    }
}
