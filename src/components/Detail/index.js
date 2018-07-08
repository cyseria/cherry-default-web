/**
 * @file 脚手架详情
 * @author Cyseria <xcyseria@gmail.com>
 * @created time: 2018-06-25 22:45:40
 * @last modified by: Cyseria
 * @last modified time: 2018-07-08 14:15:36
 */

import './style.less';
import React, { Component } from 'react';
import { Button, Card } from 'antd';
import request from 'superagent';

import API from '../../server';
import { getUrlParam } from '../../utils/urls';

export default class Detail extends Component {
    state = {
        name: '',
        description: '',
        owner: '',
        tags: [],
        url: ''
    }

    async componentWillMount() {
        const detailName = getUrlParam('name');
        const {body} = await request
            .get(API.getList)
            .query({ name: detailName });
        const {name, description, owner, tags, url} = body;
        this.setState({
            name,
            description,
            owner,
            url,
            tags: tags.split(",")
        });
    }

    render() {
        let tags = null;
        if (this.state.tags.length > 0) {
            tags = (
                <div className="sidebar-items">
                    <h3>标签</h3>
                    <div className="side-content">
                        {this.state.tags.map(item => (
                            <div key={item} className="ant-tag ant-tag-checkable hot-tags">{item}</div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="main-wrap detail-wrap">
                <div className="main-content">
                    <aside className="sidebar">
                        <div className="sidebar-items">
                            <h3>{this.state.name}</h3>
                            <div className="side-content">
                                <p>{this.state.description}</p>
                                <div>
                                    <Button className="side-button-sm" icon="home" size="small" target="_blank" href={this.state.url}>仓库</Button>
                                    <Button className="side-button-sm" icon="download" size="small" href={this.state.url + '/archive/master.zip'} >下载</Button>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-items">
                            <h3>特性列表</h3>
                            <div className="side-content">
                                <ul>
                                    <li>代码合并</li>
                                    <li>JS代码版本号</li>
                                    <li>sourceMap</li>
                                    <li>命令行快速生成模版</li>
                                    <li>RD/QA/ONLINE环境区分</li>
                                    <li>日志输出</li>
                                </ul>
                            </div>
                        </div>
                        
                        {tags}
                        
                        <div className="sidebar-items">
                            <h3>基本信息</h3>
                            <div className="side-content">
                                <p>创建于: a year ago</p>
                                <p>更新于: a month ago</p>
                            </div>
                        </div>

                    </aside>
                    <main className="introduce">
                        <Card title="README">
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                            {/* {scaffold.readme
                                ? (
                                    <div
                                        className={styles.markdown}
                                        dangerouslySetInnerHTML={{ __html: scaffold.readme }}
                                    />
                                ) : <Spin />
                            } */}
                        </Card>
                    </main>
                </div>
            </div>
        );
    }
}