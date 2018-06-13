import React, { Component } from 'react';
import { Tag } from 'antd';
const CheckableTag = Tag.CheckableTag;

export default class HotTags extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTags: []
        }
    }
    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ?
            [...selectedTags, tag] :
            selectedTags.filter(t => t !== tag);

        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }
    render() {
        const { tagList } = this.props;
        const { selectedTags } = this.state;
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