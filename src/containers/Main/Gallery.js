import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import {withRouter} from 'react-router-dom';
import Clipboard from 'react-clipboard.js';
import TagList from '../../components/TagList/index';
import {isArrayContained} from '../../utils/array';

class Gallery extends Component {
    showDetailPage = id => {
        this.props.history.push('/detail?id=' + id);
    };
    handleTagChecked = tags => {
        const {handleTagChecked} = this.props;
        if (!!handleTagChecked) {
            handleTagChecked(tags);
        }
    };
    render() {
        const {list, checkedTags} = this.props;
        const filterList = list.filter(item => {
            return isArrayContained(item.tags, checkedTags);
        });
        const listElement = filterList.map(item => (
            <li className="list-item" key={item.name}>
                <div className="list-item__body">
                    <h4 className="list-item__title">{item.name}</h4>
                    <div className="list-item__desc" title={item.description}>
                        {item.description}
                    </div>
                    <div>作者: {item.author}</div>
                    <TagList className="list-item__tags" tags={item.tags} onTagChecked={this.handleTagChecked} />
                </div>

                <div className="list-item__action">
                    <a className="list-item__action_link" href={item.url} target="_blank">
                        <Icon type="copy" />
                        <span>主页</span>
                    </a>
                    <Clipboard
                        className="list-item__action_link"
                        data-clipboard-text={'cherry init [project-name] ' + item.name}
                    >
                        <Icon type="copy" />
                        <span>复制</span>
                    </Clipboard>
                </div>
            </li>
        ));
        return (
            <div className="list">
                <h3>共 {list.length} 个脚手架</h3>
                <ul className="list-contennt">{listElement}</ul>
            </div>
        );
    }
}

export default withRouter(Gallery);
