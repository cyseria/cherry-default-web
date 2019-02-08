/**
 * @file
 * @author Cyseria
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import {Tag} from 'antd';
import './index.less';
const CheckableTag = Tag.CheckableTag;

export default class TagList extends Component {
    state = {
        selectedTags: []
    };

    handleChange(tag, checked) {
        const {selectedTags} = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        this.setState({selectedTags: nextSelectedTags});
        const {onTagChecked} = this.props;
        if (!!onTagChecked) {
            onTagChecked(nextSelectedTags);
        }
    }
    render() {
        const {tags} = this.props;
        const {selectedTags} = this.state;
        const tagClass = classNames('tags-content', this.props.className);
        return (
            <div className={tagClass}>
                {tags.map((tag, index) => (
                    <CheckableTag
                        className="checkable-tag"
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => this.handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
            </div>
        );
    }
}
