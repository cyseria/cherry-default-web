/**
 * @file 脚手架详情
 * @author Cyseria <xcyseria@gmail.com>
 * @created time: 2018-06-25 22:45:40
 * @last modified by: Cyseria
 * @last modified time: 2018-06-25 23:27:30
 */

import './style.less';
import React, { Component } from 'react';
import { Button, Card } from 'antd';

export default class Detail extends Component {
    render() {
        return (
            <div className="main-wrap detail-wrap">
                <div className="main-content">
                    <aside className="sidebar">
                        <div className="sidebar-items">
                            <h3>ant-design-pro</h3>
                            <div className="side-content">
                                <p>👻🎃 An out-of-box UI solution for enterprise applications</p>
                                <div>
                                    <Button icon="home" size="small" target="_blank">仓库</Button>
                                    <Button icon="download" size="small" href='/archive/master.zip'>下载</Button>
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

                        <div className="sidebar-items">
                            <h3>标签</h3>
                            <div className="side-content">
                                <div className="ant-tag ant-tag-checkable hot-tags">vue</div>
                            </div>
                        </div>

                        <div className="sidebar-items">
                            <h3>基本信息</h3>
                            <div className="side-content">
                                <p>创建于: a year ago</p>
                                <p>更新于: a month ago</p>
                            </div>
                        </div>

                    </aside>
                    <main className="introduce">
                        <Card title="Read Me">
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </main>
                </div>
            </div>
        );
    }
}