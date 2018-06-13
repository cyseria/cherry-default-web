/**
 * @file 
 * @author Cyseria <xcyseria@gmail.com> 
 * @created time: 2018-06-10 08:32:00 
 * @last modified by: Cyseria
 * @last modified time: 2018-06-13 13:49:49
 */

import './style.less';
import request from 'superagent';
import React, { Component } from 'react';
import Gallery from './Gallery';
import SideBar from './SideBar';

import API from '../../server';
import { isArrayContained } from '../../utils/array'

export default class Main extends Component {
    state = {
        galleryList: [],
        tagsList: [],
        checkedList: [],
    }
    async componentWillMount() {
        const { body } = await request.get(API.getList); // {xxx: {name: xx, ...}, ...}
        const gallery = Object.values(body);

        // 提取 tags, 并将 string 转为 array
        const tagsList = this.state.tagsList;
        const galleryList = gallery.map(item => {
            const tags = item.tags.split(",");
            const itemTags = [];
            tags.forEach(it => {
                const tag = it.replace(/^\s+|\s+$/g, "");
                if (!!tag) {
                    itemTags.push(tag);
                }
                if (!!tag && tagsList.indexOf(tag) === -1) {
                    tagsList.push(tag);
                }
            })
            item.tags = itemTags;
            return item;
        })

        this.setState({
            galleryList: galleryList,
            checkedList: galleryList, // 初始化加载所有列表
            tagsList: tagsList
        });
    }

    handleCheckedTagChange = arr => {
        const { galleryList, tagsList } = this.state;
        
        if (arr.length === 0) {
            this.setState({
                checkedList: galleryList
            });
            return;
        }

        let checkedList = [];
        galleryList.forEach(item => {
            const isChecked = isArrayContained(item.tags, arr);
            if (isChecked) {
                checkedList.push(item);
            }
        })
        this.setState({checkedList});
    }

    render() {
        return (
            <div className="main-wrap">
                <div className="main-content">
                    <SideBar tagList={this.state.tagsList} setCheckedTag={this.handleCheckedTagChange} />
                    <Gallery galleryList={this.state.checkedList} />
                </div>
            </div>
        );
    }
}
