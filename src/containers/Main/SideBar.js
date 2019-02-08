import React, {Component} from 'react';
import TagList from '../../components/TagList/index';

export default class SideBar extends Component {
    state = {
        hotCli: [
            {name: 'vue-cli', link: 'https://github.com/vuejs/vue-cli'},
            {name: 'create-react-app', link: 'https://github.com/facebook/create-react-app'}
        ]
    };

    handleTagChecked = tags => {
        this.props.handleTagChecked(tags);
    }

    render() {
        const {tagList} = this.props;
        const {hotCli} = this.state;
        return (
            <div className="sidebar">
                <div className="sidebar-items">
                    <h3>全部标签</h3>
                    <TagList tags={tagList} onTagChecked={this.handleTagChecked} />
                </div>
                <div className="sidebar-items">
                    <h3>推荐 cli</h3>
                    <ul className="side-content">
                        {hotCli.map(cli => (
                            <li key={cli.name}>
                                <a href={cli.link}>{cli.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
