import React, {Component} from 'react';
import {Tag} from 'antd';
const CheckableTag = Tag.CheckableTag;

export default class HotTags extends Component {
    state = {
        selectedTags: []
    };

    handleChange(tag, checked) {
        const {selectedTags} = this.state;
        const {setCheckedTag} = this.props;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        setCheckedTag(nextSelectedTags);
        this.setState({selectedTags: nextSelectedTags});
    }
    render() {
        const {tagList} = this.props;
        const {selectedTags} = this.state;
        return (
            <div className="side-content">
                {tagList.map(tag => (
                    <CheckableTag
                        className="hot-tags"
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
