/**
 * @file
 * @author Cyseria <xcyseria@gmail.com>
 * @created time: 2018-06-10 08:32:00
 * @last modified by: 陈蔓青
 * @last modified time: 2019-02-09 23:57:07
 */

import './style.less';
import React, {Component} from 'react';
import Gallery from './Gallery';
import SideBar from './SideBar';

import {getProjectList} from '../../server';
import {getTagsList} from '../../utils/index';

export default class Main extends Component {
    state = {
        galleryList: [],
        tagsList: [],
        checkedTags: []
    };
    componentWillMount() {
        getProjectList().then(res => {
            const galleryList = res.rows;
            const tagsList = getTagsList(galleryList);
            this.setState({
                galleryList: galleryList,
                tagsList: tagsList,
                checkedTags: []
            });
        });
    }

    handleTagChecked = checkedTags => {
        console.log(checkedTags);
        this.setState({checkedTags});
    };

    render() {
        const {tagsList, galleryList, checkedTags} = this.state;
        return (
            <div className="main-wrap">
                <div className="main-content">
                    <SideBar tagList={tagsList} handleTagChecked={this.handleTagChecked} />
                    <Gallery
                        list={galleryList}
                        checkedTags={checkedTags}
                        handleTagChecked={this.handleTagChecked}
                    />
                </div>
            </div>
        );
    }
}
